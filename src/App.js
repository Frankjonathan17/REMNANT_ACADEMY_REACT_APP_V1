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
import Gallery from './components/Gallery';
import OnlineServices from './components/Online Services';
import Admin from './components/Admin';
class  App extends React.Component{

  state ={
    clonedSlider:'',
    OnlineServices:false,
    logedIn:false
  }


  HeadScroll=()=>{
    console.log('scrolling')
    if(window.scrollY>148){
        document.querySelector('.MainHeadWrap').classList.add('fixedHead')       
    }
    else{
        document.querySelector('.MainHeadWrap').classList.remove('fixedHead')
    }
    }

  setOnlineService=(OnlineServices)=>{
           this.setState({OnlineServices})
           if(OnlineServices===false){
             window.addEventListener('scroll', this.HeadScroll)
           } else{
            window.removeEventListener('scroll', this.HeadScroll)
          }
  }    
 

  changeLogin=()=>{
    if(window.localStorage.getItem('ameingia')){
      window.localStorage.removeItem('ameingia');
      this.setState({logedIn:false})
    }
  }

  componentDidMount(){

    this.setOnlineService(false)

    let logged = window.localStorage.getItem('ameingia');
    if(!logged) {
      this.setState({logedIn:false})
      return
    }
    else{
      this.setState({logedIn:true})
    }

    setTimeout(() => {
    let links = document.querySelectorAll('a');
    links.forEach(l=>{
            l.addEventListener('click', function(){
             setTimeout(() => {
              window.scrollTo(0,0)
             }, 50);
            })
    })
    }, 1000);
  }

// returnCommon=()=>{

//  if(this.state.OnlineServices===false){
//    return  (
      
//    )
//  }

 // }

  ReturnFooter=()=>{
           if(this.state.OnlineServices===false){
             return <Footer/>
           }
  }
  
 render(){
  return (
    <div className="wrapper">
     
      <div className="overlayMain"> </div>
       {
           this.state.OnlineServices ===false && (
            <React.Fragment>
            <MobileMenu/>
     <Header/>
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
            <Route path='/online-services' render={(props)=> <OnlineServices changeLogin={this.changeLogin} logedIn={this.state.logedIn} setOnlineService={this.setOnlineService} {...props}/>}/>
            <Route path='/admin' render={(props)=> <Admin changeLogin={this.changeLogin} logedIn={this.state.logedIn} setOnlineService={this.setOnlineService} {...props}/>}/>
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
