import React from 'react';
import { getUser } from './../api/mockProjectApi';

class GitHubTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: 'unknown'
    };
  }
  componentDidMount() {
    const user = getUser('przemwo').then(res => {
      this.setState({
        login: res.login
      });
    });
  }
  render() {
    return(
      <h1>Test {this.state.login}</h1>
    );
  }
}

export default GitHubTest;
