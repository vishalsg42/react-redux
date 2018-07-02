import React, { Component } from 'react';
import { connect } from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
      counter: 0
    }

    counterChangedHandler = ( action, value = 1   ) => {
        console.log('action',action);
        console.log('value',value);
        
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
            default:
                console.log('hello');
            
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={ this.props.onIncrementCounter } />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter }  />
                <CounterControl label="Add 5" clicked={ this.props.onAdd }  />
                <CounterControl label="Subtract 5" clicked={ this.props.onSubtract }  />
            </div>
        );
    }
}

const mapStatetoProps = state => {
  // console.log(state);
  
    return {
        ctr: state.counter
    } ;
};

const mapDispatchtoProps = dispatch => {
    return {
       onIncrementCounter: () => dispatch({type: 'Increment_Counter',value: 1}),
       onDecrementCounter: () => dispatch({type: 'Decrement_Counter',value: 1}),
       onAdd: () => dispatch({type: 'ADD',value: 5}),
       onSubtract: () => dispatch({type: 'SUBTRACT',value: 5})
    } 
}

export default connect(mapStatetoProps,mapDispatchtoProps)(Counter);