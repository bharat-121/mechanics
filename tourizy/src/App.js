import React, { Component } from 'react';
import Quicksearch from './components/Quicksearch'

import Hello from './components/Hello'
import Navbar from './components/Navbar'
import './App.css'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <div className="nav">
        <Navbar />
        </div>
          <Hello />
  
      <div className="App">
        <Quicksearch/>
       
      </div>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
