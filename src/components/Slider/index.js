import React from 'react';
import 'react-slideshow-image/dist/styles.css';
import './slider.css'
import { Slide } from 'react-slideshow-image';
import AllStudentsPic from '../../images/all-students.jpg'
import BabyCLassPic from '../../images/middleclass.jpg'
import GhorofaPic from  '../../images/gorofa.jpg'

const slideImages = [
  AllStudentsPic,
  BabyCLassPic,
 GhorofaPic,
];


const Slider = () => {


    return ( 
        <React.Fragment>
          <Slide easing="ease" >
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
              <span>Class one up to Four Students pose for Graduation Picture 2021</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
              <span>Headmaster [white shirt right hand], teachers, and baby class students</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
              <span>All class Seven of 2021 year during graduation</span>
            </div>
          </div>
        </Slide>
        </React.Fragment>
     );
}
 
export default Slider;