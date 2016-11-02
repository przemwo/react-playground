import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [
        { id: 1, name: 'Adam'},
        { id: 2, name: 'Jan'},
        { id: 3, name: 'Anna'}
      ]
    };
  }
  render() {
    let rows = this.state.data.map(person => {
      return <PersonRow key={person.id} data={person} />;
    });
    return(
      <table>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

const PersonRow = (props) => {
  return(
    <tr>
      <td>{props.data.id}</td>
      <td>{props.data.name}</td>
    </tr>
  );
};

export default App;
