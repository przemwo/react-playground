import React from 'react';
import { getUsers } from './../api/mockProjectApi';

class GitHubTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }
  componentDidMount() {
    const user = getUsers().then(res => {
      this.setState({
        users: res
      });
    });
  }
  render() {
    return(
      <div>
        <h1>Users</h1>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>First name</th>
              <th>Last name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map(user =>
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default GitHubTest;
