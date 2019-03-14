import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import MainPage from './components/MainPage';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import SignUpMenu from './components/SignUpMenu';
import DealerSignUp from './components/DealerSignUp';
import MechanicSignUp from './components/MechanicSignUp';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/SignIn" component={SignIn} />
          <Route path="/SignUp" component={SignUp} />
          <Route path="/DealerSignUp" component={DealerSignUp} />
          <Route path="/SignUpMenu" component={SignUpMenu} />
          <Route path="/MechanicSignUp" component={MechanicSignUp} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
