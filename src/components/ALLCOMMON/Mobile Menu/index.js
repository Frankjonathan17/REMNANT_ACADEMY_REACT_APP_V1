import React from 'react';
import { Link } from 'react-router-dom';

const MobileMenu = () => {
    return ( 
        <React.Fragment>
            
  <div className="mobileMenu">
    <div className="insideMenu">
         <div className="line lineTop"></div>
         <div className="line lineBottom"></div>
         <div className="line lineLeft"></div>
         <div className="line lineRight"></div>
         <div className="containerMenu">
             <div className="headingMenu">
                  <div className="slide one"> </div>
                  <div className="slide two"><span> MENU</span> </div>
                  <div className="slide three"> </div>
             </div>
             <div className="menues">
                  <Link to='/'>  <div className="menuItem" >Home</div></Link>
                  <Link to='/academics'> <div className="menuItem">Academics</div> </Link>
                  <Link to='/admission-procedures'> <div className="menuItem">Admission</div> </Link>
                  <Link to='/about'><div className="menuItem">About us</div> </Link>
                  <Link to="/contact">  <div className="menuItem" >Contacts</div> </Link>
                  <Link to='/gallery'> <div className="menuItem" >Gallery</div> </Link>
                  <Link to='online-services'>   <div className="menuItem">Online Services</div> </Link>
                  <Link to='/application-form'> <div className="menuItem" >Application Form</div> </Link>
                  <Link to='/news-events'><div className="menuItem">News and Events</div> </Link>
                  <Link to='/academic-calendar'><div className="menuItem">Academic Calender</div> </Link>
                  <Link to='/visit'>  <div className="menuItem">Visit</div></Link>
              
             </div>
         </div>
    </div>
  </div>
  <div className="in before"></div>
  <div className="in after"></div>
        </React.Fragment>
     )
}
 
export default MobileMenu;