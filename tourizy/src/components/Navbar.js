import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";

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

export default Navbar