import React from 'react';
import HeadImg from '../../images/t_news.png';
import BodyImg from '../../images/body_bg.jpg';
import ClassFourImg from '../../images/classFour.jpg'
import evImg from '../../images/ev1.jpg'
import libImg from '../../images/librabry1.jpg'
import playImg from '../../images/funPlaygoround.jpg'
import graduImg from '../../images/all-students.jpg'
import tourImg from '../../images/tours.jpg'
import artImg from '../../images/art.jpg'
import secImg from '../../images/security.png'
import busImg from '../../images/bus.png'
import './index.css'


class SchoolLife extends React.Component {
    componentDidMount()
    {
        setTimeout(() => {
            window.scrollTo(0,0)
           }, 5);
    }
    render() { 
        return <div className='beauty philosophyAndValue' style={{height:'fit-content',backgroundImage:`url(${BodyImg})`}}>
            
            <div className='phInside' style={{height:'auto',background:'white'}}>
                <div className='phHead beauty'  style={{backgroundImage:`url(${HeadImg})`}}>
                    <h2>SCHOOL LIFE</h2>
                </div>
                <div className='life-inside'>
                  <div className='LIFE-BANNER'>
                      <img src={ClassFourImg} alt='clasfour pupils img'/>
                  </div>
                  <div className='cleanEnv bx' style={{background:'#f68b1f'}}>
                      <div className='ENV-text one'>
                         <h3>CLEAN ENVIRONMENT</h3>
                         <p>Remnant Academy’s campus is an 
                             ideal environment for learning and self-discovery.
                             our campus is built around a circular
                                quad where students meet, interact, and study. Around 
                                the quad are our comfortable playgrounds, classrooms, 
                                the dining hall, 
                             and library. </p>
                      </div>
                      <div className='ENV-PIC two'>
                   <img src={evImg} alt='evironment pic'/>
                      </div>
                  </div>
                  <div className='cleanEnv bx' style={{background:'#ae132a'}}>
                      <div className='ENV-text one'>
                         <h3>MODERN LIBRARY</h3>
                         <p>Our campus is providing library service for students
                            where they can find books, educational videos   
                              and all useful learning matterials. </p>
                      </div>
                      <div className='ENV-PIC two'>
                   <img src={libImg} alt='evironment pic'/>
                      </div>
                  </div>
                  <div className='cleanEnv bx' style={{background:'#05527d'}}>
                      <div className='ENV-text one'>
                         <h3>FUN PLAYGROUNDS</h3>
                         <p>A school has playground contains fun and engaging things to keep
                             busy and happy students during break times . </p>
                      </div>
                      <div className='ENV-PIC two'>
                   <img src={playImg} alt='evironment pic'/>
                      </div>
                  </div>

                  <div className='cleanEnv bx'  style={{background:'#f68b1f'}}>
                      <div className='ENV-text one'>
                         <h3>GRADUATIONS &amp; EVENTS</h3>
                         <p>Remnant Academy’s is truely proud to see students are
                             graduating not only that but to graduate with high
                             quality education foundation for future life 
                             and because of that  reason every year we conduct graduation event
                             for wishing graduators the best to the next steps ahead.
                              </p>
                      </div>
                      <div className='ENV-PIC two' style={{background:'#f68b1f'}}>
                   <img src={graduImg} alt='evironment pic'/>
                      </div>
                  </div>

                  <div className='cleanEnv bx'  style={{background:'#ae132a'}}>
                      <div className='ENV-text one' >
                         <h3>EDUCATIONAL TRIPS &amp; TOURS</h3>
                         <p>
                            During the academic year students are visiting 
                            awesome places that are inspiring learning and 
                            to see what they have learned in class on real Life
                            . They visit Historical places, National parks and 
                            Fun places for students
                              </p>
                      </div>
                      <div className='ENV-PIC two'>
                   <img src={tourImg} alt='evironment pic'/>
                      </div>
                  </div>
                  <div className='cleanEnv bx'  style={{background:'#05527d'}}>
                      <div className='ENV-text one'>
                         <h3>ARTS AND CREATIVE EVENTS</h3>
                         <p>
                            Our teachers are extremely aware  of students dreams, hobbies, talents and 
                            creativity that include 
                            arts like drawing, dancing, singing, playing Drums, so as to keep learning
                            simple, fun, interesting and productive and to mantain good relationship among
                            others.
                              </p>
                      </div>
                      <div className='ENV-PIC two'>
                   <img src={artImg} alt='evironment pic'/>
                      </div>
                  </div>

                  <div className='cleanEnv bx' style={{background:'#f68b1f'}}>
                      <div className='ENV-text one'>
                         <h3>TRANSPORT FACILITIES</h3>
                         <p>
                            we have enough school busses to transport pupils early in the morning 
                            , also after school they picked up to home safely and easier.
                              </p>
                      </div>
                      <div className='ENV-PIC two'>
                   <img src={busImg} alt='evironment pic'/>
                      </div>
                  </div>

                  <div className='cleanEnv bx'  style={{background:'#ae132a'}}>
                      <div className='ENV-text one'>
                         <h3>STRONG SECURITY ON CAMPUS</h3>
                         <p>
                            School campus in 100% safe all the time we have security guards
                            and security cameras installed in all around places where students are
                            staying.
                              </p>
                      </div>
                      <div className='ENV-PIC two'>
                   <img src={secImg} alt='evironment pic'/>
                      </div>
                  </div>

                  <div style={{height:'7rem'}} className='spacb'>

                  </div>
                </div>
            </div>

        </div>;
    }
}
 
export default SchoolLife;