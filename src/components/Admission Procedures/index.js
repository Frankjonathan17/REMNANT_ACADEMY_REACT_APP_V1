import React from 'react';
import { Link } from 'react-router-dom';
import BodyImg from '../../images/body_bg.jpg';
import HeadImg from '../../images/t_news.png';
import './index.css'

class AdmissionProcedures extends React.Component {
    render() { 
        return(
            <div className='beauty'  style={{backgroundImage:`url(${BodyImg})`}}>
            <div className="admissionProcedures">
                  <div className="admissionProcedureHead" style={{backgroundImage:`url(${HeadImg})`}}>
                    <span>Admission Procedures</span>
                  </div>
                    <h5>
                      If you would like your child to be a part of this learning
                       community, please follow the steps below.</h5>
                  <div className="procedures">
                   <div className="flexxing">
                    <div className="procedure">
                      <span className="num"> <b>1</b> </span>
                        <p>Download the Application form <Link to="/application-form">here</Link>
                         </p>
                     </div>
                     <div className="procedure">
                       <span className="num"> <b>2</b> </span>
                       <p>Complete the Application form with all applicable 
                         information.</p>
                    </div>
                   </div>
                   
                    <div className="flexxing">
                      <div className="procedure">
                        <span className="num"> <b>3</b> </span>
                        <p>Make sure you state an accurate address, 
                          phone number or email address to assure we can contact you.</p>
                      </div>
                      <div className="procedure">
                        <span className="num"> <b>4</b> </span>
                        <p>Bring the application form filled correctly at our school campus.
                          <Link to="/contact">See Physical Address and Location here</Link>  
                        </p>
                      </div>
                    </div>
                  </div>
          
          <div className="additionalInfo">
            <h5>All applications will be 
              reviewed  and you will be notified.</h5>
          
              <p><b>
                ~ Under normal circumstance these are the WORKING HOURS ~ :</b>
              </p>
              <div className="days">
                <div>Monday, 9:30am-4:15pm</div>
          
              <div>  Tues, 9:30am-4:15pm</div>
                
              <div>  Wed, 9:30am-4:15pm </div>
                
             <div>   Thurs, 9:30am-4:15pm </div>
             <div>   
              Fri, 9:30am-4:15pm</div>
              </div>
          </div>
          
    </div>
</div>
        )

    }
}
 
export default AdmissionProcedures;