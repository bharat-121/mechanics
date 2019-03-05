import React, { Component } from 'react';
import './materialize-social.css'
import Slideshow from './fade'


class Quicksearch extends Component {


    render() {
        return (

            <div>

                {/*Quick Searches*/}
                <div className='container'>
                    <p className='flow-text'>Quick Searches</p>
                    <div className='card'>
                        <div className='card-content'>
                            <div className='row'>
                            
                                    <div className='col s6 m4 l3 x2'>

                                       
                                            <i className='pink-text medium material-icons'>settings
                                            </i>
                                       
                                            Service
                                   
                                    </div>

                                    <div className='col s6 m4 l3 x2'>

                                        <i className='pink-text medium material-icons '>add_shopping_cart
                                              </i>
                                        Rent
                                    </div>

                                    <div className='col s6 m4 l3 x2'>
                                        <i className='pink-text medium material-icons'>card_giftcard
                                    </i>
                                        
                                            Give On Rent
                                   
                                    </div>

                                    <div className='col s6 m4 l3'>
                                        <i className='pink-text medium material-icons'>business_center
                    </i>

                                       
                                            Sell To US
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <br></br><br></br>
                {/*quick search ended*/}

                {/*Popular Models*/}
                <div className='container'>
                    <p className='flow-text'>Popular Models</p>
                    <Slideshow />
                </div>
                <br></br><br></br><br></br><br></br>
                {/*Popular Models Ended*/}
                {/* footer started*/}

                <footer className="page-footer grey darken-1">
                    <div className="container">
                        <div className="row">
                            <div className="col l6 s12">
                                <h5>About Us</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at lacus congue.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at lacus congue, suscipit elit nec, tincidunt orci.</p>
                            </div>
                            <div className="col l4 offset-l2 s12">
                                <h5 className="white-text">Connect</h5>
                             <div className='row'>
                             <div className='col'>
                              <a className="waves-effect waves-light btn-floating social facebook">
                                            <i className="fa fa-facebook"></i></a>
                                            </div>

                             <div className='col'>
                                          <a className="waves-effect waves-light btn-floating social twitter">
                                                <i className="fa fa-twitter"></i></a>

                                               
</div>

<div className='col'>
                                            <a className="waves-effect waves-light btn-floating social instagram">
                                                <i className="fa fa-instagram"></i></a>
</div>
                                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-copyright grey">
                        <div className="container center-align">&copy; 2019 Outliers</div>
                    </div>
                </footer>
                {/*footerr ended*/}
            </div>



        );
    }

}

export default Quicksearch;