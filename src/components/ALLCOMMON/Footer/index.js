import React from 'react';
import { Link } from 'react-router-dom';
import WelcomeApplyNow from '../welcome Apply Now Box';
const Footer = () => {
    return ( 
        <footer className="footer">
       <div className="apply-cont">
     <WelcomeApplyNow/>
       </div>
       <div className="insider">
              <div className="bgr"></div>
          
              <div className="flex" id="firstFlex">
                <div className="footerBox">
                    <h2>ADDRESS</h2>
                       <div className="address">
                           <p id="increase">Remnant Academy</p>
                           <p>P.O.Box 3149,</p>
                           <p> Dar-es-salaam,</p>
                           <p>Tanzania</p>
                  
                       </div>
                        </div>
                        <div className="footerBox">
                          <h2>CONTACTS</h2>
                         <p>Head Master:<br/>   <a href="tel:+225625695113">0625695113</a> </p>
                         <p>Admission: <br/>  <a href="tel:+255754423098">0754423098</a>  </p>
                         <p>Staff Number: <br/> <a href="tel:+255628007876">0628007876</a></p>
                    
                     
                      </div> 
              </div>

             <div className="flex" id="secondFlex">
                <div className="footerBox">
                    <h2>SITE LINKS</h2>
                    <p> <Link to='/'>Home</Link> </p>
                    <p><Link to='/admission'>Admission</Link> </p>
                    <p><Link to='/academics'>Academics</Link> </p>
                    <p><Link to='/gallery'>Gallery</Link> </p>
                    <p><Link to='/online-service'>Online services</Link> </p>
                    <p><Link to='/application-form'>Application form</Link> </p>
                    <p><Link to='/news-events'>News and Events</Link> </p>
                  </div>
                  <div className="footerBox">
                   <h2>USEFUL SITES</h2>
                   <p> <a href='#'>Necta</a> </p>
                   <p><a href='#'>TCU</a> </p>
                   <p><a href='#'>Ministry of Education</a> </p>
                   <p><a href='#'>Veta</a> </p>
                  </div>
             </div>

       </div>
    <div className="lastDiv">
<div>
    <div className="backTop" style={{cursor:'pointer'}}>
     <strong>   Back Top &And;</strong>
    </div>
</div>
<div>
    <span>copyright &copy;remant academy school 2021-2022. All rights Reserved</span>
</div>
<div>
    <span className="devDesigners">
  <span className="block">Website by Frank and Ezron under  </span> 
   <a href="https://leendr0.netlify.app" target="_blank" rel="noreferrer"><strong> Leendro.inc</strong></a>
    </span>
</div>
    </div>
</footer>
     );
}
 
export default Footer;