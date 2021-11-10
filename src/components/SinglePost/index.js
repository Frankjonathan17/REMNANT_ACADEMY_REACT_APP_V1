import React from 'react'
import './index.css'
import BeautyImg from '../../images/body_bg.jpg';
import HeadImg from '../../images/t_news.png';
import axios from 'axios'
import ReactLoading from 'react-loading'
import {Link} from 'react-router-dom'

import  Word from '../../assets/microsoftWord.png';
import  Exel from '../../assets/microsoftExel.jpg';
import  Point from '../../assets/microsoftPowerpoint.png';
import  Txt from '../../assets/txt.jpg';
import  Pdf from '../../assets/pdf.jpg';

class SinglePost extends React.Component {
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
        backgroundPosition:'center',
        height:'8rem',
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    }

    state={
        post:[],
        isLoading:false
    }

     FetchNews = async (_id)=>{

        try{
         this.setState({isLoading:true})
         const news = await axios.post('/api/get/single/news',{_id})
        //  console.log(news.data.result)
         if(news.data.result===null|| news.data.result===undefined) {
            this.setState({isLoading:false})
            return
         }
         else{
            this.setState({post:news.data.result,isLoading:false})
         }
      
        }
        catch(er){
            console.error('HII ID HAIPO',er)
            this.setState({isLoading:false,post:[]})
        } 
         
     }

     
     chooseImage=()=>{
    
   
        if(this.state.post.document.contentType==='application/pdf'){
            return Pdf;
        }
        else if(this.state.post.document.contentType==='application/vnd.openxmlformats-officedocument.wordprocessingml.document'|| this.state.post.document.contentType==='application/msword'){
            return Word;
        }
        else if( this.state.post.document.contentType==='application/vnd.ms-excel'){
            return Exel;
        }
        else if(this.state.post.document.contentType==='application/vnd.openxmlformats-officedocument.presentationml.presentation'){
            return Point;
        }
        else{
             return Txt;
        }


       }

       
    buildPicture=(dat)=>{
        let binary = `data:image/png;base64,`+ new Buffer(dat.photo.data).toString('base64')
 return  binary;

}

    
buildDocument=(dat)=>{
    let link = `data:${dat.document.contentType};base64,${new Buffer(dat.document.data).toString('base64')}`
 return  link;

}


    componentDidMount() {
        window.scrollTo(0,0)
            if(this.props.match.params.postid){
               this.FetchNews(this.props.match.params.postid)

            }
             
            return false
    }
    render() { 
        
      const selected=this.state.post
    
        return <div className='SINGLE-POST beauty'  style={this.styles}>
                           <div className="headNews" style={this.styles2}>
         <h2>News and Events</h2>
       </div>

        <div className='singleNcontainer'>

        {this.state.isLoading&& this.state.post.length ===0 ? <div  style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}> 
                         
                         <ReactLoading type={'spin'} color={'var(--blue)'} height={'5rem'} width={'5rem'} />
                           <br/>
                         <div>Fetching Post info...</div>
           </div> :''}

{this.state.isLoading===false && this.state.post.length===0?<div className='no-news'><h3 style={{padding:'1.5rem'}}>post is deleted or not availablea at the moment</h3></div>:''}
                     <div className='TITLE-'>
                       <h2>
                       {this.state.post.title}
                           
                           </h2> 
                     </div>
                     <div className='bodyd'>
                         <p>    {this.state.post.body}</p>
                     </div>
                    {this.state.isLoading===false&& <div className='FIlatat'>
                         <h4>FILES ATTACHED</h4>
                         <br/>
                         <div className='ATTACH'>
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
                  <br/>
                  <br/>
                     <span>Posted on:  {new Date(selected.date).toLocaleDateString()}</span>
               </div>:  <div className='no-media-post'>
                        {this.state.isLoading===false&&   <h4 style={{color:'var(--red)'}} >No Document or Picture  attached!</h4>}
                       </div>}
                       
                         </div>
                     </div>}
                    <div>
                        <br/>
                        <br/>           
            <Link style={{padding:'.8rem 1.2rem',background:'pink',color:'var(--red)'}} to='/news-events'><strong><u> &lt;&lt; Go back</u></strong> </Link>
                    </div>
        </div>

        </div>;
    }
}
 
export default SinglePost;