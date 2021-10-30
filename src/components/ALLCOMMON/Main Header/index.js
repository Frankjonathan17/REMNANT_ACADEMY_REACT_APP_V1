import React from "react";
import { Link } from "react-router-dom";
import {ReactComponent as DropDown} from '../../../assets/DropDown.svg';
import  Logo from '../../../assets/REMNANT LOGO.svg';
import Gsap from 'gsap'
import './index.css'


class MainHeader extends React.Component  {


  
  componentDidMount(){
    this.mainBreakPoint =868
    this.menuState=true
   this.HiddenMenuState = false;
   this.overlayMain = document.querySelector('.overlayMain');
   this.mobileMenu= document.querySelector('.mobileMenu');
  this.before = document.querySelector('.before');
  this.after = document.querySelector('.after');
  this.infoHeader = document.querySelector('.infoHeader');
  this.MenuOne = document.querySelector('.headingMenu .one');
  this.MenuTwo = document.querySelector('.headingMenu .two');
  this.MenuThree = document.querySelector('.headingMenu .three');
  this.MenuTwoSpan = document.querySelector('.headingMenu .two > span');
  this.menues = document.querySelector('.menues');
  this.hamb = document.querySelector('.hamburger');
  this.hiddenMenu= document.querySelector('.hiddenMenu')
  this.bar1 = document.querySelector('.bar-1')
  this.bar2 = document.querySelector('.bar-2')
 this.bar3= document.querySelector('.bar-3')

 let menuesLink = document.querySelectorAll('.menues a');
 menuesLink.forEach(m=>{
   m.addEventListener('click',()=>{
     this.menuState=true;
         this.closeMenu() 
        })
 })

 window.addEventListener('scroll',function(){
   if(window.scrollY>148){
       document.querySelector('.MainHeadWrap').classList.add('fixedHead')       
   }
   else{
       document.querySelector('.MainHeadWrap').classList.remove('fixedHead')
   }
   })

}



openMenu=()=>{
  let time;
  document.querySelector('.hamburger').style.pointerEvents='none'
  if(window.innerWidth>this.mainBreakPoint){
     time = 500
  }
  else{
    time = 1500
  }
 
  setTimeout(() => {
   document.querySelector('.hamburger').style.pointerEvents='inherit'
  }, time);
 
  if(this.HiddenMenuState===false){
    if(window.innerWidth>=this.mainBreakPoint){
      document.querySelector('.MainHeadWrap .hiddenMenu').style.height='8rem'
     
    }
   
    document.querySelector('.hamburger').style.background ='var(--blue)';
    document.querySelector('.hamburger').style.background ='var(--blue)';
    document.querySelector('.bar-1').style.transform=' translateY(.8rem)rotate(-47deg)';
    document.querySelector('.bar-2').style.transform=' translatex(-1rem)rotate(0deg)';
    document.querySelector('.bar-2').style.opacity=0;
    document.querySelector('.bar-3').style.transform=' translateY(-.9rem)rotate(47deg)';
    this.HiddenMenuState=true;
 
 if(window.innerWidth<this.mainBreakPoint){

   document.body.style.overflow='hidden'
    let timeline = new Gsap.timeline()
    
    timeline.to(this.infoHeader,{
      marginTop:'-4rem',
      duration:.5,
      ease:'expo.out',
      delay:0
    },'same')
    .to(this.mobileMenu,{
      x:'-100vw',
      duration:.5,
      ease:'expo.out',
      delay:0.02
    },'same')
    
    // ending lines animation
    // starting header animation
    .to(this.MenuTwo,{
      width:'100%',
      left:0,
      duration:1,
      ease:'expo.out',
      delay:0.04
    },'same')
    .to(this.MenuTwoSpan,{
        opacity:1,
      duration:.5,
      ease:'expo.out',
      delay:0.08
    },'same')
    
    .to(this.menues,{
      opacity:1,
      x:'0',
      duration:1,
      ease:'expo.out',
      delay:0.09
    },'same')
 }
 }
  }
 
     closeMenu=()=>{
       if(window.innerWidth>=this.mainBreakPoint){
     this.hiddenMenu.style.height='0rem'
       }
   
      this.bar1.style.transform=' translateY(0rem)rotate(0deg)';
    this.bar2.style.transform=' translatex(0rem)rotate(0deg)';
     document.querySelector('.bar-2').style.opacity=1;
    this.bar3.style.transform=' translateY(0rem)rotate(0deg)';
       this.HiddenMenuState=false;
         document.querySelector('.hamburger').style.background ='var(--dark-blue)';
   
         if(window.innerWidth<this.mainBreakPoint){
           document.body.style.overflow='auto'
      
            let timeline = new Gsap.timeline();
            timeline.to(this.menues,{
             opacity:0,
             x:'50%',
             duration:1,
             ease:'expo.out',
             delay:0
           },'same')
           .to(this.MenuTwoSpan,{
             opacity:0,
           duration:.48,
           ease:'expo.out',
           delay:0.02
         },'same')
         .to(this.MenuTwo,{
           width:'0%',
           left:0,
           duration:1,
           ease:'expo.out',
           delay:0.04
         },'same')
         // ends of inside menu titles animation
         // start closing menu
         .to(this.mobileMenu,{
           x:'0vw',
           duration:.5,
           ease:'expo.out',
           delay:0.05
         },'same')
       
          
       }    
       //outside
     }
 

     reaMenu=()=>{
      if(this.menuState){
        this.openMenu()
        this.menuState=false
      }
      else {
        this.closeMenu()
        this.menuState=true
      }
}
         


  render(){

       return ( 
        <React.Fragment>
          <div className="MainHeadWrap">
 <div className="mainHeader_inside">
    <div className="hiddenMenu">
     
     <div className="hiddenBg">
     </div>
   <div className="hMenu">
       <div className="hMl">
           <Link to="/gallery">Gallery</Link>
       </div>
       <div className="hMl">
         <Link to="/online-service">Online Services</Link>
     </div>
     <div className="hMl">
         <Link to="/application-form">Application Form</Link>
     </div>
     <div className="hMl">
         <Link to="/perfomance">Examination Results</Link>
     </div>
   </div>
 
 </div>
   <div className="mainHeader flex center justifyBetween">
     <div className="logoBox flex center">
         <span> 
             <Link to="/">
             <img src={Logo} alt="remnant academy logo" />
             </Link></span>
            <span className="schoolName">
                <Link to="/">Remnant Academy</Link></span>
           </div>
           <div className="menu flex center justifyCenter">
             <span className="link menu-link home-link">
             <span>  
                Students
                 <div className="drop">
                    <div className="drop_inside">
                   <Link className='menuDropLinks' to='/academic-calender'>
                       <div className="m-link">Timetable</div></Link>
                     <Link to='/timetables' className='menuDropLinks'>
                     <div className="m-link">School life</div>
                          </Link> 
                          <Link to='/activities' className='menuDropLinks'>
                     <div className="m-link">Sports &amp; Activities</div>
                          </Link> 
                          <Link to='/gallery' className='menuDropLinks'>
                     <div className="m-link">Gallery</div>
                          </Link> 
                          <Link to='/resources' className='menuDropLinks'>
                     <div className="m-link">E-Learning Resources</div>
                          </Link> 
                    </div>
                   </div>
                 </span>
                 <span> <DropDown/></span>
             </span>
             <span id="academics-menu" className="menu-link link">
                 <span>Academics</span>
                   <div className="drop">
                    <div className="drop_inside">
                   <Link className='menuDropLinks' to='/academic-calender'>
                       <div className="m-link">Academic Calender</div></Link>
                  <Link to='/studies-offered' className='menuDropLinks'> 
                  <div className="m-link">Studies Offered</div>
                  </Link>  
                   
                    
                     <Link to='/bell-schedules' className='menuDropLinks'>
                     <div className="m-link">Bell schedules</div>
                          </Link> 
                     <Link to='/news-events' className='menuDropLinks'>
                     <div className="m-link">News and Events</div>
                          </Link> 
                    </div>
                   </div>
                 <span>
                
               <DropDown/>
                  
                 </span>
             </span>
             <span id="admission-menu" className="menu-link link">
                 <span>Admission</span>
                 <div className="drop">
                   <div className="drop_inside">
                       <Link to='/baby-school' className='menuDropLinks'>
                       <div className="m-link">Baby School</div>
                           </Link>
                           <Link to='/middle-school' className='menuDropLinks'>
                       <div className="m-link">Middle School</div>
                           </Link>
                           <Link to='/upper-school' className='menuDropLinks'>
                       <div className="m-link">Upper School</div>
                           </Link>
                           <Link to='/admission-procedures' className='menuDropLinks'>
                           <div className="m-link">Admission procedures</div>
                           </Link>
                   </div>
                 </div>
                 <span>
                 <DropDown/>
                 </span>
             </span>
             <span  id='about-menu' className="menu-link link">
                 <span>
                     
                     About us
                 </span>
                 <div className="drop">
                  <div className="drop_inside">
                    <Link to='/welcome' className='menuDropLinks'>
                         <div className="m-link">Welcome Message</div> </Link>
                         <Link to='/mission-vision' className='menuDropLinks'>
                         <div className="m-link">Mission &amp; Vision</div> 
                           </Link>
                           <Link to='/history' className='menuDropLinks'>
                           <div className="m-link">philosophy and values</div>
                           </Link>
                           <Link to='/perfomance' className='menuDropLinks'>
                           <div className="m-link">Perfomance</div>
                           </Link>
                           <Link to='/opportunities' className='menuDropLinks'>
                           <div className="m-link">Employment Opportunity</div>
                           </Link>
                           <Link to='/contact' className='menuDropLinks'>
                           <div className="m-link">contact us</div>
                           </Link>

                  </div>
                     
                 </div>
                 <span>
                 <DropDown/>
                 </span>
              </span>
         
         </div>
            <div className="hamburger" onClick={this.reaMenu}>
                     <div className="ham-box">
                        <div className="menu-box">
                         <div className="bar bar-1"></div>
                         <div className="bar bar-2"></div>
                         <div className="bar bar-3"></div>
                        </div>
                     </div>
                  </div>
            </div>
         </div>
    </div>
        </React.Fragment>
     );
       }
}
 
export default MainHeader;
