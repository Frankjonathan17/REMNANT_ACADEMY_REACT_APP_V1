import React from 'react';
import BodyImg from '../../images/body_bg.jpg';
import AllStudentsImg from '../../images/all-students.jpg';
import FewStuImg from '../../images/babyclass.jpg';
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





class BabySchool extends React.Component {


    componentDidMount()
{
    setTimeout(() => {
        window.scrollTo(0,20)
       }, 5);
}

    render() { 
        return <div className='babyClass beauty'  style={{backgroundImage:`url(${BodyImg})`}}>
                   <div className='Banner beauty' style={{backgroundImage:`url(${AllStudentsImg})`}} >
                       <div className='gradient'></div>
                       <div className='inside-banner'>
                           <div className='text-Box boxBnner'>
                          
                          <div className='banner-title'>
                            <h1>Baby School</h1>
                          </div>
                          <div className='banner-explain'>
        <p> <span className='big'>T</span>he academic curriculum for Baby 
        class (or class before 1 and above) is offers students a challenging but fun
        and active learning environment as they begin to grow 
        we introduce additional learning themes and practice new skills. Activities
         promote language , social skills and body awareness.
         </p>
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

                   <div className='curriculum' id='curi'>
                       <h1>~ Curriculum ~</h1>
                       <div className='curInside'>
                          <div className='curBox'>
                              <div className='curPic'>
                                  <img src={ReadImg} alt='readig'/>
                              </div>
                              <h3>READING</h3>
                              <div className='curLists'>
                                 <p> <span className='dott'></span>
                                  Baby class students will start to get familiar with reading during the 
                                 course of the year</p>
                                 <p> <span className='dott'></span>  students often end 
                                 their year reading above next class level this will make them more 
                                  aware of next classes.
                                  </p>

                              </div>      
                          </div>
                          <div className='curBox'>
                              <div className='curPic'>
                                  <img src={WriteImg} alt='writing'/>
                              </div>
                              <h3>WRITTING</h3>
                              <div className='curLists'>
                                <p> <span className='dott'></span>Proper letter formation is taught alongside phonemic awareness as students begin to read  </p>
                                <p> <span className='dott'></span>Written work continues to evolve and improve as they become more comfortable with their spelling skills  </p>
                              
                              </div>
                          </div>

                          <div className='curBox'>
                              <div className='curPic'>
                                  <img src={Grammar} alt='writing'/>
                              </div>
                              <h3>SPELLING</h3>
                              <div className='curLists'>
                              <p> <span className='dott'></span>Spelling begins in Kindergarten utilizing a memory-based marking system to teach students about syllabication and help them understand why words are spelled and pronounced as they are </p>
                              <p> <span className='dott'></span> We also begin to examine common spelling rules and their exceptions</p>
                              {/* <p> <span className='dott'></span>   </p> */}
            
                              </div>
                          </div>

                          <div className='curBox'>
                              <div className='curPic'>
                                  <img src={MathPic} alt='writing'/>
                              </div>
                              <h3>MATHEMATICS</h3>
                              <div className='curLists'>
                              <p> <span className='dott'></span>The Saxon Math 
                              Program or (teaching a new mathematical concept every day and constantly reviewing old concepts) is introduced in   Baby class level.   </p>
                              <p> <span className='dott'></span>
                              At the end of baby class year a student will be able to count in numbers correctly and doing simple calculations like adding and substracting
                              </p>
                        
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
                              <h3>KISWAHILI</h3>
                              <div className='curLists'>
                                 <p> <span className='dott'></span> We introduce swahili  to students in 
                                  order to create Sawareness for mastering  Swahili at this age </p>
                                 <p> <span className='dott'></span>  Students are  going to get good at writting and pronouncing swahili words in fluently way.
                                  </p>
                                 
                              </div>      
                          </div>
                          <div className='curBox'>
                              <div className='curPic'>
                                  <img src={HistoryImg} alt='writing'/>
                              </div>
                              <h3>STORIES</h3>
                              <div className='curLists'>
                                <p> <span className='dott'></span>Baby class students are introduced to simple stories that are 
                                educative, funny, and make them focus on listening also be active during classes.
                                 </p>   
                              </div>
                          </div>

                          <div className='curBox'>
                              <div className='curPic'>
                                  <img src={LanguagesImg} alt='writing'/>
                              </div>
                              <h3>ENGLISH</h3>
                              <div className='curLists'>
                              <p> <span className='dott'></span>
                              Remnant is committed to nurturing bilingual students, 
                              and we believe the earlier a 
                        child learns a language, the more readily the brain adapts</p>
                              <p> <span className='dott'></span>Basic vocabulary and 
                              conversational phrases are introduced </p>
                              {/* <p> <span className='dott'></span>   </p> */}
            
                              </div>
                          </div>

                          <div className='curBox'>
                              <div className='curPic'>
                                  <img src={PhysicalWorld} alt='writing'/>
                              </div>
                              <h3>PHYSICAL</h3>
                              <div className='curLists'>
                              <p> <span className='dott'></span>Learning positive
                              aspects of being physically active by teaching students about a 
                              variety of traditional and non-traditional sports</p>
                              <p> <span className='dott'></span>Our goals include building gross and fine motor skills while playing sports, learning about safe behaviors and personal space, and above all 
                              else having fun on the field no matter what the outcome</p>
                        
                              {/* <p> <span className='dott'></span>   </p> */}
            
                              </div>
                          </div>
                       </div>
                       {/* ends of curInside */}

                      <br/>
                      <br/>
                       <br/>
                      <br/>
                    <h1 id='arts'>~ Arts~</h1>
                    <div className='curInside secondCur'>
                    <div className='curBox'>
                              <div className='curPic'>
                                  <img src={DramaImg} alt='writing'/>
                              </div>
                              <h3>DRAMA</h3>
                              <div className='curLists'>
                              <p> <span className='dott'></span>We teach the beginning elements of theater and focus on creating and acting out characters who have similar emotions and are set in typical scenarios for  children at this age</p>
                              <p> <span className='dott'></span>Pantomime and improvisation are also introduced as ways for students to express themselves in class and on stage</p>
                        
                              {/* <p> <span className='dott'></span>   </p> */}
            
                              </div>
                          </div>

                          <div className='curBox'>
                              <div className='curPic'>
                                  <img src={MusicImg} alt='writing'/>
                              </div>
                              <h3>MUSIC</h3>
                              <div className='curLists'>
                              <p> <span className='dott'></span>Students begin to learn about music vocabulary and the ability to harmonize with melodies through singalongs</p>
                              <p> <span className='dott'></span>We explore many percussion instruments, including playing drums, and how to create and maintain consistent tempos</p>           
                              </div>
                          </div>

                          <div className='curBox'>
                              <div className='curPic'>
                                  <img src={Art} alt='writing'/>
                              </div>
                              <h3>Art</h3>
                              <div className='curLists'>
                              <p> <span className='dott'></span>Students are taught about the color wheel, terminology for various art techniques, and key figures in art history</p>
                             <p> <span className='dott'></span>They engage in the creative process through hands-on activities like drawing, painting, and assembling collages</p>
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
 
export default BabySchool;