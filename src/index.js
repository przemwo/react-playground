// import { createStore } from 'redux';

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

// Reimplementing Redux store
const createStore = (reducer) => {
  let state;
  let listeners = [];

  const getState = () => state;

  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach(listener => listener());
  };

  const subscribe = (listener) => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter(l => l !== listener);
    };
  };

  dispatch({});

  return { getState, subscribe, dispatch };
};

// Create store
const store = createStore(counter);

// Create render method - shows current state
const render = () => {
  document.body.innerText = store.getState();
};

// Subscribe render method to every change of the state
store.subscribe(render);

// Initial call to render method
render();

// Add event to change state by dispatching an action
document.addEventListener('click', () => {
  store.dispatch({ type: 'INCREMENT' });
});
