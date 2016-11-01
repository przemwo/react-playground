import React from 'react';

class App extends React.Component {
  render() {
    const txt = this.props.txt;
    return(
      <div>
        Hello world!
        <h1>{txt}</h1>
      </div>
    );
  }
}

App.propTypes = {
  txt: React.PropTypes.string
};

export default App;
