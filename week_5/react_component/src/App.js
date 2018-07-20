import React, { Component } from 'react';
import './App.css';



class App extends Component {
  
  render() {
    const {cards} = this.props
    return (
      <div className="row container">
          <CardList cards={cards}/>
          {/* <img src={cards[0].imgSrc}/> */}
      </div> 
    );
  }
}

// class Header extends Component {
//   render(){
//     return (
//       <header className="jumbotron">
//         <h1 className="display-4 text-center">Photo Grid Project</h1>
//         <p className="lead text-center">A beautiful responsive grid for your favourite photos</p>
//       </header>
//     )
//   }
// }

class CardList extends Component{

  render(){
    const {cards} = this.props

    const list = cards.map((card) => {
      return (
        <Card src={card.imgSrc} alt={card.title}/>
      )
    })
    return (
      <ul> {list}</ul>    
    )
  }
}

class Card extends Component {
  render () {
    const {src, alt} = this.props
    console.log(src)
    return (
      <section className="col-lg-3 col-md-4 col-sm-6 col-12"> 
        <img className="img-responsive" src={src} alt={alt}/>
        
      </section>
    )
  }
}

export default App;
