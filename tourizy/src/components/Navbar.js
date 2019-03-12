
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import './components.css';

class Navbar extends Component {
    render() {
        return (
            <div>
                <br />
                <h5>
                    <NavLink to="/" className="white-text">Sign In&nbsp;&nbsp;&nbsp;</NavLink>
                    <NavLink to="/SignUp" className="white-text link2">Create Account</NavLink>
                </h5><br /><br /><br /><br />
                <h3 className="white-text center">Find the best mechanics here.</h3>
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            </div>
        )
    }
}

export default Navbar