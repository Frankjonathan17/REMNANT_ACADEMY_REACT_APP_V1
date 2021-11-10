import React from 'react';
import HeadImg from '../../images/t_news.png';
import BodyImg from '../../images/body_bg.jpg';
import './index.css'


class PhilosophyAndValue extends React.Component {
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
                    <h2>PHILOSOPHY &amp; VALUES</h2>
                </div>
                <div className='philosophyHead'>

                    <div className='SINGLEEE'>
                    <h2>School Philosophy</h2>
                      <br/>
                      <p> The philosophy of education of <strong> Remnant School </strong> 
                          is one which provides the very best teaching and 
                          learning environment possible. One which is caring
                           and safe; developing the qualities of self-esteem, 
                           creative and critical thinking, respect for self and
                            others and positive attitudes toward school and learning,
                             it is the belief of our school that we should foster, in our
                              students pride, self-confidence, and a love of learning, while 
                              they develop physically, mentally, emotionally and socially into
                               mature, responsible citizens. We are committed to the philosophy 
                               that the child must be placed at the centre of learning, actively
                                acquiring skills needed to think clearly, communicate effectively 
                          to make sound decisions and to discriminate among values.</p>
  
                    </div>

                    <div className='SINGLEEE'>
                    <h2>Our Value</h2>
                      <br/>
                      <p> 
                          <ul>
                              <li> Love </li>
                              <li> Respect</li>
                              <li>Humility</li>
                              <li> Kindness </li>

                       
                          </ul>
                          </p>
  
                    </div>

                    <div className='SINGLEEE'>
                    <h2>Remnant School Objectives 
</h2>
                      <br/>
                      <p> 
                          <ul>
                              <li> Team Concept </li>
                              <li> Safety </li>
                              <li> Positive Environment In Which To Learn and Grow</li>
                              <li>Develop Self – Esteem </li>
                              <li> Equality For All</li>
                               <li>Health and Fitness </li>
                               <li>Independent, Creative Thinkers </li>
                               <li> Communicative Skills</li>
                               <li> Personal Values / Social Skills</li>
                               <li>Technology Literacy </li>
                               <li> Support and Input of Parents</li>
                          </ul>
                          </p>
  
                    </div>

                    <div className='SINGLEEE'>
                    <h2>Statement of Beliefs</h2>
                      <br/>
                      <p> 
                          <ul>
                              <li> We believe that every child had the right to receive a quality education.</li>
                              <li>We believe that education is a lifelong process attained through a variety of experiences. </li>
                              <li>We believe that we should foster a love for learning and the importance of pride in our very best efforts.</li>
                              <li>We believe that all children have skills and should be challenged to achieve to their maximum potential.</li>
                              <li> We believe that we must teach to the individual needs of all children.</li>
                               <li>We believe that high expectations produce higher achievement. </li>
                               <li>We believe that active learning should promote creative thinking skills </li>
                               <li>We believe that everyone should have the opportunity to work and learn together in a positive environment.</li>
                               <li>We believe that our school should provide a friendly atmosphere where meaningful learning occurs.</li>
                               <li>We believe that we must help children develop responsibility for their behavior and learning.</li>
                               <li>We believe that children need to be treated with patience, consistency and fairness</li>
                               <li> We believe that regular parental support and involvement are essential to the success of our school</li>
                               <li>We believe that the quality of education is improved if staff, parents and children respect each other. </li>
                               <li> We believe that it is the parents’ responsibility to send children to school clean, rested well-fed and mentally ready to participate in the learning process.</li>


                                  </ul>
                          </p>
  
                    </div>
                                 </div>
            </div>

        </div>;
    }
}
 
export default PhilosophyAndValue;