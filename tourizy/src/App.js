import React, { Component } from 'react';
<<<<<<< HEAD
import Quicksearch from './components/Quicksearch'

import Hello from './components/Hello'
import Navbar from './components/Navbar'
import './App.css'
import {BrowserRouter} from 'react-router-dom'
=======
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import MainPage from './components/MainPage';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import SignUpMenu from './components/SignUpMenu';
import DealerSignUp from './components/DealerSignUp';
import MechanicSignUp from './components/MechanicSignUp';
>>>>>>> f49c660b5a6d46b8270d554f38d2abafcd4f63e6
class App extends Component {
  render() {
    return (
      <BrowserRouter>
<<<<<<< HEAD
      <div>
        <div className="nav">
        <Navbar />
        </div>
          <Hello />
  
      <div className="App">
        <Quicksearch/>
       
      </div>
      </div>
=======
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/SignIn" component={SignIn} />
          <Route path="/SignUp" component={SignUp} />
          <Route path="/DealerSignUp" component={DealerSignUp} />
          <Route path="/SignUpMenu" component={SignUpMenu} />
          <Route path="/MechanicSignUp" component={MechanicSignUp} />
        </Switch>
>>>>>>> f49c660b5a6d46b8270d554f38d2abafcd4f63e6
      </BrowserRouter>
    );
  }
}

export default App;
