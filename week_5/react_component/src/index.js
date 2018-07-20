import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const cards = [
    {
      imgSrc: 'images/square1.jpg',
      title: 'Card 1'
    }, {
      imgSrc: 'images/square2.jpg',
      title: 'Card 2'
    }, {
      imgSrc: 'images/square3.jpg',
      title: 'Card 3'
    }, {
      imgSrc: 'images/square4.jpg',
      title: 'Card 4'
    }, {
      imgSrc: 'images/square5.jpg',
      title: 'Card 5'
    }, {
      imgSrc: 'images/square6.jpg',
      title: 'Card 6'
    }
  ]

ReactDOM.render(<App cards={cards}/>, document.getElementById('root'));
registerServiceWorker();
