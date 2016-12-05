import { createStore } from 'redux';
// import { combineReducers } from 'redux';

// todo reducer
export const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
    case 'TOGGLE_TODO':
      if(state.id !== action.id) {
        return state;
      }
      return {
        ...state,
        completed: !state.completed
      };
    default:
      return state;
  }
};

// todos reducer
export const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ];
      // return [...state, {id: action.id, text: action.text, completed: false}];
    case 'TOGGLE_TODO':
      return state.map(t => todo(t, action));
    default:
      return state;
  }
};

// visiblity filter reducer
export const visiblityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
};

// implementing combineReducers from scratch
const combineReducers = (reducers) => {
  return (state = {}, action) => {
    return Object.keys(reducers).reduce((nextState, key) => {
      nextState[key] = reducers[key](state[key], action);
      return nextState;
    }, {});
  };
};

// todoApp main reducer
export const todoApp = combineReducers({
  todos,
  visiblityFilter
});
// export const todoApp = (state = {}, action) => {
//   return {
//     todos: todos(state.todos, action),
//     visiblityFilter: visiblityFilter(state.visiblityFilter, action)
//   };
// };

//create store and pass top reducer to it
const store = createStore(todoApp);

console.log('Initial state:');
console.log(JSON.stringify(store.getState(), null, 2));
console.log('====================================');

console.log('Add todo 0:');
store.dispatch({
  type: 'ADD_TODO',
  id: 0,
  text: 'Learn Redux'
});
console.log('Current state:');
console.log(JSON.stringify(store.getState(), null, 2));
console.log('====================================');

console.log('Add todo 1:');
store.dispatch({
  type: 'ADD_TODO',
  id: 1,
  text: 'Go shopping'
});
console.log('Current state:');
console.log(JSON.stringify(store.getState(), null, 2));
console.log('====================================');

console.log('Toggle todo 1:');
store.dispatch({
  type: 'TOGGLE_TODO',
  id: 1,
});
console.log('Current state:');
console.log(JSON.stringify(store.getState(), null, 2));
console.log('====================================');

console.log('Change visiblityFilter to show completed:');
store.dispatch({
  type: 'SET_VISIBILITY_FILTER',
  filter: 'SHOW_COMPLETED'
});
console.log('Current state:');
console.log(JSON.stringify(store.getState(), null, 2));
console.log('====================================');
