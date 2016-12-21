import React from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';
import { toggleTodo } from './../actions/actions';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_ACTIVE':
      return todos.filter(todo => !todo.completed);
    case 'SHOW_COMPLETED':
      return todos.filter(todo => todo.completed);
  }
};

const TodoList = ({todos, onTodoClick}) => {
  return(
    <ul>
      {todos.map(todo =>
        <Todo
           key={todo.id}
           {...todo}
           onClick={() => onTodoClick(todo.id)}
        />
      )}
    </ul>
  );
};
const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id));
    }
  };
};
// Use connect to create container component that wraps presentation component
const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default VisibleTodoList;
