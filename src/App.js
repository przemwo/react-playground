import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      date: new Date()
    };
    this.tick = this.tick.bind(this);
  }
  componentDidMount() {
    this.timerID = setInterval(this.tick, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState((prevState, props) => ({
      date: new Date()
    }));
  }
  render() {
    return(
      <div>
        <h1>Hello!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

export default App;
