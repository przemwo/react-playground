import React from 'react';

const FancyBorder = (props) => {
  return(
    <div style={{color: props.color}}>
      {props.children}
    </div>
  );
};

const WelcomeDialog = () => {
  return(
    <FancyBorder
      color="red">
      <h1>Welcome!</h1>
      <p>Some text</p>
    </FancyBorder>
  );
};

export default WelcomeDialog;
