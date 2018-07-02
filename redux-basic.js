const redux = require('redux');
// console.log(redux);

const initialState = {
    counter: 0
}
const rootReducer = (state = initialState ,actions) =>{
    if(actions.type === 'INC_COUNTER') {
        return {
            ...state,
            counter: state.counter+ 1
        }
    }
    if(actions.type === 'ADD_COUNTER') {
        return {
            // ...state,
            counter: state.counter+ actions.value
        }
    }
    return state;
}

// store
const store = redux.createStore(rootReducer);
console.log(store.getState());
// subscription
store.subscribe(()=>{
    console.log('subscribe',store.getState());
    
})
// dispatcher
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER',value: 10});
console.log(store.getState());


// 