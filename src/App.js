import React, { Component } from 'react';
import { createStore } from 'redux';
import reducer from './store/reducer';
import { Provider } from 'react-redux'
import Counter from './containers/Counter/Counter';
import './App.css';


const store = createStore(reducer);
class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Counter />
        </Provider>
      </div>
    );
  }
}

export default App;
