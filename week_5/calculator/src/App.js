import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(){
    super()
    this.state = {
      num1 : 0,
      num2 : 0,
      result : 0,
      operator : ''
    }
  }

  storeInput = (event) => {
    const {target} = event
    target.name === "num1" ? this.setState({num1 : Number(target.value)}) : this.setState({num2 : Number(target.value)})
  }

  calculate = () => {
    switch(this.state.operator){
      case "+": this.setState({result : this.state.num1 + this.state.num2})
                break
      case "-": this.setState({result : this.state.num1 - this.state.num2})
                break
      case "*": this.setState({result : this.state.num1 * this.state.num2})
                break
      case "/": this.setState({result : this.state.num1 / this.state.num2})
                break
      default : break
    }
    
  }

  handleChange = (event) => {
    this.setState({operator: event.target.value});
  }

  render() {
    return (
      <div className="App">
        <div>
          <input name="num1" type="text" onKeyUp={this.storeInput}/>
        </div>
        <select onChange={this.handleChange}>
          <option disabled selected value> -- select an option -- </option>
          <option >+</option>
          <option >-</option>
          <option >*</option>
          <option >/</option>
        </select>
        <div>
          <input name="num2" type="text" onKeyUp={this.storeInput}/>
        </div>
        <div>
          <button onClick={this.calculate}> Calculate </button>
        </div>
        <h1>Calculated Value : {this.state.result}</h1>
      </div>
    );
  }
}

export default App;
