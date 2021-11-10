import React from 'react';
import HeadImg from '../../images/t_news.png';
import BodyImg from '../../images/body_bg.jpg';
import {Link} from 'react-router-dom'
import './index.css'


class Opportunities extends React.Component {
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
                    <h2>Employment Opportunity</h2>
                </div>
                <div className='philosophyHead'>

                    <div className='SINGLEEE'>
                    <h2>CONTACT US FOR CAREERS</h2>
                      <br/>
                      <p style={{width:'90%',padding:'3rem 1rem'}}>
                          
                          We are welcome you at remnant if you are interested to work
                          with us in making our school the best please <Link style={{color:'var(--red)'}} to='/contact'><u><strong>fill the form and send here.</strong></u></Link>
                         </p>
  
                    </div>


                                 </div>
            </div>

        </div>;
    }
}
 
export default Opportunities;