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
class  App extends React.Component{

  state ={
    clonedSlider:''
  }


  componentDidMount(){

    setTimeout(() => {
          // HATUA YA KWANZA  KU CLONE NA KUHIFATHI KISHA KUFUTA NODE
    let SLIDERR = document.getElementById('wowslider-container0');
    let cloned = SLIDERR.cloneNode(true);
    this.setState({clonedSlider:cloned})
    SLIDERR.style.display='none'

    }, 50);

    setTimeout(() => {
    let links = document.querySelectorAll('a');
    links.forEach(l=>{
            l.addEventListener('click', function(){
             setTimeout(() => {
              window.scrollTo(0,20)
             }, 50);
            })
    })
    }, 1000);
  }


 render(){

  return (
    <div className="wrapper">
      <div className="overlayMain"></div>
         <MobileMenu/>
          <Header/>
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
            <Route exact path='/' render={(props)=><Home clonedSlider={this.state.clonedSlider} {...props}/>}/>
          </Switch>
          <Footer/>
    </div>
  );
 }
}

export default App;
