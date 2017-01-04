import { v4 } from 'node-uuid';

// Action creators
export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    id: v4(),
    text,
  };
};
export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
};
