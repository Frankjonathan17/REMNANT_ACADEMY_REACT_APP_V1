import React from 'react'
import './index.css'
import {ReactComponent as DropSvg} from '../../../assets/Drop.svg';
import {ReactComponent as EditSvg} from '../../../assets/Edit.svg';
import {ReactComponent as TrashSvg} from '../../../assets/Trash.svg';
import {ReactComponent as PlusSvg} from '../../../assets/Plus.svg';
import {ReactComponent as CancelSvg} from '../../../assets/cancel.svg';
import PdfImg from '../../../images/file.png'
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import _ from 'lodash'
import ReactLoading from 'react-loading';
import Pagination from './Pagination';
import {paginate}from '../../../utils/pagenate.js'
import Sort from './Sort';

class NewsEventAdmin extends React.Component {


    state={
        loadingNews:false,
        pageSize:6,
        currentPage:1,
        news:[],
        title:'',
        body:'',
        openUpdate:false,
        updateId:'',
        promp:false,
        answer:false,
        deleteId:'',
        currentSort:'asc',
        sortRule:{order:'date',path:'title'},
        focused:false,
        searchWord:""
    }

          
    info=(type,message,minutes)=>{
        toast[type](message, {
            position: "top-center",
            autoClose: [minutes],
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }

  handlePageChange=(page)=>{
        this.setState({currentPage:page})
  }


    populateUpdate=(title,body,_id)=>{

        console.log('title ',title)
        console.log('body',body)
        this.setState({openUpdate:true,title,body,updateId:_id})
      this.props.helper({darkBG:true});    
                      
    }




    updateNews=async()=>{
     
        console.log('trying to update this id: ',this.state.updateId)
          
        if(this.state.title.length<=3){
            this.setState({updateError:'Title required more than 3 characters'})
            window.scrollTo(0,0)
               return;
         }
        else{
             
        try{
             this.setState({ openUpdate:false })
             this.props.helper({waitLoader:true, darkBG:false})
            let obj = {title:this.state.title,_id:this.state.updateId,body:this.state.body}
            const news = await axios.post('/api/update/news',obj)
        this.FetchNews()
        this.info('success','Updated Successfully!',3000)
        this.props.helper({
            waitLoader:false, darkBG:false
            })
        //    this.setState({news:news.data})
              console.log(news)
        //    console.log(news)
           }
           catch(er){
               console.error(er)
               this.info('error','Failed to Update!',3000)
               this.props.helper({
                darkBG:false
                })
           } 
        }
       
    }


     FetchNews = async ()=>{
        try{
            this.setState({news:[]})
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

     handleSearch=(e)=>{
        this.setState({searchWord:e.target.value})
     }
     
    //  focusIn=()=>{
    //    console.log('on Focus Seach')
    //    this.setState({focused:true})
    //  }


    componentDidMount() {
        this.setState({loadingNews:true})
       
         this.FetchNews()
       
    }

    deleteNews=async()=>{
        let answer = this.state.answer;

    if(this.state.deleteId==='')return
        if(answer){
            this.props.helper({waitLoader:true,promp:false,darkBG:false})
               
            try{
                  await axios.post('/api/delete/news',{_id:this.state.deleteId})
                    this.FetchNews()
                    this.props.helper({waitLoader:false})
                    this.info('success','Deleted successfully!',3000)

                }catch(er){
                    console.log('error during deleting news :',er)
                    this.info('error','Error failed to delete news!',3000)
                    this.props.helper({waitLoader:false})
                }

    

        } 
    }


    handleNewsChange =(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }

    handleSort=(sortOrder,path,otherOrder)=>{

        const giveOrder=()=>{
            return otherOrder===''?sortOrder:otherOrder
        }

        this.setState({currentSort:sortOrder,sortRule:{path:path,order:giveOrder()}})
        
    }
    render() { 
        const {searchWord}=this.state
        let Allnews =this.state.news
        
        if(searchWord){
            Allnews = this.state.news.filter(n=>n.title.toLowerCase().startsWith(searchWord.toLocaleLowerCase()))
        }

 let sorted = _.orderBy(Allnews,[this.state.sortRule.path],[this.state.sortRule.order])
//  console.log(sorted)
 const news = paginate(sorted,this.state.currentPage,this.state.pageSize)

        return <div className='newsEventAdmin'>


            {this.state.promp && <div className='PROMPT'>
   <h3>ARE YOU SURE?</h3>
   <div>
   <button className='yes'onClick={()=>{
       
       this.setState({answer:true,promp:false})
       this.props.helper({darkBG:false,waitLoader:true})
     setTimeout(() => {
        this.deleteNews()
     }, 200);
   }}>Yes</button> 
   <button className='no' onClick={()=>{
  this.setState({answer:false,promp:false})
  this.props.helper({darkBG:false,waitLoader:false})
   }} >No</button>
   </div>
</div>}
            
               <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            {this.state.openUpdate && <div className='updatePostContainer'>
     <div className='cancel-update'onClick={()=>{

         this.setState({openUpdate:false})
         this.props.helper({darkBG:false})
         }} >
         <CancelSvg/>
     </div>
          <h2>UPDATE POST</h2>
          <div className='updatePostInside'>

           <form onSubmit={(e)=>e.preventDefault()}>
                    <div>
           <div className='lable'>Title</div>
                  <input placeholder='Enter Main Post Title'
                   value={this.state.title} onChange={this.handleNewsChange} type='text' name='title' placeholde='Enter title'/>
                           </div>
                           <div className='createTitle'>
                               <div className='lable'>Body</div>
                               <input className='inputBody'
                                 placeholder='Enter Extra Article (optional)' 
                                 value={this.state.body} type='text' 
                                 name='body' onChange={this.handleNewsChange} 
                                 placeholde='Enter explanation if needed'/>
                           </div>
                           <div className='createTitle'>
                               <button onClick={this.updateNews}>SAVE CHANGES</button>
                           </div>
           </form>

          </div>
</div>
}
          <div className='newsEventsAdminInside'>
              <div className='headAdminNE'>
              <h3>All News and events</h3>
              <div className='searchNews'>
                  <input type='search'
                  onChange={this.handleSearch}
                  placeholder='search news or event'/>
              </div>
             {this.props.user.isAdmin &&  <div className='addEventNews'
              
              onClick={()=>{
                  this.props.setstateHelper({
                    successUpdateAccount:false,
                    home:false,
                    setting:false,
                    newsEvents:false,
                    user:this.props.user,
                    gallery:false,
                    showCreate:true
                })
              }}
              >
                <span><PlusSvg/></span><span>News / Event</span>
              </div>}
              </div>
              <div className='filteredNewsContainer'>
                  {/* ends of filterTitle */}
                  {/* start filterBoxes */}
               {this.state.news.length>0 && <Sort currentSort={this.state.currentSort} onSortSelect={this.handleSort}/>}

              
                      {/* table */}
                      {this.state.loadingNews&& <div className='newsLoader'>
             <ReactLoading type={'spin'} color={'var(--blue)'} height={'5rem'} width={'5rem'} />
                 </div>}

                   {news.length>0 && <React.Fragment>
                    <table>
                          <thead>
                              <tr>
                                  <th>
                                      <span>File Type</span>
                                      <span><DropSvg/></span>
                                  </th>
                                  <th>
                                    <span>
                                    Title</span>   
                                  <span><DropSvg/></span>
                                  </th>
                                  <th>
                                    <span>Posted</span>
                                  <span><DropSvg/></span>
                                  </th>
                                 {this.props.user.isAdmin && <React.Fragment>
                                    <th>
                                    <span>Update</span>
                               
                                  </th>
                                  <th>
                                      <span>Delete</span>
                                  
                                  </th>
                                     </React.Fragment>}
                                  <th style={{background:'var(--reded)'}}> 
                                      <span>Post</span>
                                  </th>
                              </tr>
                          </thead>
                          <tbody>
                           
                           {news.map((n,i)=>{
                               return  <tr
                               className='t-row' key={i}>
                               <td><img src={PdfImg} alt='doc type'/></td>
                               <td title={n.title} className='t-ttle'
                                style={{textAlign:'start'}}
                               >    {n.title.length>20?n.title.substring(0,32)+'...':n.title}</td>
                               <td>  {new Date(n.date).toLocaleDateString()}</td>
                              {this.props.user.isAdmin && <React.Fragment>
                                <td  onClick={()=>this.populateUpdate(n.title,n.body,n._id)} > <EditSvg/> </td>
                               <td onClick={()=>{
                                   this.setState({promp:true,deleteId:n._id})
                                   this.props.helper({darkBG:true})
                               }} ><TrashSvg/></td>
                                  </React.Fragment>}
                               <td 
                               onClick={()=>{

                                this.props.helper({
                                    successUpdateAccount:false,
                                    home:false,
                                    setting:false,
                                    newsEvents:false,
                                    gallery:false,
                                    showCreate:false,
                                    singlePost:true,
                                    selectedSingle:n
                                
                                })

                               }}
                               className='go-to-post'>
                                   VIEW
                               </td>
                           </tr>
                           })}
                            
                          </tbody>
                      </table>
                      <div className='mobileTableAdmin'>
                         
                         {news.map((n,i)=>{
                             return <React.Fragment key={i}>
                                   <div className='single-m-a-t' >
                         <div className='title-a-m'>
                              <div className='title-lable'><span className='he'>TITLE</span></div>
                              <div className='title-text'><p>{n.title}</p></div>
                          </div>
                          <div className='single-action'>
                              <div className='file-ty tye'>
                                <div className='filt-t'><span className='he'>FILE TYPE</span></div>
                                <div className='img-t'>  <img src={PdfImg} alt='pdfimg'/></div>
                              </div>
                              <div className='date-posted-t tye'>
                                  <div className='P-D filt-t'><span className='he'>POSTED</span></div>
                                  <div className='time-p'><p>21.4.2021</p></div>
                              </div>
                             {this.props.user.isAdmin &&  <div className='updt tye'
                               onClick={()=>this.populateUpdate(n.title,n.body,n._id)}
                              >
                              <div className='filt-t'><span className='he'>EDIT</span></div>
                                  <EditSvg/>
                              </div>}
                              {this.props.user.isAdmin && <div className='dle tye'
                               onClick={()=>{
                                this.setState({promp:true,deleteId:n._id})
                                this.props.helper({darkBG:true})
                            }} 
                              >
                              <div className='filt-t'
                             
                              ><span className='he'>DELETE</span></div>
                                  <TrashSvg/>
                              </div>}
                          </div>
                          <div  onClick={()=>{

this.props.helper({
    successUpdateAccount:false,
    home:false,
    setting:false,
    newsEvents:false,
    gallery:false,
    showCreate:false,
    singlePost:true,
    selectedSingle:n

})

}} className='click-t-view'><span>click to view</span></div>
                         </div>
                             </React.Fragment>
                         })}

                      </div>
                   </React.Fragment>}

                  </div>
                  {this.state.searchWord.length>0 && this.state.news.length>0 && this.state.loadingNews===false?<div className='no-news'><h3>No matching result</h3></div>:''}
                  <Pagination
                   currentPage={this.state.currentPage}
                   itemsCount={this.state.news.length}
                   pageSize={this.state.pageSize}
                   onPageChange={this.handlePageChange}
                   />
                  {this.state.searchWord==='' && news.length===0 && this.state.loadingNews===false?<div className='no-news'><h3>NO NEWS POSTED</h3></div>:''}
                  
              </div>
          
          </div>
    }
}
 
export default NewsEventAdmin;