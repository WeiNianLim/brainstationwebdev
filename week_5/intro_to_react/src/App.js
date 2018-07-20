import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      name : "Will",
      counter : 0
    }
    //this.state = this.state.bind(this);
  }

  clickHandler = () => {
    this.setState({ counter: this.state.counter+1 })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{this.state.name}</h1>
        </header>
        <p className="App-intro">
          Counter: {this.state.counter}
        </p>
        <button onClick={this.clickHandler}>Click me!</button>
      </div>
    );
  }
}



export default App;
