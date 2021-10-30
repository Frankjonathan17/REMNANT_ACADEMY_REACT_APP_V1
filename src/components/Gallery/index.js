import React from 'react';
import {Link} from 'react-router-dom'
import AllStudntsImg from '../../images/all-students.jpg';
import MiddleClassIMG from '../../images/middleclass.jpg';
import HighClassImg from '../../images/highclas.png';
import BabyClassImg from '../../images/babyclass.jpg';
import HeadImg from '../../images/t_news.png';
import BodyImg from '../../images/body_bg.jpg';
import './index.css'

class Gallery extends React.Component {
    componentDidMount()
    {
        setTimeout(() => {
            window.scrollTo(0,20)
           }, 5);
    }
    render() { 
        return <div className='beauty' style={{backgroundImage:`url(${BodyImg})`}}>
            <div className="joiningClasses">
       <div className="joiningHead" style={{backgroundImage:`url(${HeadImg})`}}>
           <span>Joining Classes</span>
       </div>
      <div className="insideJoin">
         <div className="flexxed">
            <div className="joinBox">
                <div className="pic">
                    <img src={BabyClassImg} alt="babyclass"/>
                </div>
                <div className="maelezo">
                    <h4>BABY CLASS</h4>
                    <p>
                        we enquire baby classes
                    </p>
                   <Link to="/baby-class">Request Joining</Link>

                </div>
            </div>
    
            <div className="joinBox">
              <div className="pic">
                  <img src={MiddleClassIMG} alt="babyclass"/>
              </div>
              <div className="maelezo">
                  <h4>MIDDLE CLASS</h4>
                  <p>
                      we enquire baby classes
                  </p>
                  <Link to="/baby-class">Request Joining</Link>
              </div>
          </div>
           <div className="flexxed">
        
         </div>
        <div className="joinBox">
            <div className="pic">
                <img src={HighClassImg} alt="babyclass"/>
            </div>
            <div className="maelezo">
                <h4>STANDARD 1 - 4 CLASS</h4>
                <p>
                    we enquire baby classes
                </p>
               <Link to="/baby-class">Request Joining</Link>

            </div>
        </div>
     
        <div className="joinBox">
            <div className="pic">
                <img src={AllStudntsImg} alt="babyclass"/>
            </div>
            <div className="maelezo">
                <h4>STANDARD 1 - 7 CLASS</h4>
                <p>
                    we enquire baby classes
                </p>
               <Link to="/baby-class">Request Joining</Link>

            </div>
        </div>

         </div>
      </div>
    
   </div>




        </div>;
    }
}
 
export default Gallery;