const initialState =  {
    counter: 10
}

const reducer = (state = initialState,actions)=>{
    if(actions.type === 'Increment_Counter') {
        return {
            counter: state.counter + 1
        }
    }
}

export default reducer;