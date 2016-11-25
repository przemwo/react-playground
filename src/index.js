import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

// Reducer method
export const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

// React dump component
const Counter = (props) => {
  return(
    <div>
      <h1>{props.value}</h1>
      <button onClick={props.onIncrement}>+</button>
      <button onClick={props.onDecrement}>-</button>
    </div>
  );
};

// Create store
const store = createStore(counter);

// Create render method - shows current state
const render = () => {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrement={() =>
      store.dispatch({
        type: 'INCREMENT'
      })}
      onDecrement={() =>
      store.dispatch({
        type: 'DECREMENT'
      })} />,
    document.getElementById('app')
  );
};

// Subscribe render method to every change of the state
store.subscribe(render);

// Initial call to render method
render();
