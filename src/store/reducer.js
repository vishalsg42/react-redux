import * as  actionTypes from './actions';

const initialState =  {
    counter: 10,
    results: []
}

const reducer = (state = initialState,actions)=>{
    
    if(actions.type === actionTypes.INCREMENT) {
        return {
            ...state,
            counter: state.counter + actions.value
        }
    }
    if(actions.type === actionTypes.ADD) {
        return {
            ...state,
            counter: state.counter + actions.value
        }
    }
    if(actions.type === actionTypes.DECREMENT) {
        return {
            ...state,
            counter: state.counter - actions.value
        }
    }
    if(actions.type === actionTypes.SUBTRACT ) {
        return {
            ...state,
            counter: state.counter - actions.value
        }
    }
    if(actions.type === actionTypes.STORE_RESULT ) {
        return {
            ...state,
            results: state.results.concat({id: new Date(), value: state.counter })
        }
    }

    if(actions.type === actionTypes.DELETE_RESULT) {
        
        const updateArray = state.results.filter((result)=> {
            
            return result.id !== actions.resultId
        } );
        console.log(updateArray);
        
        return {
            ...state,
            results: updateArray
        }
    }
    return state;
}

export default reducer;