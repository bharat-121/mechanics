
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
<<<<<<< HEAD
import './components.css';

class Navbar extends Component {
    render() {
        return (
            <div>
                <br />
                <h5>
                    <NavLink to="/" className="white-text">Sign In&nbsp;&nbsp;&nbsp;</NavLink>
                    <NavLink to="/" className="white-text link2">Create Account</NavLink>
                </h5><br /><br /><br /><br />
                <h3 className="white-text center">Find the best mechanics here.</h3>
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            </div>
        )
    }
}

=======
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";
import $ from 'jquery'

class Navbar extends Component {
    componentDidMount() {
        var elem = document.querySelector(".sidenav");
        var instance = M.Sidenav.init(elem, {
            edge: "left",
            inDuration: 250
        });
    }
    render() {
        return (
            <nav className="nav-wrapper transparent z-depth-0">
                <div>
                    <a href="#" className="sidenav-trigger" data-target="mobile-menu">
                        <i className="material-icons">menu</i>
                    </a>
                    <ul className="right hide-on-med-and-down">
                        <li><NavLink to="/SignIn" className="flow-text">Sign In</NavLink></li>
                        <li><NavLink to="/DealerSignUp" className="flow-text">Create Account</NavLink></li>
                    </ul>
                    <ul className="sidenav black" id="mobile-menu">
                        <li><NavLink to="/SignIn" className="flow-text white-text">Sign In</NavLink></li>
                        <li><NavLink to="/" className="flow-text white-text">Create Account</NavLink></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

>>>>>>> f49c660b5a6d46b8270d554f38d2abafcd4f63e6
export default Navbar