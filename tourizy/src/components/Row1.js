import React from 'react'
import ReactDOM from 'react-dom'
<<<<<<< HEAD
import mech1 from './mech1.jpg'
import mech2 from './mech2.jpg'
import mech3 from './mech3.jpg'
=======
import mech1 from './images/mech1.jpg'
import mech2 from './images/mech2.jpg'
import mech3 from './images/mech3.jpg'
>>>>>>> f49c660b5a6d46b8270d554f38d2abafcd4f63e6
import '../App.css'
function Row1(){
    return (
        <div className="row">
            <div className="col s12 l4">
                <div className="card">
                    <div className="card-image">
                        <img src={mech1}/>
                    </div>
                    <div className="card-content">
                        <span className="card-title"><b>Service Point At Your Doorsteps</b></span>
                        <p>We Connect You With Best Service Centres Around You.</p>
                    </div>
                </div>
            </div>
            <div className="col s12 l4">
                <div className="card">
                     <div className="card-image">
                        <img src={mech2}/>
                    </div>
                    <div className="card-content">
                        <span className="card-title "><b> Buy Or Sell Used Vehicles</b></span>
                        <p>We Provide You The Best Platform To Buy And Sell Used Vehicles.</p>
                    </div>
                </div>
            </div>
            <div className="col s12 l4">
                <div className="card">
                    <div className="card-image">
                         <img src={mech3}/>
                        </div>
                    <div className="card-content">
                        <span className="card-title"><b>Just Pick Your Phone And Make A Call</b></span>
                        <p>We Help You To Find The Best Mechanics Near You.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Row1