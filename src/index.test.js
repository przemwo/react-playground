import expect from 'expect';
import * as index from './index';

const testToggleTodo = () => {
  const stateBefore = [
    {
      id: 0,
      text: 'Learn Redux',
      completed: false
    },
    {
      id: 1,
      text: 'Go shopping',
      completed: false
    }
  ];
  const action = {
    type: 'TOGGLE_TODO',
    id: 1
  };
  const stateAfter = [
    {
      id: 0,
      text: 'Learn Redux',
      completed: false
    },
    {
      id: 1,
      text: 'Go shopping',
      completed: true
    }
  ];
  expect(index.todos(stateBefore, action)).toEqual(stateAfter);
};

const testAddTodo = () => {
  const stateBefore = [];
  const action = {
    type: 'ADD_TODO',
    id: 0,
    text: 'Learn Redux'
  };
  const stateAfter = [
    {
      id: 0,
      text: 'Learn Redux',
      completed: false
    }
  ];
  expect(index.todos(stateBefore, action)).toEqual(stateAfter);
};

describe('Test ', () => {
  it('testAddTodo should', testAddTodo);
  // it('testToggleTodo should', testToggleTodo);
  console.log('Passed!!!');
});

testToggleTodo();
console.log('testToggleTodo passed');
