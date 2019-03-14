import React from 'react';
import { Fade } from 'react-slideshow-image';
import pic1 from './images/pic1.jpg'
import pic2 from './images/pic2.jpg'
import pic3 from './images/pic3.jpg'
<<<<<<< HEAD

=======
import pic4 from './images/car.jpg'
>>>>>>> f49c660b5a6d46b8270d554f38d2abafcd4f63e6


const fadeProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true
  
}

const Slideshow = () => {
  return (
    <Fade {...fadeProperties}>
      <div className="each-fade">
        <div className="image-container">
          <img src={pic1} className='responsive-image' />
      </div>
        <h2 className='center'>
        <font face='Times'><b>Lamborighini</b>
       </font></h2>
      </div>
      <div className="each-fade">
        <div className="image-container" >
          <img src={pic2} className='responsive-image' />
        
        </div>
        <h2 className='center'>
        <font face='Times'><b>Chevrolet</b></font></h2>
       
      </div>
      <div className="each-fade">
        <div className="image-container">
              <img src={pic3} className='responsive-image' />

        </div>
        <h2 className='center' >
        <font face='Times'>
        <b>        BMW</b>

        </font>
        </h2>
      </div>

           <div className="each-fade">
        <div className="image-container">
          <img src={pic4} height='550px' />
        </div>
        <h2>Fourth Slide</h2>
  </div>
    </Fade>
  )
}

export default Slideshow;