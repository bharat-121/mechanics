import React from 'react';
import { Fade } from 'react-slideshow-image';
import pic1 from './images/pic1.jpg'
import pic2 from './images/pic2.jpg'
import pic3 from './images/pic3.jpg'
import './Quicksearch.css'

/*const fadeImages = [
  'images/slide_5.jpg',
  'images/slide_6.jpg',
  'images/slide_7.jpg'
];*/

const fadeProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: false,
  indicators: true
}

const Slideshow = () => {
  return (
    <Fade {...fadeProperties}>
      <div className="each-fade">
        <div className="image-container">

        <div className='card'>
            <div className='card-content'>
          <img src={pic1} className='responsive-image' />
        </div>

      </div>
      </div>
        <h2 className='center'>
        <font face='Times'><b>Lamborighini</b>
       </font></h2>
      </div>
      <div className="each-fade">
        <div className="image-container" >

        <div className='card'>
            <div className='card-content'>
          <img src={pic2} className='responsive-image' />
        </div>
        </div>
        </div>
        <h2 className='center'>
        <font face='Times'><b>Chevrolet</b></font></h2>
       
      </div>
      <div className="each-fade">
        <div className="image-container">
          <div className='card'>
            <div className='card-content'>
              <img src={pic3} className='responsive-image' />
            </div></div>

        </div>
        <h2 className='center' >
        <font face='Times'>
        <b>        BMW</b>

        </font>
        </h2>
      </div>

      {/*      <div className="each-fade">
        <div className="image-container">
          <img src={pic4} />
        </div>
        <h2>Fourth Slide</h2>
  </div>*/}
    </Fade>
  )
}

export default Slideshow;