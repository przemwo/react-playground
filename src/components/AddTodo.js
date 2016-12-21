import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from './../actions/actions';

let AddTodo = ({dispatch}) => {
  let input;
  return(
    <div>
      <input ref={node => {
          input = node;
        }} />
      <button
        onClick={() => {
          dispatch(addTodo(input.value));
          input.value = '';
        }}
        >
        Add Todo
      </button>
    </div>
  );
};
AddTodo = connect()(AddTodo); //if there is no arguments passed to connect, dispatch function is passed to the presentation component implicitly

export default AddTodo;
