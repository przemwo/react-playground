import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: action.id , text: action.text, completed: false }];
    case 'TOGGLE_TODO':
      return state.map(todo => todo.id === action.id ? Object.assign({}, todo, { completed: !todo.completed }) : todo);
    default:
      return state;
  }
};

const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
     return state - 1;
    default:
      return state;
  }
};

const store = createStore(counter);
console.log(store.getState());
store.dispatch({ type: 'INCREMENT' });
console.log(store.getState());

const App = ({ value, onIncrement, onDecrement }) => (
  <div>
    <h1>{value}</h1>
    <button onClick={onIncrement}>+</button>
    <button onClick={onDecrement}>-</button>
  </div>
);


const render = () => {
  ReactDOM.render(
    <App
      value={store.getState()}
      onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
      onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
    />,
    document.getElementById('app')
  );
};

store.subscribe(render);
render();
