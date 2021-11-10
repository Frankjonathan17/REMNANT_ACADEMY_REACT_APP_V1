import React from 'react';
import { Switch ,Route} from 'react-router';
import './App.css';
import AcademicCalender from './components/Academic Calender';
import AdmissionProcedures from './components/Admission Procedures';
import Footer from './components/ALLCOMMON/Footer';
import Header from './components/ALLCOMMON/Header';
import MobileMenu from './components/ALLCOMMON/Mobile Menu';
import BellSchedules from './components/Bell Schedules';
import Contact from './components/Contact';
import Home from './components/Home'
import JoiningClasses from './components/Joining Classes';
import NewsEvents from './components/News and Events';
import StudiesOffered from './components/Studies Offered';
import Welcome from './components/Welcome';
import MidleSchool from './components/MiddleSchool';
import UpperSchool from './components/UperSchool';
import BabySchool from './components/BabySchool';
import axios from 'axios'
import Gallery from './components/Gallery';
import OnlineServices from './components/Online Services';
import Admin from './components/Admin';
import PhilosophyAndValue from './components/philosophyAndValue';
import SinglePost from './components/SinglePost';
import ApplicationForm from './components/Application Form';
import Perfomance from './components/Perfomance';
import SchoolLife from './components/SchoolLife';
import VisionMission from './components/Vision and Mission';
import Opportunities from './components/Opportunities';
import Visit from './components/Visit Map Address';
class  App extends React.Component{

  state ={
    OnlineServices:false,
    user:[]
  }


  // HeadScroll=()=>{
  //   console.log('scrolling')
  //   if(window.scrollY>148){
  //  this.overlayMain.current.classList.add('fixedHead')       
  //   }
  //   else{
  //     this.overlayMain.current.classList.remove('fixedHead')
  //   }
  //   }

    setUser=(user)=>{
     
      let us = user
      let copy =user
      if(!copy.photo){
        copy.photo=''
      }
      if(!us.photo){
        us.photo=''
      }
      us.photo=''
      this.setState({user:copy})

      localStorage.removeItem('user')
      window.localStorage.setItem('user', JSON.stringify(us))
      setTimeout(() => {
        window.location.reload()
      }, 20)
      // window.localStorage.removeItem('User')
     // let binary = `data:image/png;base64,`+ new Buffer(user.photo.data).toString('base64')
      // let newuser = user
      // newuser.photo=''
      // let userr = window.localStorage.getItem('User');
      // let usern = JSON.parse(userr)
      // window.localStorage.setItem('User', JSON.stringify(newuser))
      // window.localStorage.setItem('ameingia', true)
    //  checkUpdates()
     
    }

    checkUpdates = async()=>{
      let user = window.localStorage.getItem('user')
        let pure = JSON.parse(user);
      try{
     let result = await axios.post('/api/login',{
       password:pure.password,
       email:pure.email})
      this.setState({user:result.data.profile})

     
     }catch(er){
         console.log('shida ya kufecth ',er)
      }
   } 


   
helper=(state)=>{
  this.setState({...state})
}



  setOnlineService=(OnlineServices)=>{
           this.setState({OnlineServices})
           if(OnlineServices===false){
            //  window.addEventListener('scroll', this.HeadScroll)
           } else{
            // window.removeEventListener('scroll', this.HeadScroll)
          }
  }    
 

  changeLogin=()=>{
    if(window.localStorage.getItem("user")){
      window.localStorage.removeItem('user');
       this.setState({user:[]})
    }

    else{
           return
    }
  }

  componentDidMount(){

 
    this.overlayMain = React.createRef()

    this.setOnlineService(false)
    
    
    let user = window.localStorage.getItem('user')
    console.log('user ni ',user)

    if(user){
      this.setState({user:JSON.parse(user)})
      
    }

    // this.checkUpdates();
    setTimeout(() => {
    let links = document.querySelectorAll('a');
    links.forEach(l=>{
            l.addEventListener('click', function(){
             setTimeout(() => {
              window.scrollTo(0,0)
             }, 10);
            })
    })
    }, 1000);

  }

  // ends of DID-MOUNT

  ReturnFooter=()=>{
           if(this.state.OnlineServices===false){
             return <Footer/>
           }
  }
  
 render(){
  return (
    <div className="wrapper">
     
    {this.state.OnlineServices===false && <div className="overlayMain" ref={this.overlayMain} > </div>}
     
       {
           this.state.OnlineServices ===false && (
            <React.Fragment>
            <MobileMenu/>
     <Header/>
     <div className='SPACEH' style={{height:'12.9rem'}}></div>
         </React.Fragment>
           ) 
          
       }
          <Switch>
            <Route path='/academic-calender' component={AcademicCalender}/>
            <Route path='/studies-offered' component={StudiesOffered}/>
            <Route path='/bell-schedules' component={BellSchedules}/>
            <Route path='/news-events' component={NewsEvents}/>
            <Route path='/joining-classes' component={JoiningClasses}/>
            <Route path='/admission-procedures' component={AdmissionProcedures}/>
            <Route path='/welcome' component={Welcome}/>
            <Route path='/baby-school' component={BabySchool}/>
            <Route path='/middle-school' component={MidleSchool}/>
            <Route path='/upper-school' component={UpperSchool}/>
            <Route path='/contact' component={Contact}/>
            <Route path='/gallery' component={Gallery}/>
            <Route path='/philosophy-value' component={PhilosophyAndValue}/>
            <Route path='/single-post/:postid' component={SinglePost}/>
            <Route path='/application-form' component={ApplicationForm}/>
            <Route path='/perfomance' component={Perfomance}/>
            <Route path='/school-life' component={SchoolLife}/>
            <Route path='/mission-vision' component={VisionMission}/>
            <Route path='/opportunities' component={Opportunities}/>
            <Route path='/visit' component={Visit}/>
            <Route path='/online-services' render={(props)=> <OnlineServices
              user={this.state.user}
               setUser={this.setUser} 
               changeLogin={this.changeLogin} 
               setOnlineService={this.setOnlineService} 
               {...props}/>}/>

            <Route path='/admin'  render={(props)=> <Admin
              helper={this.helper}
             user={this.state.user}  
            setUser={this.setUser}  changeLogin={this.changeLogin} 
            logedIn={this.state.logedIn} setOnlineService={this.setOnlineService} 
            {...props}/>}/>
            <Route exact path='/' render={(props)=><Home  clonedSlider={this.state.clonedSlider} {...props}/>}/>
          </Switch>
         <React.Fragment>
           {
            
            this.state.OnlineServices ===false && (
              <Footer/>
             ) 
            
           }
         </React.Fragment>
    </div>
  );
 }
}

export default App;
