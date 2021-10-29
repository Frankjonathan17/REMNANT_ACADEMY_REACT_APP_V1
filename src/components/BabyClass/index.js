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





class BabyClass extends React.Component {
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
                              <p> <span className='big'>D</span>uring the elementary school years, children begin to develop their strengths as scholars. Our goal is to nurture these strengths, encourage their curiosities, and let them know that with hard work and dedication to their studies they can achieve anything later in middle school and well beyond in life.</p>
                          </div>
                          <div className='banner-ctfs'>
                            <button>Curriculum</button>
                            <button>Arts</button>
                            <button>Mode of delivering</button>
                          </div>
                           </div>
                           <div className='picture-Box boxBnner beauty' style={{backgroundImage:`url(${FewStuImg})`}}>

                           </div>
                       </div>
                   </div>
                   {/* ends of banner */}

                   <div className='curriculum'>
                       <h1>~ Curriculum ~</h1>
                       <div className='curInside'>
                          <div className='curBox'>
                              <div className='curPic'>
                                  <img src={ReadImg} alt='readig'/>
                              </div>
                              <h3>READING</h3>
                              <div className='curLists'>
                                 <p> <span className='dott'></span> Students explore both classic and contemporary works</p>
                                 <p> <span className='dott'></span>  Examples of works read during these 
                                 years include  Aesop’s Fables, D’Aulaires’ Book of Greek Mythology, 
                                 Number of the Stars, Roll of Thunder Hear My Cry, and poetry 
                                 selections from Langston Hughes and Ogden Nash  </p>

                              </div>      
                          </div>
                          <div className='curBox'>
                              <div className='curPic'>
                                  <img src={WriteImg} alt='writing'/>
                              </div>
                              <h3>WRITTING</h3>
                              <div className='curLists'>
                                <p> <span className='dott'></span>First and second-grade curriculum emphasizes paragraph writing and introduces writing as an ongoing process  </p>
                                <p> <span className='dott'></span> By third grade, students learn to craft a thesis statement, outline, rough draft, and a final draft  </p>
                                <p> <span className='dott'></span> Fourth and fifth-graders continue to fine-tune their writing skills and learn to incorporate in-depth feedback to improve their content, structure, and grammar  </p>
                                <p> <span className='dott'></span> All of our students are taught that writing is a form of creative expression and that their most vivid imaginations should always be used to color their written narratives  </p>
        
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
                              <p> <span className='dott'></span>We continue to employ the Saxon Math Program introduced earlier in Kindergarten -Saxon Math is a proven and successful method for teaching mathematics by continually reviewing past concepts as new ones are introduced  </p>
                              <p> <span className='dott'></span>As math continues to be taught at one grade level above during the lower school years, we find this program to be effective in helping students retain and build upon basic math concepts as they gradually become more challenging</p>
                        
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
                              <h3>SCIENCE BASICS</h3>
                              <div className='curLists'>
                                 <p> <span className='dott'></span> Our lower school students are engaged in science classes with a very hands-on approach as we encourage them to explore and experiment through with every lesson</p>
                                 <p> <span className='dott'></span>  We cover core ideas related to physical science, life science, earth and space sciences, engineering, technology, and the application of science in daily life  </p>
                                  <p> <span className='dott'></span>In addition, students love participating in our dedicated MakerSpace curriculum where they are able to translate concepts taught into hands-on projects fostering creativity and the opportunity to collaborate on ideas and inventions </p>
                              </div>      
                          </div>
                          <div className='curBox'>
                              <div className='curPic'>
                                  <img src={HistoryImg} alt='writing'/>
                              </div>
                              <h3>HISTORY BASICS</h3>
                              <div className='curLists'>
                                <p> <span className='dott'></span>Teaching from the Core Knowledge Curriculum, students are introduced to the ancient civilizations of Greece and Rome, India, China, and Mesopotamia</p>
                                <p> <span className='dott'></span>As part of Kirby Hall’s dedication to growing responsible global citizens and encouraging respect for all cultures, we also explore contemporary contributions from Mexico, Canada, and Japan  </p>
                                <p> <span className='dott'></span>With regards to North American history, we look at the earliest Meso-american civilizations and lead up to the twentieth-century civil rights movements here preparing students for more in-depth U.S. history studies later in middle school </p>
                               
                              </div>
                          </div>

                          <div className='curBox'>
                              <div className='curPic'>
                                  <img src={LanguagesImg} alt='writing'/>
                              </div>
                              <h3>ENGLISH BASICS</h3>
                              <div className='curLists'>
                              <p> <span className='dott'></span>Lower school children receive Spanish instruction through Kirby Hall’s ongoing commitment to fostering bilingualism </p>
                              <p> <span className='dott'></span>Reading, writing, and speaking skills develop at a rapid pace with our accelerated program and with the goal to achieve complete fluency in middle or upper school  </p>
                              <p> <span className='dott'></span>We also continue to teach about and celebrate the rich and colorful traditions in Hispanic culture and history  </p>
                              {/* <p> <span className='dott'></span>   </p> */}
            
                              </div>
                          </div>

                          <div className='curBox'>
                              <div className='curPic'>
                                  <img src={PhysicalWorld} alt='writing'/>
                              </div>
                              <h3>PHYSICAL EDUCATION</h3>
                              <div className='curLists'>
                              <p> <span className='dott'></span>The healthy benefits of being physically active are enforced in all grade levels at Kirby Hall</p>
                              <p> <span className='dott'></span>PE in lower school is a fun time for students to try both traditional and non-traditional sports as well as learn about the importance of teamwork and good sportsmanship</p>
                        
                              {/* <p> <span className='dott'></span>   </p> */}
            
                              </div>
                          </div>
                       </div>
                       {/* ends of curInside */}

                      <br/>
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
                              <p> <span className='dott'></span>Students begin to learn about play production and theater terminology as well as start to read influential plays in history and practice the art of performing on stage</p>
                              <p> <span className='dott'></span>As always, creativity and self-expression are highly encouraged during this often much loved and engaging class period</p>
                        
                              {/* <p> <span className='dott'></span>   </p> */}
            
                              </div>
                          </div>

                          <div className='curBox'>
                              <div className='curPic'>
                                  <img src={MusicImg} alt='writing'/>
                              </div>
                              <h3>MUSIC</h3>
                              <div className='curLists'>
                              <p> <span className='dott'></span>We spend time enjoying singalongs and learning about different genres of music</p>
                              <p> <span className='dott'></span>A variety of instrumental families are studied and students work on keeping consistent tempos through regular practice with percussions like the bongo drums</p>
                               <p> <span className='dott'></span> he history of and importance of music in theater is also introduced in lower school  </p> 
            
                              </div>
                          </div>

                          <div className='curBox'>
                              <div className='curPic'>
                                  <img src={Art} alt='writing'/>
                              </div>
                              <h3>Art</h3>
                              <div className='curLists'>
                              <p> <span className='dott'></span>Notable artists throughout history and variety of art techniques are explored </p>
                        
                             <p> <span className='dott'></span>  Students are encouraged to draw upon these lessons for inspiration as they create their own unique masterpieces through drawing, painting, sculpting, and print-making </p>
            
                              </div>
                          </div>
                          {/* outside curInside */}
                          </div>
                   </div>
        </div>;
    }
}
 
export default BabyClass;