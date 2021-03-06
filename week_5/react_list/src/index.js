import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const students = [
    {
      name: 'Brynhildr Sadler',
      program: 'Web Dev',
      grade: 75
    },
    {
      name: 'Joan Leon',
      program: 'UX',
      grade: 72
    },
    {
      name: 'Mark Summers',
      program: 'Web Dev',
      grade: 87
    },
    {
      name: 'Tanja Zawisza',
      program: 'Web Dev',
      grade: 92
    },
    {
      name: 'Slavomir Amato',
      program: 'UX',
      grade: 78
    },
    {
      name: 'Tihana Anand',
      program: 'UX',
      grade: 60
    },
    {
      name: 'Reima Ivov',
      program: 'Web Dev',
      grade: 95
    },
    {
      name: 'Demokritos Shafir',
      program: 'UX',
      grade: 83
    }
  ]

  

ReactDOM.render(<App students={students} />, document.getElementById('root'));
registerServiceWorker();
