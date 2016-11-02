import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = { increasing: false };
    this.update = this.update.bind(this);
  }
  update() {
    ReactDOM.render(
      <App val={this.props.val + 1} />,
      document.getElementById('app')
    );
  }
  componentWillReceiveProps(nextProps) {
    console.log('nextProps', nextProps);
    this.setState({
      increasing: nextProps.val > this.props.val
    });
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('nextProps', nextProps, 'nextState', nextState);
    return nextProps.val % 5 === 0;
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('prevProps', prevProps, 'prevState', prevState);
  }
  render() {
    console.log(this.state.increasing);
    return(
      <button onClick={this.update}>
        {this.props.val}
      </button>
    );
  }
}

App.defaultProps = { val: 0 };

export default App;
