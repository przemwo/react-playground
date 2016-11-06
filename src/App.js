import React from 'react';

const GreetUser = () => {
  return(
    <h1>Hello User!</h1>
  );
}
const GreetGuest = () => {
  return(
    <h1>Hello Guest!</h1>
  );
}
const Greet = (props) => {
  if (props.isLoggedIn) {
    return <GreetUser />
  } else {
    return <GreetGuest />
  };
}
const LogInButton = (props) => {
  return(
    <button
      onClick={props.logIn}>
      Log in
    </button>
  );
};

const LogOutButton = (props) => {
  return(
    <button
      onClick={props.logOut}>
      Log out
    </button>
  );
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false
    };
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
  }
  logIn() {
    this.setState({
      isLoggedIn: true
    });
  }
  logOut() {
    this.setState({
      isLoggedIn: false
    });
  }
  render() {
    let button = null;
    //Use if else for test the condition and assing element to a variable
    if(this.state.isLoggedIn) {
      button = <LogOutButton logOut={this.logOut} />;
    } else {
      button = <LogInButton logIn={this.logIn} />;
    }
    return(
      <div>
        <h2>User is {this.state.isLoggedIn ? 'currently' : 'not'} logged in</h2> {/*inline if-else condition operator*/}
        <h4>{this.state.isLoggedIn && `I'm logged in!`}</h4> {/* condition using logical && operator: true && sth ==> sth, false && sth ==> false */}
        <Greet isLoggedIn={this.state.isLoggedIn} />
        {button}
      </div>
    );
  }
}

export default App;
