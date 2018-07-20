import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      counter : 0
    }
  }

  add = () => {
    this.setState({counter : this.state.counter+1})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Hi
        </p>
        <Hello counter={this.state.counter}/>
        <button onClick={this.add}> add</button>
      </div>
    );
  }
}



class Hello extends Component{
  
  render(){
    const {counter} = this.props;
    return (
      <h1>This button has been clicked {counter} times</h1>
    );
  }
}

export default App;
