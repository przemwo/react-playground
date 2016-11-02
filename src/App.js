import React from 'react';
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router';

const Outer = (props) => {
  console.log(1);
  return <div><h1>Our Site</h1><Links />{props.children}</div>
};
const About = (props) => {
  console.log(2);
  return <div><h1>About</h1>{props.children}</div>
};
const Contact = () => {
  console.log(3);
  return <div><h1>Contact</h1></div>
};

const Links = () =>
  <nav>
    <Link activeStyle={{color: 'green'}} to="/">Home</Link>
    <Link activeStyle={{color: 'green'}} to="/about">About</Link>
    <Link activeClassName="active" to="/contact">Contact</Link>
  </nav>

class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return(
      <Router history={ browserHistory }>
        <Route path="/" component={Outer}>
          <IndexRoute component={About}></IndexRoute>
          <Route path="/contact" component={Contact}></Route>
        </Route>
      </Router>
    );
  }
}

export default App;
