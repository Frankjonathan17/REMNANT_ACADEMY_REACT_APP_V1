import React from 'react';
import  Word from '../../../assets/microsoftWord.png';
import  Exel from '../../../assets/microsoftExel.jpg';
import  Point from '../../../assets/microsoftPowerpoint.png';
import  Txt from '../../../assets/txt.jpg';
import  Pdf from '../../../assets/pdf.jpg';
import './single.css'
import {ReactComponent as DocSvg} from '../../../assets/Doc.svg';


class SinglePost extends React.Component {



    
    buildPicture=(dat)=>{
        let binary = `data:image/png;base64,`+ new Buffer(dat.photo.data).toString('base64')
 return  binary;

}

    
buildDocument=(dat)=>{
    let link = `data:${dat.document.contentType};base64,${new Buffer(dat.document.data).toString('base64')}`
 return  link;

}



       chooseImage=()=>{
    
   
        if(this.props.selected.document.contentType==='application/pdf'){
            return Pdf;
        }
        else if(this.props.selected.document.contentType==='application/vnd.openxmlformats-officedocument.wordprocessingml.document'|| this.props.selected.document.contentType==='application/msword'){
            return Word;
        }
        else if( this.props.selected.document.contentType==='application/vnd.ms-excel'){
            return Exel;
        }
        else if(this.props.selected.document.contentType==='application/vnd.openxmlformats-officedocument.presentationml.presentation'){
            return Point;
        }
        else{
             return Txt;
        }
       }
    render() { 
        const {selected}= this.props
        return <div className='singlePostS'>
           
       <div className='container-singleP'>
          <div className='M-TITLE'>
          <h2><span><DocSvg/></span> <span>NEWS / EVENT</span></h2> 
          </div>
           <br/>
            <main className='mainp'>
               
             <h3>{selected.title}</h3>

              <p> {selected.body}
                   </p>
                   <br/>
                   <div className='FILEORPIC'>
                    
                       <h3>File(s) attached</h3>
                       <div className='DOCU'>

                       </div>
                       <div className='IMAGE'>

                       </div>
 


               { selected.document || selected.photo ?<div>
                  
               
                  {selected.document?  <div className='document-attached'>
               
                  <div className='typePics'>
                      <img src={this.chooseImage()} alt='file-type'/>
                  </div>
                <div> <strong> <a  style={{color:'var(--red)'}}href={this.buildDocument(selected)} 
                download={selected.document.originalFilename}>
                     <span><u>Click to Download</u></span> 
                    {` ${ selected.document.originalFilename}`}</a></strong></div>
                  <br/>
                  </div>:''}
                      
                  {selected.photo?<div className='image-attached'>
                      <img src={this.buildPicture(selected)}  alt='attached Pictr'/>
                      <br/>
                     <div>
                     <a style={{color:'var(--red)',fontWeight:'bold'}}  download={selected.photo.originalFilename}
                      href={this.buildPicture(selected)}> <u>Click to download Picture </u></a>
                     </div>
                  </div>:''}

               </div>:  <div className='no-media-post'>
                           <h4>No Document or Picture  attached!</h4>
                       </div>}
                       
                       <br/>
                       <div className='postedDD'>
                        <span>  posted on: {new Date(selected.date).toLocaleDateString()}</span>
                       </div>
                   </div>
            </main>
            <div
             onClick={()=>{
                 this.props.helper({
                    home:false,
                    setting:false,
                    newsEvents:true,
                    gallery:false,
                    showCreate:false,
                    singlePost:false
                 })
             }}
             className='back-to-news'>
                 Go back </div>
       </div>

        </div>;
    }
}
 
export default SinglePost;