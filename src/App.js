import React from 'react';

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

const toCelsius = (fahrenheit) => {
  return (fahrenheit - 32) * 5 / 9;
};
const toFahrenheit = (celsius) => {
  return (celsius * 9 / 5) + 32;
};
const tryToConvert = (value, convert) => {
  const input = parseFloat(value);
  if(Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
};

const BoilingVerdict = (props) => {
  if(props.celsius >= 100) {
    return <p>The water would boil.</p>;
  } else {
    return <p>The water would not boil.</p>
  }
};

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.props.onChange(event.target.value);
  }
  render() {
    const value = this.props.value;
    const scale = this.props.scale;
    return(
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input
          type="text"
          value={value}
          onChange={this.handleChange}/>
      </fieldset>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      scale: 'c'
    };
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
  }
  handleCelsiusChange(value) {
    this.setState({
      value,
      scale: 'c'
    });
  }
  handleFahrenheitChange(value) {
    this.setState({
      value,
      scale: 'f'
    });
  }
  render() {
    const scale = this.state.scale;
    const value = this.state.value;
    const celsius = scale === 'f' ? tryToConvert(value, toCelsius) : value;
    const fahrenheit = scale === 'c' ? tryToConvert(value, toFahrenheit) : value;
    return(
      <div>
        <TemperatureInput
          scale="c"
          value={celsius}
          onChange={this.handleCelsiusChange} />
        <TemperatureInput
          scale="f"
          value={fahrenheit}
          onChange={this.handleFahrenheitChange} />
        <BoilingVerdict
          celsius={parseFloat(celsius)} />
      </div>
    );
  }
}

export default App;
