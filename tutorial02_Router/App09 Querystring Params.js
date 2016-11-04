import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';

const Page = (props) => {
  return(
    <div>
      <h1>
        {props.location.query.message || 'Hello!'}
      </h1>
      <Links />
    </div>
  );
};

const Links = () => {
  return(
    <nav>
      <Link to={ { pathname: '/', query: { message: 'Yo' } } }>Yo</Link>
    </nav>
  );
};

class App extends React.Component {
  render() {
    return(
      <Router history={ browserHistory }>
        <Route path="/" component={Page}></Route>
      </Router>
    );
  }
}

export default App;
