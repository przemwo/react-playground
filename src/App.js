import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      selectValue: 'B'
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleRadioChange = this.handleRadioChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      value: event.target.value.substr(0, 3)
    })
  }
  handleReset() {
    this.setState({ value: '' });
  }
  handleSubmit(event) {
    console.log(`
      Text field value is ${this.state.value}
      Select field value is ${this.state.selectValue}
      Radio value is ${this.state.radioValue}
      `);
  }
  handleSelectChange(event) {
    this.setState({
      selectValue: event.target.value
    });
  }
  handleRadioChange(event) {
    this.setState({
      radioValue: event.target.value
    });
  }
  render() {
    return(
      <div>
        {/* Controlled component - has 'value' property */}
        <input
          type="text"
          placeholder="Hello!"
          value={this.state.value}
          onChange={this.handleChange} />
        <button
          onClick={this.handleReset}>
          Reset
        </button>
        <br />

        <select value={this.state.selectValue} onChange={this.handleSelectChange}>
          <option value="A">Apple</option>
          <option value="B">Bannana</option>
          <option value="C">Cranberry</option>
        </select>
        <br />

        <label>
          <input
            type="radio"
            name="choice"
            value="A"
            onChange={this.handleRadioChange}/>
          Option A
        </label>
        <label>
          <input
            type="radio"
            name="choice"
            value="B"
            onChange={this.handleRadioChange}/>
          Option B
        </label>
        <label>
          <input
            type="radio"
            name="choice"
            value="C"
            onChange={this.handleRadioChange}/>
          Option C
        </label>
        <br />

        <button
          onClick={this.handleSubmit}>
          Submit
        </button>

        <br />


        <textarea name="descriptioin" value="This is some text"></textarea>

        {/* Uncontrolled component - no 'value' property, 'defaultValue' property for initial value */}
        <input
          type="text"
          defaultValue="Hi there! I'm uncontrolled component!"/>
      </div>
    );
  }
}

export default App;
