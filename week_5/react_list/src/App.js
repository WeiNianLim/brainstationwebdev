import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    console.log(props.students)
  }
  render() {
    const studentsList = this.props.students.map((student) => {
      return <Student name={student.name} program={student.program} grade={student.grade}/>
    })
    return (
      <div className="App">
        <ul>{studentsList}</ul>
      </div>
    );
  }
}

class Student extends Component {
  render(){
    return (
      <li>
          Name: {this.props.name} <br/>
          Program: {this.props.program}<br/>
          Grade: {this.props.grade}
      </li>
    )
  }
}

export default App;
