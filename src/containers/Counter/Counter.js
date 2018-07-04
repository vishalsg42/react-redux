import React, { Component } from 'react';
import { connect } from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionTypes from '../../store/actions';

class Counter extends Component {
    state = {
      counter: 0
    }

    counterChangedHandler = ( action, value = 1   ) => {
        console.log('action',action);
        console.log('value',value);

    }

    render () {
        return (
            
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={ this.props.onIncrementCounter } />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter }  />
                <CounterControl label="Add 5" clicked={ this.props.onAdd }  />
                <CounterControl label="Subtract 5" clicked={ this.props.onSubtract }  />
                <hr />
                <button onClick={this.props.onStoreResult}>Store</button>
                <ul onClick={this.props.onDeleteResult}>
                    {
                        this.props.storedResults.map( strResult => (
                            
                            <li key={strResult.id} onClick={()=> this.props.onDeleteResult(strResult.id)}>{strResult.value}</li>
                        ))
                    }
                </ul>
                <iframe src="https://www.ustream.tv/embed/23595968?html5ui" style={{border: 0}}  width="720" height="405"></iframe>
            </div>
        );
    }
}

const mapStatetoProps = state => {
  // console.log(state);
  
    return {
        ctr: state.counter,
        storedResults: state.results
    } ;
};

const mapDispatchtoProps = dispatch => {
    return {
       onIncrementCounter: () => dispatch({type: actionTypes.INCREMENT ,value: 1}),
       onDecrementCounter: () => dispatch({type: actionTypes.DECREMENT,value: 1}),
       onAdd: () => dispatch({type: actionTypes.ADD ,value: 5}),
       onSubtract: () => dispatch({type: actionTypes.SUBTRACT ,value: 5}),
       onStoreResult: () => dispatch({type: actionTypes.STORE_RESULT }),
       onDeleteResult: (id) => dispatch({type: actionTypes.DELETE_RESULT ,resultId: id}),
    } 
}

export default connect(mapStatetoProps,mapDispatchtoProps)(Counter);