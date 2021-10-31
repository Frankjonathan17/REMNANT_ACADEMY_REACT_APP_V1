import React from 'react';
// import {Link} from 'react-router-dom'
// import AllStudntsImg from '../../images/all-students.jpg';
// import MiddleClassIMG from '../../images/middleclass.jpg';
// import HighClassImg from '../../images/highclas.png';
// import BabyClassImg from '../../images/babyclass.jpg';
import HeadImg from '../../images/all-students.jpg';
import BodyImg from '../../images/body_bg.jpg';
import './index.css'

class Gallery extends React.Component {
    componentDidMount()
    {
        setTimeout(() => {
            window.scrollTo(0,0)
           }, 5);
    }
    render() { 
        return <div className='beauty Gallery' style={{backgroundImage:`url(${BodyImg})`}}>
            <div className="GalleryInner">
       <div className="GHead" style={{backgroundImage:`url(${HeadImg})`}}>
           <h2>PHOTO GALLERY</h2>
       </div>
      <div className="insideGallery">
    
      </div>
    
   </div>




        </div>;
    }
}
 
export default Gallery;