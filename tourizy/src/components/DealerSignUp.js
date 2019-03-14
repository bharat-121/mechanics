import React, { Component } from 'react';
import './SignUp.css'

class DealerSignUp extends Component {
    render() {
        return (
            <div>

                <div class="content">
                    <div class="title">Create Dealer account</div>
                    <input type="text" placeholder="Name" />
                    <input type="text" placeholder="E-mail" />
                    <input type="text" placeholder="Company Name" />
                    <input type="text" placeholder="Dealer Id" />
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Password" />
                    <input type="checkbox" id="rememberMe" />
                    <label for="rememberMe"></label><span>I have read and agree to the <a href="#">Terms of Use </a>and <a href="#">Privacy Policy</a></span>
                    <button>Create Account</button>
                    <div class="already">Already have an account? <a href="#">Sign In</a></div>
                </div>


            </div>
        );
    }
}

export default DealerSignUp

/*<div className="dealerform">
                <link href='https://fonts.googleapis.com/css?family=Nunito:400,300' rel='stylesheet' type='text/css' />
                <form>
                    <h1 className="grey-text text-darken-2">Sign Up</h1>
                    <fieldset>
                        <legend><span class="number">1</span> Your basic <abbr title="Information">info</abbr></legend>
                        <input type="text" id="name" name="user_name" placeholder="Name" />
                        <input type="email" id="mail" name="user_email" placeholder="Email" />
                        <input type="text" id="company" name="company_name" placeholder="Company Name" />
                        <input type="text" id="id" name="dealer_id" placeholder="Dealer Id" />
                    </fieldset>

                    <fieldset>

                        <legend><span class="number">2</span> Your profile</legend>

                        <input type="text" id="username" name="username" placeholder="Username" />

                        <input type="password" id="password" name="user_password" placeholder="Password" />

                        <label for="bio"><abbr title="Biography"><h6 className="grey-text text-darken-1">Bio:</h6></abbr></label>
                        <textarea name="user_bio" id="bio"></textarea>
                    </fieldset>

                    <button type="submit">Sign Up</button>

                </form>
        </div>*/