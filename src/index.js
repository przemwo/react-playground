// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import './styles.css';

// ReactDOM.render(
//   <App />,
//   document.getElementById('app')
// );

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


