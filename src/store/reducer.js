const initialState =  {
    counter: 10
}

const reducer = (state = initialState,actions)=>{
    if(actions.type === 'Increment_Counter') {
        return {
            counter: state.counter + actions.value
        }
    }
    if(actions.type === 'ADD') {
        return {
            counter: state.counter + actions.value
        }
    }
    if(actions.type === 'Decrement_Counter') {
        return {
            counter: state.counter + actions.value
        }
    }
    if(actions.type === 'SUBTRACT') {
        return {
            counter: state.counter - actions.value
        }
    }
    return state;
}

export default reducer;