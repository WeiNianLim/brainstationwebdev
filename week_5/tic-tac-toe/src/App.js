import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
  constructor(){
    super()
    this.state = {
      block : [0,0,0,0,0,0,0,0,0],
      player1 : {
        imgSrc : "images/o.png"
      },
      player2 : {
        imgSrc : "images/x.png"
      },
      move : 1
    }
  }

  handle = (index, e) => {
    
    if (this.state.move%2 == 1) {
      e.target.src = this.state.player1.imgSrc
    } else {
      e.target.src = this.state.player2.imgSrc
    }

    const newblock = this.state.block((b,i)=>{
      if (index === i){
        b = 1
      }
      return b
    })
     
    this.setState({
      block : newblock
    })
  }

  render() {
    return (
      <div>
        <table id="board">
          <tr>
            <td onClick={() => this.handle(0)} disabled={this.state.block[0]}><img src=""/></td>
            <td onClick={() => this.handle(1)} disabled={this.state.block[1]}><img src=""/></td>
            <td onClick={() => this.handle(2)} disabled={this.state.block[2]}><img src=""/></td>
          </tr>
          <tr>
            <td onClick={() => this.handle(3)} disabled={this.state.block[3]}><img src=""/></td>
            <td onClick={() => this.handle(4)} disabled={this.state.block[4]}><img src=""/></td>
            <td onClick={() => this.handle(5)} disabled={this.state.block[5]}><img src=""/></td>
          </tr>
          <tr>
            <td onClick={() => this.handle(6)} disabled={this.state.block[6]}><img src=""/></td>
            <td onClick={() => this.handle(7)} disabled={this.state.block[7]}><img src=""/></td>
            <td onClick={() => this.handle(8)} disabled={this.state.block[8]}><img src=""/></td>
          </tr>
      </table>
      </div>
    );
  }
}

export default App;
