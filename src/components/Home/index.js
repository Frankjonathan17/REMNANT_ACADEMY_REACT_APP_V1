import React,{Component} from 'react';
import WelcomeApplyNow from '../ALLCOMMON/welcome Apply Now Box';
import './index.css'
import Slider from '../Slider/index';
import {Link} from 'react-router-dom';
import {ReactComponent as Play }from '../../assets/Play.svg';
import {ReactComponent as Pentagon}  from '../../assets/Pentagon.svg';
import {ReactComponent as DropDownArrws} from '../../assets/ArrowsBlue.svg'
import {ReactComponent as Urembo} from '../../assets/UremboBlueGreen.svg'
import {ReactComponent as KitabuSvg} from '../../assets/Book.svg'
import {ReactComponent as CalenderSvg} from '../../assets/Calender.svg'
import {ReactComponent as WaveSvg} from '../../assets/Wave.svg'
import  AlertNewsPic from '../../images/news.gif'; 
import PdfPic from '../../images/file.png';
import IntroVideo from '../../videos/remnant .mp4';
import BabyClassImg from '../../images/babyclass.jpg';
import AllStudentsImg from '../../images/all-students.jpg';
import HighClassImg from '../../images/gorofa.jpg';
import StudentPc from '../../images/student.png';
import SkillsPic from '../../images/skills.png';
import KeyPic from '../../images/key-person.png';
import AccauntabilityPic from '../../images/accountability.png'
import HeadMasterPic from '../../images/headmaster.jpg';
import KibahaPic from '../../images/kibaha.jpg';
import NgaoPic from '../../images/ngao.png';
import TcuPic from '../../images/tcu.png';
import VetaPic from '../../images/veta.png';
import NectaPic from '../../images/necta.png';
class Home extends Component {


    componentDidMount(){

        window.alert('MWISHOOOO')
            setTimeout(() => {
                window.scrollTo(0,20)
               }, 5);
    

//   calling api for news data

    //  async function GetNewsUpdatesEvents(){

    //   try{
    //     const result = await  axios('/home')
    //     console.log('resultss',result.data)
    //   }
    //   catch(er){
    //      console.log('kuna shida ',er)
    //   }
    //  }

//   setTimeout(()=>GetNewsUpdatesEvents(),2000)

let closeVideo = document.querySelector('html .emmbed .closeVideo');
let introVideo = document.querySelector('html .videoBox .left');
let emmbed= document.querySelector('.emmbed');
let video = document.createElement('video');

function openingVideo(){
  
  introVideo.removeEventListener('click', openingVideo)
  emmbed.classList.add('openVideo')
  emmbed.querySelector('iframe').style.display='none';
  video.src = IntroVideo
  video.style.width='100%'
  video.style.height='100%'
  video.setAttribute('autoplay', true);
  video.setAttribute('controls', true);
  video.setAttribute('loop', true);
  video.style.zIndex=10000
  video.style.position='relative'
  emmbed.appendChild(video)
}
introVideo.addEventListener('click', openingVideo );
closeVideo.onclick=function(){
  emmbed.classList.remove('openVideo')
 emmbed.classList.add('closingVideo')
 emmbed.removeChild(video)
 setTimeout(() => {
  introVideo.addEventListener('click', openingVideo )
 }, 500);

}


}



    render() { 
        return <React.Fragment>
             <div className="slider">
               <div className="inside">
              
	             <Slider clonedSlider={this.props.clonedSlider}/>
                 <div id='refSlide'></div>
                 <WelcomeApplyNow/>
                 {/* welcome video start */}
                 <div className="background">
    <div className="urembo">
        <Urembo/>
     </div>
    <div className="videoBox">
        <div className="left">
          <div className="videoThumb">
            <div className="emmbed">
                <div className="closeVideo">
                    close
                </div>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/AC8_GOC2NGs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
            <div className="play-icon">
                <Play/>
              </div> 
          </div>
        </div>
        <div className="right">
         <div className="videoInfo">
            <h2>
                start your journey  <br/>
                with     <span className="fade-color"> Remnant academy</span> <br/>
            today.
             </h2>
         </div>
        </div>
    </div>
    
    <div className="bg">
        <span className="fig1">
           <Pentagon/>
           
        </span>
        <span className="fig2">
        <Pentagon/>
        </span>
       
    </div>
</div>
{/* welcome video ends */}
{/* classes start */}

<div className="classesHeader">
    <div className="arrws">
      <DropDownArrws/>
    </div>
    <div className="clasesTitle">
       
        <h2>REMNANT JOINING CLASESS</h2>
    </div>
    <div className="arrws arr-second">
        <DropDownArrws/>
    </div>
</div>

{/* classes Head ends */}
{/* Classes Box start */}

<div className="class">


   <div className='joinClasses'>
           <div className='j-box'>
               <div className='j-pic'>
                   <img src={BabyClassImg} alt='baby class'/>
               </div>
               <div className='j-info'>
                   <h2>BABY SCHOOL</h2>
                   <p> Our baby classes  offer an insight into baby 
                       development to increase your confidence and understanding of your growing baby. All our fun activities are suitable from birth with
                        the exercises progressing as your baby grows.</p>

                  <Link to="/baby-class">Read More</Link>
               </div>
           </div>
           <div className='j-box'>
               <div className='j-pic'>
                <img src={HighClassImg} alt='middle class'/>
               </div>
               <div className='j-info'>
                   <h2>MIDDLE SCHOOL</h2>
                   <p> Are classes start from 1 to 4  offering an insight into baby 
                       development to increase your confidence and understanding of your growing baby. All our fun activities are suitable from birth with
                        the exercises progressing as your baby grows.</p>

                  <Link to="/baby-class">Read More</Link>
               </div>
           </div>
           <div className='j-box'>
               <div className='j-pic'>
             <img src={AllStudentsImg} alt='upper school'/>
               </div>
               <div className='j-info'>
                   <h2>UPPER SCHOOL</h2>
                   <p> start from class 5 to 7 , offer an insight into baby 
                       development to increase your confidence and understanding of your growing baby. All our fun activities are suitable from birth with
                        the exercises progressing as your baby grows.</p>

                  <Link to="/baby-class">Read More</Link>
               </div>
           </div>
   </div>
  

</div>

{/* all classes ends */}
<div className="space5rem"></div>
{/* school news and announcements start*/}

<div className="news">
<div className="posts">
     <div className="inside" style={{overflow:"visible"}}>
        <div className="gif">
            <img src={AlertNewsPic} alt="news gif"/>
        </div>
        <div className="topHead">
            <span className="title">
                school news and updates
            </span>
            <div className="rembo">
             <Urembo/>
            </div>
        </div>
        <div className="newsBar">
             <div className="fileType">
                 fileType
             </div>
            <div className="title">
                title
            </div>
            <div className="date">
                Date posted
            </div>
        </div>
        <div className="viewAll">
            <Link to="/news-events">view all &gt;&gt;</Link>
        </div>
        <div className="postedBox">
            {/* single post start */}
            <div className="post">
                <div className="file">
                    <img src={PdfPic} alt="fileType"/>
                </div>
                <div className="text">
              <span>
                Call for meeting all  teachers at the conference center 
              </span>
                </div>
                <div className="time">
                 22/11/2021
                </div>
             
            </div>
            {/* single post ends */}
        {/* out side of postbox 👇 */}
        </div>
     </div>
</div>
<div className="rightSide">
    <div className="applicationForm">
   <div className="inside">
     <span className="title">
         application form
     </span>
     <div className="figure">
           <CalenderSvg/>
   </div>
     <div className="getform">
     <Link to="/application-form">download here &gt;&gt;</Link>
     </div>
   </div>
    </div>
    <div className="examsResult">
<div className="inside">
    <span className="title">
        school events
    </span>
    <div className="figure">
       
            <KitabuSvg/>
        
    </div>
    <div className="getEvents">
   <Link to="/news-events"> <u> view all here </u> &gt;&gt; </Link>
    </div>
</div>
    </div>
</div>
</div>

{/* school news and announcements ends*/}
<div className="spaceBox"></div>
{/* start why choosing remant academy */}
<div className="whyRemnant">
    <div className="wave2">
        <WaveSvg/>
         </div>
    <div className="wave3">
    <WaveSvg/>
    </div>

    <div className="why">
        <div className="inside" style={{overflow:'visible'}}>
          <div className="whyHead">
         
            <h1>
                <span>
                    <DropDownArrws/>
                   </span>
               <span>
                WHY CHOOSING REMNANT
               </span>


            </h1>
          </div>
            <div className="box">
                <img src={StudentPc} alt="remnant student"/>
                <div className="dot">
                  <CalenderSvg/>
                </div>
            </div>
            <div className="texts">
                
                  <div className="in">
                      <div className="single">
                          <div className="imgBox">
                              <img src={SkillsPic}
                              alt="why choose remant"/>
                          </div>
                          <div className="textBox">
                              <h3>Brilliant Mentors</h3>
                              <p>
                                  we have certified teachers with enough experience 
                                   in teaching and caring students.
                              </p>
                          </div>
                      </div>
                
                      <div className="single">
                        <div className="imgBox">
                            <img src={AccauntabilityPic}
                            alt="why choose remant"/>
                        </div>
                        <div className="textBox">
                            
                            <h3>Best Perfomance</h3>
                            <p>
                               
                                remnant in  national examinations is 
                                ranking and holding top position at Kibaha District
                            
                            </p>
                        </div>
                    </div>

                    <div className="single">
                        <div className="imgBox">
                            <img src={KeyPic}
                            alt="why choose remant"/>
                        </div>
                        <div className="textBox">
                            <h3>We Believe in Talent</h3>
                            <p>
                                Our teachers are here to hold your children talent and boost
                                student dreams to come true.
                            </p>
                        </div>
                    </div>
                  </div>
                  
            </div>
        </div>
    </div>
</div>

{/* ENDS why choosing remant academy */}
{/* start HeadMaster Greeting Title */}

<div className="greeting">
    <div className="greet-bg">
        <span>
            <Urembo/>
        </span>
        <span>
            <Urembo/>
        </span>
        <span>
            <Urembo/>
        </span>
        <span>
            <Urembo/>
        </span>
    </div>
    <h1>HEADMASTER'S MESSAGE</h1>
</div>

{/* ENDS of HeadMaster Greeting  Title*/}
{/* Start mainBox for greeting */}
<div className="greetBox">
       <div className="inside">


<div className="swiper">
    <div className="swiper-wrapper">      
      <div className="swiper-slide">
        <div className="inside-slider">
            <div className="picture">
                <img src={HeadMasterPic} alt="remant headmaster Sir.John"/>
            </div>
          <div className="infom">
              <p>I humbly invite you to study at Remnant Academy and that you will enjoy 
                  being at our School. I furthermore hope  you will be able to fully 
                  focus on your studies with the necessary intensity. 
                The years ahead of you are of 
                  extreme importance concerning academic development</p>
                  <h4>~Sir John~</h4>
          </div>
        </div>
      </div>
    </div>
  

  </div>

  
       </div>
  </div>
{/* Ends of mainBox for greeting */}
{/* Start PatnersBox  */}
<div className="patners">
     <div className="header">
         <span>
            <DropDownArrws/>
         </span>
         <span>
             <h2> OUR PATNERS</h2>
         </span>
     </div>
     <div className="patnersBox">
              <div className="box">
                <img src={KibahaPic} alt="patners"/>  
              </div>
              <div className="box">
                <img src={TcuPic} alt="patners"/>
              </div>
              <div className="box">
                <img src={NectaPic} alt="patners"/>
              </div>
              <div className="box">
                <img src={NgaoPic} alt="patners"/>
              </div>
              <div className="box">
                <img src={VetaPic} alt="patners"/>
              </div>
     </div>
</div>
{/* Ends patnersBox */}
<div className="spacing"></div>
{/* starting Footer */}
    

              </div>
 </div>
        </React.Fragment>;
    }
}
 
export default Home;