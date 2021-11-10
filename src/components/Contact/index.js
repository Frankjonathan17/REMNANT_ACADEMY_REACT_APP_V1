import React from 'react';
import {ReactComponent as FbSvg }from '../../assets/Fb.svg'
import {ReactComponent as WhatsaapSvg }from '../../assets/Whatsaap.svg'
import {ReactComponent as InstaSvg }from '../../assets/Insta.svg'
import {ReactComponent as YoutubeSvg }from '../../assets/Youtube.svg'
import BodyImg from '../../images/body_bg.jpg';
import './index.css';

class Contact extends React.Component {

    componentDidMount() {
        window.scrollTo(0,0)
    }


    render() { 
        return <div>
<div className="contact" style={{backgroundImage:`url(${BodyImg})`}}>
       <h4>CONTACT US</h4>
    <div className="contactForm">
        <h4>FOR MORE INFO FILL AND SUBMIT FORM </h4>
   
         <form action="https://getform.io/f/e2104e78-898a-44c1-94c4-4d25421e50a8" method="POST">
            <div className="row">
                <label htmlFor="fistname">*First Name</label>
                <input type="text" name="fist-name"/>
            </div>
            <div className="row">
                <label htmlFor="lastname">*Last Name</label>
                <input type="text" name="last-name"/>
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
           <div> Remnant Academy pre &amp; primary school ,
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
           <div className="mapHead" style={{flexDirection:'column'}}>
               <h4>TRACE OUR LOCATION</h4>
               <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.1236557999437!2d38.954619414263554!3d-6.754771467927629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c69312620fe6b%3A0x54d2ca9a37969670!2sRemnant%20Academy%20Pre%26Primary%20School!5e0!3m2!1sen!2stz!4v1636488006272!5m2!1sen!2stz" title='frameForMap' width="600" height="450" allowfullscreen="" loading="lazy"></iframe>
           </div>
       </div>

   </div>
        </div>;
    }
}
 
export default Contact;