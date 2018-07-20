import React, { Component } from 'react';
import './App.css';

/* List of image urls ------------------------------
'https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif'
'https://media.giphy.com/media/wpoLqr5FT1sY0/giphy.gif'
'https://media.giphy.com/media/5Zesu5VPNGJlm/giphy.gif'
'https://media.giphy.com/media/o7OChVtT1oqmk/giphy.gif'
-------------------------------------------------- */

class App extends Component {

  constructor(){
    super()
    this.state = {
      imageUrls : ['https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif',
                  'https://media.giphy.com/media/wpoLqr5FT1sY0/giphy.gif',
                  'https://media.giphy.com/media/5Zesu5VPNGJlm/giphy.gif',
                  'https://media.giphy.com/media/o7OChVtT1oqmk/giphy.gif'],
      counter : 1
    }
  }

  previous = () => {
    this.setState({counter : this.state.counter-1})
  }

  next = () => {
    this.setState({counter : this.state.counter+1})
  }

  render() {
    const newImageUrls = this.state.imageUrls.map((item, i) =>{
      return <div key={i}><img src={item} alt={i}/></div>
    })
		return (
			<div className="App">
				<h1 >Image Carousel</h1>
			    <div>
			    	<button onClick={this.previous} disabled={this.state.counter===1}>Previous</button>
			      	<span>{this.state.counter} of 4</span>
			      	<button onClick={this.next} disabled={this.state.counter===4}>Next</button>
			    </div>
				  {newImageUrls[this.state.counter-1]}
			</div>			
		)
	}
}

export default App;
