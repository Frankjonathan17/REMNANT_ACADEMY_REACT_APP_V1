import React from 'react';
import {ReactComponent as Fb} from '../../../assets/Fb.svg'
import {ReactComponent as Mail} from '../../../assets/Mail.svg'
import {ReactComponent as Insta} from '../../../assets/Insta.svg'
import {ReactComponent as Tube} from '../../../assets/Youtube.svg'
import {ReactComponent as Whatsaap} from '../../../assets/Whatsaap.svg'
import {ReactComponent as Phone} from '../../../assets/Call.svg'
import {Link} from 'react-router-dom'

const InfoHeader = () => {
    return (  
         <React.Fragment>
             <div className="infoHeader">
              <div className="email">
                <span className="flex  justifyBetween">
                    <span>
                     <Mail/>
                    </span>
                  <span>
                    <a href="mailto:remnantacademy2002@gmail.com">remnantacademy2002@gmail.com</a>
                  </span>
                </span>
              </div>
              <div className="socials">
                <span className="link fb">
                    <Link to="#">
                     <Fb/>
                    </Link>
                </span>
                <span className="link ig">
                  <Link to="#">
                     <Insta/>
                  </Link>
              </span>
              <span className="link whatsaap">
                  <Link to="#">
                     <Whatsaap/>
                  </Link>
              </span>
              <span className="link youtube">
                  <Link to="#">
                     <Tube/>
                  </Link>
              </span>
              </div>
              <div className="phone">
                <span className="call-link">
                    <a href="tel:+255628007876">+255628007876</a>
                </span>
                <span>
                 <Phone/>
                </span>
              </div>
           </div>
         </React.Fragment>
    );
}
 
export default InfoHeader;