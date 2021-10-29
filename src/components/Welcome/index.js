import React from 'react';
import {Link} from 'react-router-dom'
import HeadMasterImg from '../../images/headmaster.jpg';
import BodyBlueImg from '../../images/footer_bg.jpg'
import BodyImg from '../../images/body_bg.jpg';
import './index.css'

class Welcome extends React.Component {





    render() { 
        return <div>
  <div className="welcome"  style={{backgroundImage:`url(${BodyImg})`}}>
    <div className="welcomeInner">
       <div className="welcomeTitle"  style={{backgroundImage:`url(${BodyBlueImg})`}} >
           <div className="wHead">
               <h3> HEADMASTER'S WELCOME MESSAGE </h3>
            </div>
            <div className="messageBox">
               <div className="top">
                <div className="picture">
                    <img title="HeadMaster" src={HeadMasterImg} alt="headmaster"/>
                </div>
                <div className="text">
                    <h4>Sir. John</h4>
                </div>
               </div>
               <div className="bottom">
                   <p>Lead and Headmaster</p>
                   <div className="allTexts">
                         <b className="rededWelcome"> WELCOME TO STUDY AT REMNANT ACADEMY SCHOOL.</b>

                   <p> “<b>Remnant academy</b>, is a pre & primary school located at Dar es salaam in
                    Tanzania lives its vision of being a best school in teaching,
                    researching and community outreach as key areas for
                    maintaining provision of quality education
                    for local and global economy and  committed to
                    providing academic and social excellence in 
                   a positive and supportive culture to produce 
                   productive citizens prepared for a global society. </p>
                    
                   <p> We believe that with the proper use of our school quality
                    assurance policies and tools the success of our school
                    will depend on the enthusiasm of teachers and students
                    to teach and learn to make sure that the graduates from
                   Remnant come out with the best skills and competencies for 
                   their local and global employment markets.
                   For more information, I would urge you to visit us to 
                   discover who we are and make Remnant your favourate choice
                    of study and professional growth.</p>


                    <h4 className="titless">MISSION AND VISION</h4>
                    <p>mission and vision is here</p>

                    <h4 className="titless">SCHOOL HISTORY</h4>
                    <p>school History is here</p>

                    <h4 className="titless">SCHOOL PERFOMANCE</h4>
                    <p>Remnant is  raising very fast on top of others school within and 
                        outside of Dar-es-salaam in academics perfomance every year.
                         <Link to="/perfomance">See our national exams results</Link>
                    </p>
                    
                   <p>
                    If you would like your child to be a part of this learning
                    community, please <Link to="/admission-procedures"> Click here to apply</Link>.
                   </p>
                    
                 <p>

                 </p>
                </div>
               </div>
            </div>
            
       </div>
    </div>
   </div>



        </div>;
    }
}
 
export default Welcome;