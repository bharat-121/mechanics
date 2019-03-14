import React, { Component } from 'react';
import './SignUp.css'
class SignIn extends Component {
    render() {
        return (
            <div>

                <div class="content">
                    <div class="title">Log In</div>
                    <input type="text" placeholder="Username/E-mail" />
                    <input type="password" placeholder="Password" />
                    <input type="checkbox" id="rememberMe" />
                    <label for="rememberMe"></label><span>I have read and agree to the <a href="#">Terms of Use </a>and <a href="#">Privacy Policy</a></span>
                    <button>Log In</button>
                    <div class="social"> <span>or sign in with social media</span></div>
                    <div class="buttons">
                        <button class="facebook"><i class="fa fa-facebook"></i>Facebook</button>
                        <button class="twitter"><i class="fa fa-twitter"></i>Twitter</button>
                        <button class="google"><i class="fa fa-google-plus"></i>Google</button>
                    </div>
                    <div class="already">Does not  have an account? <a href="#">Sign Up</a></div>
                </div>


            </div>
        )
    }
}
export default SignIn