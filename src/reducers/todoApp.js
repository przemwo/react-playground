import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';

// todoApp main reducer
const todoApp = combineReducers({
  todos,
  visibilityFilter
});

export default todoApp;
