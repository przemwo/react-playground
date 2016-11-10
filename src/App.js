import React from 'react';

const FancyBorder = (props) => {
  return(
    <div style={{color: props.color}}>
      {props.children}
    </div>
  );
};

const Dialog = (props) => {
  return(
    <FancyBorder color="blue">
      <h1 className="dialog-title">
        {props.title}
      </h1>
      <p className="dialog-message">
        {props.message}
      </p>
      {props.children}
    </FancyBorder>
  );
};

class SignUpDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {login: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
  }
  handleChange(e) {
    this.setState({
      login: e.target.value
    });
  }
  handleSignUp() {
    console.log(`Welcome aboard, ${this.state.login}`);
  }
  render() {
    return(
      <Dialog
        title="Mars Exploration Program"
        message="How should we refer to you?">
        <input
          type="text"
          value={this.state.login}
          onChange={this.handleChange}/>
        <button
          onClick={this.handleSignUp}>
          Sign Me Up!
        </button>
      </Dialog>
    );
  }
}

const WelcomeDialog = () => {
  return(
    <div>
      <Dialog
        title="Welcome"
        message="Hello stranger!" />
      <SignUpDialog />
    </div>
  );
};

export default WelcomeDialog;
