import React from 'react';
import './index.css'
import PdfPic from '../../images/file.png';
import BeautyImg from '../../images/body_bg.jpg';
import HeadImg from '../../images/t_news.png';

class NewsEvents extends React.Component {
    
    styles={
        backgroundImage:`url(${BeautyImg})`,
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover',
        backgroundPosition:'center'
    }

    styles2={
        backgroundImage:`url(${HeadImg})`,
        backgroundRepeat:'no-repeat',
        backgroundSize:'120%',
        backgroundPosition:'center'
    }

    render() { 

      
        return <div className='beautyBg' style={this.styles}>
<div className="newsEvents">
       <div className="headNews" style={this.styles2}>
         <h2>News and Events</h2>
       </div>
       <div className="titles">
           <div className="Ftype">
               File Type
           </div>
           <div className="Title">
               Title
           </div>
           <div className="dateP">
               Date Posted
           </div>
       </div>
  {/* single post box */}
       <div className="singlePostBox">
            <div className="doc">
                <img src={PdfPic} alt="fileType figure"/>
            </div>
            <div className="postmainTitle">
             we updated our school Calender please download to read.
            </div>
            <div className="postedDDate">
                4.10.2021
            </div>
       </div>
       {/* ends of single post box */}
     
      
 <div className="paginationNews">
    <div className="buttonPage">
         Prev
    </div>
    <div className="buttonPage">
        1
    </div>
       <div className="buttonPage">
           Next
       </div>
 </div>
 </div>

        </div>;
    }
}
 
export default NewsEvents;