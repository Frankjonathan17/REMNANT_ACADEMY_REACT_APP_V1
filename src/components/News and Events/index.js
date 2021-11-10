import React from 'react';
import './index.css'
import PdfPic from '../../images/file.png';
import BeautyImg from '../../images/body_bg.jpg';
import HeadImg from '../../images/t_news.png';
import axios from 'axios';
import ReactLoading from 'react-loading'
import {Link}from 'react-router-dom'
import PaginationHome from './paginationHome';
import {paginate}from '../../utils/pagenate.js'

class NewsEvents extends React.Component {

    state={
         news:[],
         loadingNews:false,
         pageSize:6,
         currentPage:1
    }

    componentDidMount(){

        this.setState({loadingNews:true})
        const FetchNews = async ()=>{

            try{
             this.setState({loadingNews:true})
             const news = await axios.post('/api/get/news')
            this.setState({news:news.data.result})
            this.setState({loadingNews:false})
         //    console.log(news)
            }
            catch(er){
                console.error(er)
                this.setState({loadingNews:false})
            } 
             
         }
         FetchNews()
     
        setTimeout(() => {
            window.scrollTo(0,0)
           }, 5);
    }
    
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

    handlePageChange=(currentPage)=>{
          this.setState({currentPage})
    }
    render() { 
        const news = paginate(this.state.news,this.state.currentPage,this.state.pageSize)
      
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
      {this.state.news.length>0?<React.Fragment>
       {news.map((n,i)=>{
           return  <Link style={{display:'block'}} to={`/single-post/${n._id}`}  key={i}>
           <div className="singlePostBox" key={i}>
           <div className="doc">
               <img src={PdfPic} alt="fileType figure"/>
           </div>
           <div className="postmainTitle">
           {n.title}
           </div>
           <div className="postedDDate">
           {new Date(n.date).toLocaleDateString()}
           </div>
      </div>
           </Link>
       })}
      </React.Fragment>:''}
       {/* ends of single post box */}
       <div>  {this.state.loadingNews&& <div className='newsLoader'>
             <ReactLoading type={'spin'} color={'var(--blue)'} height={'5rem'} width={'5rem'} />
                 </div>}</div>
      {this.state.loadingNews===false && this.state.news.length===0?<div className='no-news'><h3>no news posted!</h3></div>:''}
{
    this.state.loadingNews===false && this.state.news.length!==0? <div className="paginationNews">
    <PaginationHome 
      currentPage={this.state.currentPage}
      itemsCount={this.state.news.length}
      pageSize={this.state.pageSize}
      onPageChange={this.handlePageChange}
    />
 </div>:""
}
 </div>

        </div>;
    }
}
 
export default NewsEvents;