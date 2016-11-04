import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';

const Page = (props) => {
  return(
    <div>
      <h1>
        {props.params.message || 'Hello!'}
      </h1>
      <Links />
    </div>
  );
};

const Links = () => {
  return(
    <nav>
      <Link to="/">Hello</Link>
      <Link to="/Hi">Hi</Link>
    </nav>
  );
};

class App extends React.Component {
  render() {
    return(
      <Router history={ browserHistory }>
        <Route path="/(:message)" component={Page}></Route>
      </Router>
    );
  }
}

export default App;
