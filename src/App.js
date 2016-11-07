import React from 'react';

const numbers = [1, 2, 3, 4, 15];

class App extends React.Component {
  render() {
    return(
      <ul>
      {numbers.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
      </ul>
    );
  }
}

export default App;
