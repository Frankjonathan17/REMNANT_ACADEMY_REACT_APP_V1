import React from 'react';
import BodyImg from '../../images/body_bg.jpg';
import AllStudentsImg from '../../images/all-students.jpg';
import FewStuImg from '../../images/CropLasaba.jpg';
import ReadImg from '../../assets/reading-light-blue-75.png'
import WriteImg from '../../assets/writing-purple-75.png';
import Grammar from '../../assets/spelling-teal-75.png';
import MathPic from '../../assets/math-green-75.png';
import ScienceImg from '../../assets/science-orange-75.png';
import HistoryImg from '../../assets/history-red-75.png';
import LanguagesImg from '../../assets/spanish-light-blue-75.png';
import PhysicalWorld from '../../assets/minilo.jpg'
import DramaImg from '../../assets/drama-purple-75.png'
import MusicImg from '../../assets/music-teal-75.png';
import Art from '../../assets/art-green-75.png';
import './index.css'





class UpperSchool extends React.Component {


    componentDidMount()
{
    setTimeout(() => {
        window.scrollTo(0,0)
       }, 5);
}

    render() { 
        return <div className='babyClass beauty'  style={{backgroundImage:`url(${BodyImg})`}}>
                   <div className='Banner beauty' style={{backgroundImage:`url(${AllStudentsImg})`}} >
                       <div className='gradient'></div>
                       <div className='inside-banner'>
                           <div className='text-Box boxBnner'>
                          
                          <div className='banner-title'>
                            <h1>Upper School</h1>
                          </div>
                          <div className='banner-explain'>
                              <p> <span className='big'>U</span>pper school for class 5 up to 7 years can be challenging for 
                              students as they face intellectual, emotional and physical shifts during 
                              this time. At Remnant, we provide a safe and nurturing environment in 
                              which to learn while developing and growing in so many other aspects of life.
                               We encourage asking questions, delving into intellectual curiosities, and 
                               continue our work on being kind and respecting
                               others in preparation for Secondary School and young adulthood.</p>
                          </div>
                          <div className='banner-ctfs'>
                          <button> <a href="#curi"> Curriculum </a> </button>
                            <button> <a href="#arts"> Arts </a> </button>
                            <button><a href="#mode">Mode of delivering</a></button>
                          </div>
                           </div>
                           <div className='picture-Box boxBnner beauty' style={{backgroundImage:`url(${FewStuImg})`}}>

                           </div>
                       </div>
                   </div>
                   {/* ends of banner */}

                   <div className='curriculum'id='curi'>
                       <h1>~ Curriculum ~</h1>
                       <div className='curInside'>
                          <div className='curBox'>
                              <div className='curPic'>
                                  <img src={ReadImg} alt='readig'/>
                              </div>
                              <h3>READING</h3>
                              <div className='curLists'>
                                 <p> <span className='dott'></span> Students start to explore Novels and short stories books 
                                 because Reading  it improves  focus, 
                                 memory, empathy,grow mentally, emotionally, psychologically  and communication skills </p>

                              </div>      
                          </div>
                          <div className='curBox'>
                              <div className='curPic'>
                                  <img src={WriteImg} alt='writing'/>
                              </div>
                              <h3>CIVICS</h3>
                              <div className='curLists'>
                                <p> <span className='dott'></span>We continue with civics curriculum from middle school or class 4 and introduce more
                                 challenging and 
                               interesting topics   </p>
                              </div>
                          </div>

                          <div className='curBox'>
                              <div className='curPic'>
                                  <img src={Grammar} alt='writing'/>
                              </div>
                              <h3>GRAMMAR</h3>
                              <div className='curLists'>
                              <p> <span className='dott'></span>Our grammar program provides students with a toolbox to understand the relationship between words and phrases   </p>
                              <p> <span className='dott'></span>We use a phonics program based on the work of Romalda Spalding (The Spalding Method) designed for students in kindergarten through sixth grade utilizing integrated instruction and multisensory techniques to teach writing and spelling    </p>
                              <p> <span className='dott'></span> Students are introduced the Wordly Wise series of workbooks to strengthen vocabulary usage and enhance reading and writing skills   </p>
                              {/* <p> <span className='dott'></span>   </p> */}
            
                              </div>
                          </div>

                          <div className='curBox'>
                              <div className='curPic'>
                                  <img src={MathPic} alt='writing'/>
                              </div>
                              <h3>MATHEMATICS BASICS</h3>
                              <div className='curLists'>
                              <p> <span className='dott'></span>We continue to utilize the Saxon Math Program,
                               teaching a year above class level. Truly gifted math students advance yet another 
                               year in secondary and take either Algebra or Geometry for secondary school credit. 
                               This math program stays with our students through Algebra. It is a 
                               spiral-based curriculum, meaning that concepts are introduced in their
                                most middle school fashion and constantly re-enforced.  </p>
                        
                        
                              {/* <p> <span className='dott'></span>   </p> */}
            
                              </div>
                          </div>
                       </div>
                       {/* ends of curInside */}
                       <div className='curInside'>
                          <div className='curBox'>
                              <div className='curPic'>
                                  <img src={ScienceImg} alt='readig'/>
                              </div>
                              <h3>SCIENCE</h3>
                              <div className='curLists'>
                                 <p> <span className='dott'></span>We introduce students to geography studies, and continue to teach science with a 
                                 very hands-on approach in upper school, emphasizing that 
                                 there is as much to be
                            learned from a failed experiment as a successful one</p>
                                 <p> <span className='dott'></span>  Topics are explored across four disciplinary core subjects: physical sciences; life sciences; earth and space sciences </p>
                                  <p> <span className='dott'></span>
                                  Students also enjoy participating in our Projects where 
                                  they can apply science, math, and engineering concepts
                                   in a fun, creative and collaborative project-based manner
                                   </p>
                              </div>      
                          </div>
                          <div className='curBox'>
                              <div className='curPic'>
                                  <img src={HistoryImg} alt='writing'/>
                              </div>
                              <h3>HISTORY</h3>
                              <div className='curLists'>
                                <p> <span className='dott'></span>We keep learning History in deep and We typically enjoy a 
                                variety of field trips  to observe up-close some of the things we’ve studied,
                                 including  visits to Museums, Historical places, 
                                like Slave Market in Bagamoyo and Zanzibar  </p>
                               
                              </div>
                          </div>

                          <div className='curBox'>
                              <div className='curPic'>
                                  <img src={LanguagesImg} alt='writing'/>
                              </div>
                              <h3>ENGLISH</h3>
                              <div className='curLists'>
                              <p> <span className='dott'></span>In class 5 to 7, we are dedicated to shaping truly students in English so as they can become confident in speaking pure and effective English.</p>
                              <p> <span className='dott'></span>Because English is international Language nowdays Remnant students are often Prepaired well in Communicating English for high school credit and real life Communication skills</p>
                              {/* <p> <span className='dott'></span>   </p> */}
            
                              </div>
                          </div>

                          <div className='curBox'>
                              <div className='curPic'>
                                  <img src={PhysicalWorld} alt='writing'/>
                              </div>
                              <h3>PHYSICAL EDUCATION</h3>
                              <div className='curLists'>
                              <p> <span className='dott'></span>We inspire students to see the positive side of being physically active. Students learn traditional and non-traditional sports through engaging in activities that promote cognitive development. Our program builds gross and fine motor skills, teaches safe behaviors, and fosters awareness of personal space. Structured physical activities are an excellent avenue for the development of social skills.</p>
                              </div>
                          </div>
                       </div>
                       {/* ends of curInside */}

                      <br id='arts'/>
                      <br/>
                       <br/>
                      <br/>
                    <h1>~ Arts~</h1>
                    <div className='curInside secondCur'>
                    <div className='curBox'>
                              <div className='curPic'>
                                  <img src={DramaImg} alt='writing'/>
                              </div>
                              <h3>DRAMA</h3>
                              <div className='curLists'>
                              <p> <span className='dott'></span>We immerse students in all things
                               theatrical, ranging from stage make-up to theater’s. They study acting techniques, 
                               special effects, play analysis, modern and classic drama, costuming, 
                               stage lighting, stage craft, wigs and stage hair, stage sound, 
                               set design, and theater history. Each student also has the invaluable 
                               opportunity to act as a technician or performer in major
                                school-wide productions. The result is a thorough and 
                                complete exploration of every aspect of the theater world.</p>
                              {/* <p> <span className='dott'></span>   </p> */}
            
                              </div>
                          </div>

                          <div className='curBox'>
                              <div className='curPic'>
                                  <img src={MusicImg} alt='writing'/>
                              </div>
                              <h3>MUSIC</h3>
                              <div className='curLists'>
                              <p> <span className='dott'></span>We immerse students in all things
                               theatrical, ranging from stage make-up to theater’s. They study acting techniques, 
                               special effects, play analysis, modern and classic drama, costuming, 
                               stage lighting, stage craft, wigs and stage hair, stage sound, 
                               set design, and theater history. Each student also has the invaluable 
                               opportunity to act as a technician or performer in major
                                school-wide productions. The result is a thorough and 
                                complete exploration of every aspect of the theater world.</p>
                          
                              </div>
                          </div>

                          <div className='curBox'>
                              <div className='curPic'>
                                  <img src={Art} alt='writing'/>
                              </div>
                              <h3>Art</h3>
                              <div className='curLists'>
                              <p> <span className='dott'></span>Students continue to practice the elements of art and principles of design by using a variety of media. In fundamental art courses, techniques are strengthened to prepare for guided independent practice. For the prospective art school student, the focus will be on building a strong portfolio for the art school application process. With intensive studio practice, these students will have a cohesive body of work that shows their unique vision, as well as an acute awareness of the artists and cultures that inspire us </p>
                    
                              </div>
                          </div>
                          {/* outside curInside */}
                          </div>
                                    
                   <div className='mode' id='mode'>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                <h1>~ Mode of delivering~</h1>
                <p> 1. Though Face to Face with Teachers</p>
                <p>2. Through theories and practicles</p>
                <p>3. Use of Projectors and computers.</p>
                   </div>
                   </div>
        </div>;
    }
}
 
export default UpperSchool;