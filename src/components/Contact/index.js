import React from 'react';
import {ReactComponent as FbSvg }from '../../assets/Fb.svg'
import {ReactComponent as WhatsaapSvg }from '../../assets/Whatsaap.svg'
import {ReactComponent as InstaSvg }from '../../assets/Insta.svg'
import {ReactComponent as YoutubeSvg }from '../../assets/Youtube.svg'
import BodyImg from '../../images/body_bg.jpg';
import './index.css';

class Contact extends React.Component {
    render() { 
        return <div>
<div className="contact" style={{backgroundImage:`url(${BodyImg})`}}>
       <h4>CONTACT US</h4>
    <div className="contactForm">
        <h4>FOR MORE INFO FILL AND SUBMIT FORM </h4>
         <form>
            <div className="row">
                <label htmlFor="fistname">*First Name</label>
                <input type="text" name="fistname"/>
            </div>
            <div className="row">
                <label htmlFor="lastname">*Last Name</label>
                <input type="text" name="lastname"/>
            </div>
            <div className="row">
                <label htmlFor="phone">*Phone Number</label>
                <input type="number" name="phone"/>
            </div>
            <div className="row">
                <label htmlFor="email">*Email Address</label>
                <input type="email" name="email"/>
            </div>
            <div className="row">
                <label htmlFor="message">*Message</label>
                <input type="text" name="message"/>
            </div>

            <div className="row btn">
               <button type="submit">
                   Submit 
               </button>
            </div>

         </form>
    </div>

    <div className="contactInfos">
        <div className="phyicalAddress cont">
            <h4>PHYSICAL ADDRESS</h4>
            <div className="addr">
           <div> Remnant Academy pre & primary school ,
            </div>
           <div>P.O.Box 3149,</div>

             <div>Dar-es-salaam,</div>

             <div>Tanzania</div>
        </div>
        </div>
        <div className="General cont">
            <h4>SCHOOL CONTACTS</h4>
            <div className="PhonesInside">
            <div> Head Master:
              <a href="tel:+255625695113">0625695113</a></div>

           <div>Admission:
         <a href="tel:+255754423098">0754423098</a></div>
                   
            <div>
                Staff Number:
            <a href="tel:+255628007876">0628007876</a>
            </div>
            <div>
            Email Address:
             <a href="mailto:remnantacademy2002@gmail.com">remnantacademy2002@gmail.com</a>
            </div>
 
            </div>
        </div>
        <div className="Socials cont">
            <h4>SOCIAL MEDIAS</h4>
            <div className="socialsRemnant">
                <div className="soc facebook">
                    <span>
                     <FbSvg/>
                    </span>
                    <span>facebook</span>
                </div>
                <div className="soc instagram">
                    <span>
                       <InstaSvg/>
                       </span>
                    <span>instagram</span>
                </div>
                <div className="soc youtube">
                <span>
                    <YoutubeSvg/>
                </span>
                    <span>youtube</span>
                </div>
                <div className="soc whatsaap">
                <span>
                <WhatsaapSvg/>
                </span>
                    <span>whatsaap</span>
                </div>
               
            </div>
        </div>
    </div>


       <div className="mapLoacation">
           <div className="mapHead">
               <h4>TRACE OUR LOCATION</h4>
           </div>
       </div>

   </div>
        </div>;
    }
}
 
export default Contact;