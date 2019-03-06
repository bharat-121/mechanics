import React from 'react'


import '../App.css'
import mech4 from './images/mech4.jpg'
import mech5 from './images/mech5.jpg'
import mech6 from './images/mech6.jpg'
function Row2(){
    return (
        <div className="row">
            <div className="col s12 l4">
                <div className="card">
                     <div className="card-image">
                         <img src={mech4}/>
                    </div>
                    <div className="card-content">
                        <span className="card-title"><b>Rating Mechanism</b></span>
                        <p>We Also Allow You To Rate Mechanics According To Their Work.</p>
                    </div>
                </div>
            </div>
            <div className="col s12 l4">
                <div className="card">
                     <div className="card-image">
                     <img src={mech5}/>
                    </div>
                    <div className="card-content">
                        <span className="card-title"><b>Find Experts In Every Domain Of Vehicles</b></span>
                        <p>We Provide You With The Experts In Every Domain.</p>
                    </div>
                </div>
            </div>
            <div className="col s12 l4">
            <div className="card">
                    <div className="card-image">
                    <img src={mech6}/>
                    </div>
                    <div className="card-content">
                        <span className="card-title"><b>24X7 Service</b></span>
                        <p>Come And Find Available Mechanics When You Need One.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Row2