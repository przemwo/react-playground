import { createStore, combineReducers } from 'redux';
import { Provider, connect } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';

// Action creators
let nextTodoId = 0;
const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  };
};
const setVisibilityFilter = (filter) => {
  return {
      type: 'SET_VISIBILITY_FILTER',
      filter
  };
};
const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
};


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

// todoApp main reducer
export const todoApp = combineReducers({
  todos,
  visiblityFilter
});

const Link = ({active, children, onClick}) => {
  if(active) {
    return(
      <span>{children}</span>
    );
  }
  return (
    <a
      href="#"
      onClick={e => {
        e.preventDefault();
        onClick();
      }}>
      {children}
    </a>
  );
};

const mapStateToPropsLink = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visiblityFilter
  };
};
const mapDispatchToPropsLink = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter));
    }
  };
};
const FilterLink = connect(mapStateToPropsLink, mapDispatchToPropsLink)(Link);

const Footer = () => {
  return(
    <p>
      Show:
      {' '}
      <FilterLink filter="SHOW_ALL">All</FilterLink>
      {' '}
      <FilterLink filter='SHOW_ACTIVE'>Active</FilterLink>
      {' '}
      <FilterLink filter='SHOW_COMPLETED'>Completed</FilterLink>
    </p>
  );
};

const Todo = ({onClick, completed, text}) => {
  return(
    <li
      onClick={onClick}
      style={{ textDecoration: completed ? 'line-through' : 'none'}}>
      {text}
    </li>
  );
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

const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos, state.visiblityFilter)
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

const TodoApp = () => {
  return(
    <div>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
  );
}

ReactDOM.render(
  <Provider store={createStore(todoApp)}>
    <TodoApp />
  </Provider>,
  document.getElementById('app')
);
