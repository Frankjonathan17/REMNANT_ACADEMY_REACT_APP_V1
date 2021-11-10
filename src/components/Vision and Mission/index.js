import React from 'react';
import HeadImg from '../../images/t_news.png';
import BodyImg from '../../images/body_bg.jpg';
import miImg from '../../images/mission-and-visiona (1).jpg'
import './index.css'


class VisionMission extends React.Component {
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
                    <h2>MISSION &amp; VISION</h2>
                </div>
                <div className='philosophyHead'>
<div className='m-pic'>
    <img src={miImg}  alt='mission and vision pictr'/>
</div>
                    <div className='SINGLEEE'>
                    <h2>OUR MISSION</h2>
                      <br/>
                      <p> Mission is  <strong>10 to 1</strong> with the strong 
                          meaning to take students 
                          to the top level of quality Education
                          
                         </p>
  
                    </div>

                    <div className='SINGLEEE'>
                    <h2>OUR VISION</h2>
                      <br/>
                      <p>Vision is to equip our children with knowledge,
                           information and training which keeps them ahead 
                           of their counterparts not only in Tanzania but also globally.
Education at Remnant School is a spontaneous process 
which enables us to conceptualize and execute our perception in true spirit.
  For us education is a holistic outcome and we strive hard to provide all 
opportunities to our pupils to become a complete human being.
                          
                         </p>
  
                    </div>


                                 </div>
            </div>

        </div>;
    }
}
 
export default VisionMission;