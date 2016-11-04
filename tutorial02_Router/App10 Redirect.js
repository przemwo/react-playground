import React from 'react';
import { Router, Route, Redirect, Link, browserHistory } from 'react-router';

const Home = () => <div><h1>Home</h1><Links /></div>;
const AboutUs = () => <div><h1>About Us</h1><Links /></div>;
const Contact = () => <div><h1>Contact</h1><Links /></div>;

const Links = () => {
  return(
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about-us">About Us</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
};

class App extends React.Component {
  render() {
    return(
      <div>
        <Router history={ browserHistory }>
          <Route path="/" component={ Home }></Route>
          <Route path="/about-us" component={ AboutUs }></Route>
          <Route path="/contact" component={ Contact }></Route>
          <Redirect from="/about" to="/about-us"></Redirect>
        </Router>
      </div>
    );
  }
}

export default App;
