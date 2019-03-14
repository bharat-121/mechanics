import React, { Component } from 'react';
import './materialize-social.css'
import Slideshow from './fade'



class Quicksearch extends Component {


    render() {
        return (

            <div>
                {/*Quick Searches*/}
                <div className='container'>
                    <p className='flow-text left-align'>Quick Searches</p>
                    <div className='card'>
                        <div className='card-content'>
                            <div className='row'>

                                <div className='col l3 s6 m3'>


                                    <i className='pink-text medium material-icons'>settings
                                            </i>
                                    <div>
                                        Service
                                   </div>
                                </div>

                                <div className='col l3 s6 m3'>

                                    <i className='pink-text medium material-icons '>add_shopping_cart
                                              </i>
                                    <div>Rent</div>
                                </div>

                                <div className='col l3 s6 m3'>
                                    <i className='pink-text medium material-icons'>card_giftcard
                                    </i>

                                    <div>  Give On Rent
                                   </div>
                                </div>

                                <div className='col l3 s6 m3'>
                                    <i className='pink-text medium material-icons'>business_center
                    </i>


                                    <div>  Sell To US
                                         </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <br></br><br></br>
                {/*quick search ended*/}

                {/*Popular Models*/}
                <div className='container'>
                    <p className='flow-text left-align'>Popular Models</p>
                    <Slideshow />
                </div>
                <br></br><br></br><br></br><br></br>
                {/*Popular Models Ended*/}
                {/* footer started*/}

                <footer className="page-footer grey darken-1">

                    <div className="row">
                        <div className="col l6 s12">
                            <h5 className='center-align'>About Us</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at lacus congue.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at lacus congue, suscipit elit nec, tincidunt orci.</p>
                        </div>
                        <div className="col l6 s12">
                            <div className='row'>
                                <h5 className="white-text center-align" >Connect Using</h5>
                            </div>

                            <div className='row'>
                                <div className='col l2 offset-l3 offset-s3 s2'>
                                    <a className="waves-effect waves-light btn-floating social facebook">
                                        <i className="fa fa-facebook"></i></a>
                                </div>

                                <div className='col l2 s2'>
                                    <a className="waves-effect waves-light btn-floating social twitter">
                                        <i className="fa fa-twitter"></i></a>

                      
                                </div>

                                <div className='col l2 s2'>
                                    <a className="waves-effect waves-light btn-floating social instagram">
                                        <i className="fa fa-instagram"></i></a>
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