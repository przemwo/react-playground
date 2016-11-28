import expect from 'expect';
import * as index from './index';

describe('Test todos reducer', () => {
  it('should pass', () => {
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
  });
  console.log('Passed!!!');
});
