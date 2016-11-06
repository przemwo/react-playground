import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      button: false
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState((prevState) => ({
      button: !prevState.button
    }));
  }
  render() {
    return(
      <div>
        <h1>State is: {this.state.button.toString()}</h1>
        <button
          onClick={this.toggle}>
          Click me!
        </button>
      </div>
    );
  }
}

export default App;
