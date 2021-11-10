import React from 'react';
import 'react-slideshow-image/dist/styles.css';
import './slider.css'
import { Slide } from 'react-slideshow-image';
import AllStudentsPic from '../../images/all-students.jpg'
import BabyCLassPic from '../../images/middleclass.jpg'
import GhorofaPic from  '../../images/gorofa.jpg'
import ClassFourSecondPic from '../../images/classFour2.jpg'
import AssembleAllPic from '../../images/assemble.jpg';
import ClassingPic from '../../images/LEARNINGROOM.jpg';
import TeachersStudentsPic from '../../images/teachersAndStuentsClasSfOUR.jpg';
import SchoolWorkers from '../../images/schoolMemebers.jpg';

const slideImages = [
  AllStudentsPic,
  BabyCLassPic,
 GhorofaPic,
 ClassingPic,
 ClassFourSecondPic,
 TeachersStudentsPic,
 AssembleAllPic,
 SchoolWorkers
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
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[3]})`}}>
              <span>Baby class students in learning room</span>
            </div>
            </div>
            <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[4]})`}}>
              <span>One of the smarts students of our school</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[5]})`}}>
              <span>Head master with Teachers and students year of 2021</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[6]})`}}>
              <span>Standard one up to Seven on one picture </span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[7]})`}}>
              <span>Teachers and other school workers</span>
            </div>
          </div>
     
        </Slide>
        </React.Fragment>
     );
}
 
export default Slider;