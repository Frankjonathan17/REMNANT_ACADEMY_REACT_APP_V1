import React from 'react';
import HeadImg from '../../images/t_news.png';
import BodyImg from '../../images/body_bg.jpg';
import {Link} from 'react-router-dom'
import './index.css'


class Visit extends React.Component {
    componentDidMount()
    {
        setTimeout(() => {
            window.scrollTo(0,0)
           }, 0);
    }
    render() { 
        return <div className='beauty philosophyAndValue' style={{backgroundImage:`url(${BodyImg})`}}>
            
            <div className='phInside'>
                <div className='phHead beauty'  style={{backgroundImage:`url(${HeadImg})`}}>
                    <h2>VISIT</h2>
                </div>
                <div className='philosophyHead'>

                    <div className='SINGLEEE INNERVISION'>
                    <h2>WE'RE WARMLY WELCOME VISITORS</h2>
                      <br/>
                      <p>
                          <div className='book-avisit'>
                              <h1>Book a visit</h1>
                               <p style={{color:'var(--red)'}}>If you’re Living in Dar-es-salaam or near it , the best way to find out if
                                    our school is right for your child is to come and visit.</p>
                          </div>
                          <div className='list-to-do'>
                              <h4>During your personalised appointment, you can:</h4>
                               <ul>
                                   <li>tour the school</li>
                                   <li>see classes of your choice in action </li>
                                   <li>meet Admissions staff, subject-specific teachers and our Principal</li>
                               </ul>

                          </div>

                          <div className='list-to-do'>
                              <h4>You can also ask any questions you may have about Remnant  spans as:</h4>
                               <ul>
                                   <li>Baby classes, middle and the upper classes Years Programme</li>
                                   <li>see classes of your choice in action </li>
                                   <li>meet Admissions staff, subject-specific teachers and our Principal</li>
                               </ul>

                          </div>


                          <div className='list-to-do'>
        
                             <p> To arrange a visit, simply fill in the form and our Admissions manager
                                  will be in touch. </p>
                                  <Link style={{color:'var(--red)'}} to='/contact'><u><strong>fill the form and send here.</strong></u></Link>
                          </div>
                         </p>
                        
                        <div className='visitMap'>
                        <iframe title='our map location is here' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.1236557999437!2d38.954619414263554!3d-6.754771467927629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c69312620fe6b%3A0x54d2ca9a37969670!2sRemnant%20Academy%20Pre%26Primary%20School!5e0!3m2!1sen!2stz!4v1636488006272!5m2!1sen!2stz" width="600" height="450" allowfullscreen="" loading="lazy"></iframe>
                        </div>
                    
                    </div>


                                 </div>
            </div>

        </div>;
    }
}
 
export default Visit;