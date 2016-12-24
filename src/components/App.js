import React from 'react';
import AddTodo from './AddTodo';
import VisibleTodoList from './VisibleTodoList';
import Footer from './Footer';
import GitHubTest from './GitHubTest';

const App = () => {
  return(
    <div>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
      <GitHubTest />
    </div>
  );
}

export default App;
