import { createStore } from 'redux';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import todoApp from './reducers/todoApp';
import App from './components/App';

const initialTodos = {
  todos: [{
    id: 0,
    text: 'Hello!',
    completed: false
  }]
};

ReactDOM.render(
  <Provider store={createStore(todoApp, initialTodos)}>
    <App />
  </Provider>,
  document.getElementById('app')
);
