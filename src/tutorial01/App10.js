import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      val: 0
    }
    this.update = this.update.bind(this);
  }

  update() {
    this.setState({
      val: this.state.val + 1
    });
  }

  componentWillMount() {
    console.log('mounting');
    this.setState({
      m: 2
    });
  }

  componentDidMount() {
    console.log('mounted');
    console.log(ReactDOM.findDOMNode(this));
    this.inc = setInterval(this.update, 500);
  }

  componentWillUnmount() {
    console.log('unmounting');
    clearInterval(this.inc);

  }

  render() {
    console.log('rendering');
    return(
      <button onClick={this.update}>{this.state.val * this.state.m}</button>
    );
  }
}

class Wrapper extends React.Component {
  constructor() {
    super();
    this.mount = this.mount.bind(this);
    this.unmount = this.unmount.bind(this);
  }
  mount() {
    ReactDOM.render(<App />, document.getElementById('a'));
  }
  unmount() {
    ReactDOM.unmountComponentAtNode(document.getElementById('a'));
  }
  render() {
    return(
      <div>
        <button onClick={this.mount}>Mount</button>
        <button onClick={this.unmount}>Unmount</button>
        <div id="a"></div>
      </div>
    );
  }
}

export default Wrapper;
