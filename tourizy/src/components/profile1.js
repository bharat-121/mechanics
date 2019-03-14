import React, { Component } from 'react';
import './profile.css'

import { Row, Col } from 'antd';
import mech1 from './mech1.jpg'

class Profile1 extends Component {
    render() {
        return (
            <div>

                <div class="container">
                    <img src="" alt="picture of a city" class="top-image" />
                    <div class="profile-pic"></div>
                    <div class="profile">
                        <div class="profile-info">
                            <div class="name">Name Here</div>
                        </div>
                        <div class="profile-popularity">
                            <div class="field"><a href="">Edit Profile</a></div>
                        </div>
                    </div>
                    <br /><br /><br /><br /><br /><br /><br /><br />
                    <br /><br /><br /><br /><br /><br />
                    <div className="card">
                        <div className="card-content">
                            <span className="card-title"><b>Account Details</b></span>
                            <table>
                                <tr>
                                    <td>Username:</td>
                                    <td>abcdef</td>
                                </tr>
                                <tr>
                                    <td>Country:</td><td>India</td>
                                </tr>
                                <tr>
                                    <td>State:</td><td>Haryana</td>
                                </tr>
                                <tr>
                                    <td>City:</td><td>Kurukshetra</td>
                                </tr>
                                <tr>
                                    <td>Address:</td><td>adhgdkkfdkv</td>
                                </tr>
                                <tr>
                                    <td>Mobile No.:</td><td>0123456789</td>
                                </tr>
                                <tr>
                                    <td>Email ID:</td><td>abc@gmail.com</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-content">
                            <span className="card-title"><b>  Your Previous Experiences With Mechanics</b></span>
                            <p>
                                Name: xyz<br />
                                Contact No.: 1234566789<br />
                                Rating By You: 5
                            </p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-content">
                            <span className="card-title"><b>Vehicles For Sell By You</b></span>
                            <p>
                                You don't have any vehicle to sell.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Profile1;
