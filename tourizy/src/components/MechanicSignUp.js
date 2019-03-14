import React, { Component } from 'react';
import './SignUp.css'
class Mechanicsignup extends Component {
    render() {
        return (
            <div>

                <div class="content">
                    <div class="title">Create account</div>
                    <input type="text" placeholder="Name" />
                    <input type="text" placeholder="Username" />
                    <input type="text" placeholder="E-mail" />
                    <input type="password" placeholder="Password" />
                    <input type="text" placeholder="Contact No." />
                    <input type="text" placeholder="Shop Address" />
                    <input type="text" placeholder="Home Address" />
                    <br/><br/>
                    <input type="checkbox" id="rememberMe" />
                    <label for="rememberMe"></label><span>I have read and agree to the <a href="#">Terms of Use </a>and <a href="#">Privacy Policy</a></span>
                    <button>Create Account</button>
                    <div class="already">Already have an account? <a href="#">Sign In</a></div>
                </div>


            </div>
        )
    }
}
export default Mechanicsignup