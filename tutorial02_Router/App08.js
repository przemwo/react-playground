import React from 'react';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

const Home = () => <h1>Home</h1>;
const HomeBody = () => <div>Home body</div>;
const Other = () => <h1>Other</h1>;
const OtherBody = () => <div>Other body</div>;

const Container = (props) => {
  return(
    <div>{props.header}{props.body}<Links /></div>
  );
};

const Links = () => {
  return(
    <nav>
      <Link to="/">Home</Link>
      <Link to="/other">Other</Link>
    </nav>
  );
};

class App extends React.Component {
  render() {
    return(
      <Router history={browserHistory}>
        <Route path="/" component={Container}>
          <IndexRoute components={ { header: Home, body: HomeBody } }></IndexRoute>
          <Route path="/other" components={ { header: Other, body: OtherBody } }></Route>
        </Route>
      </Router>
    );
  }
}

export default App;
