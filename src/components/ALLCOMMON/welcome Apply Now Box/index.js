import React from 'react';
import {Link} from 'react-router-dom'
const WelcomeApplyNow = () => {
    return (
        <div id='tangazoFooter'className="welcomeBox flex" style={{alignItems:'center',width:'95%'}}>
        <div className="flex">  <span>Welcome ! <strong>APPLY  NOW FOR 2022/2023</strong></span></div>
        <div className="flex">
          <button><Link to="/admission-procedures">Apply &gt;&gt;</Link></button>
          <button> <Link to="/visit">Visit &gt;&gt;</Link></button>
          <button> <Link to="/contact">Contact &gt;&gt;</Link></button>
        </div>
      </div>
     );
}
 
export default WelcomeApplyNow;