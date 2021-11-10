import React from 'react';
import './styles.css';
import Logo from '../../assets/REMNANT LOGO.svg';
import {ReactComponent as Notif} from '../../assets/Notification.svg';
import {ReactComponent as UploadSvg} from '../../assets/upload.svg';
import {ReactComponent as UserSvg} from '../../assets/User.svg';
import {ReactComponent as HomeSvg} from '../../assets/Home.svg';
import {ReactComponent as DocSvg} from '../../assets/Doc.svg';
import {ReactComponent as SettingSvg} from '../../assets/Setting.svg';
import {ReactComponent as StarSvg} from '../../assets/Star.svg';
import {ReactComponent as NavSvg} from '../../assets/Menu.svg';
import {ReactComponent as FlashSvg} from '../../assets/Flash.svg';
import {ReactComponent as TrashSvg} from '../../assets/Trash.svg';
import {ReactComponent as EditSvg} from '../../assets/Edit.svg';
import Word from '../../assets/microsoftWord.png';
import Pdf from '../../assets/pdf.jpg'
import {ReactComponent as CancelSvg} from '../../assets/cancel.svg';
import ReactLoading from 'react-loading'
import {Redirect} from "react-router-dom"
import axios from 'axios';
import GalleryAdmin from './adminPages/GalleryAdmin'
import NewsEventAdmin from './adminPages/NewsEventAdmin'
import 'react-toastify/dist/ReactToastify.css';
import profile from '../../assets/defaultProfileBlue.jpg';
import { ToastContainer, toast } from 'react-toastify';

import SinglePost from './adminPages/SinglePost';
// ---------FREEZEZONE----------------
// import  studentsOne from '../../images/highclas.png';
// import  studentsThree from '../../images/all-students.jpg';
// import  studentsFour from '../../images/CropLasaba.jpg';
// import  studentsFive from '../../images/babyclass.jpg';
// import {ReactComponent as GoogleSvg} from '../../assets/GoogleLoader.svg';
// // --------------DEADZONE------------
// import BeautyImg from '../../images/body_bg.jpg';
// import PdfPic from '../../images/file.png';
// import {ReactComponent as StuSvg} from '../../assets/Students.svg';
import {ReactComponent as TeSvg} from '../../assets/Gradu.svg';
// import {ReactComponent as TaskSvg} from '../../assets/Task.svg';
// import {ReactComponent as SearchSvg} from '../../assets/Search.svg';
// import  studentsTwo from '../../images/middleclass.jpg'
// import HeadImg from '../../images/t_news.png';
// import RemnantLogo from '../../assets/REMNANT LOGO.svg';
// import axios from 'axios';
// import { ToastContainer, toast } from 'react-toastify';
// import ReactLoading from 'react-loading';
// import {Link} from 'react-router-dom'





class Admin extends React.Component {

    state={
     
        email:'',
        singlePost:false,
        redirect:false,
        lockButton:false,
        firstName:'',
        lastName:'',
        password:'',
        showCreate:false,
        body:'',
        title:'',
        photo:'',
        document:'',
        news:[],
        loadingNews:false,
        openUpdate:false,
        updateId:'',
        deleteId:'',
        answer:false,
        setting:false,
        home:true,
        gallery:false,
        newsEvents:false,
        students:false,
        teachers:false,
        updateError:{},
        user:{},
        mobileMenu:false,
        successUpdateAccount:false,
        logoutBox:false,
        waitLoader:false,
        promp:false,
        darkBG:false,
        loadingPictures:false,
        pictures:[],
        openCreateResults:false,
        selectedSingle:{},
        examYear:'2021',
        examType:'national',
        classesSelection:'classFour',
        examFile:'',
        examResults:false,
        AllExams:[],
        loadingExams:false,
        prompResultDelete:false,
        resulDelelteId:'',
        academicCalender:[],
        openAcademic:false,
        loadingAcademic:false,
        academicFile:'',
        prompCalender:false,
        ApplicationForm :[],
        loaderApplicationForm:false,
        prompForm:false,
        createAPPform:false,
        formChoosed:''
        
    
    }

    formData=new FormData()

        
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

    logout=()=>{
        this.props.changeLogin()
        this.setState({redirect:true})
        setTimeout(()=>window.location.reload(),200)
    }
     
    TengenezaUpyaNews=async()=>{
        try{
            this.setState({loadingNews:true})
            const news = await axios.post('/api/get/news')
         
            let sliced = news.data.result.slice(0,3)
           this.setState({news:sliced,loadingNews:false})
         
        //    console.log(news)
           }
           catch(er){
               console.error(er)
      
           } 
    }
    
    
    
    
    checkUpdates = async()=>{
        let user = window.localStorage.getItem('user')
          let pure = JSON.parse(user);
        try{
       let result = await axios.post('/api/login',{
         password:pure.password,
         email:pure.email})
        this.props.helper({user:result.data.profile})
  
       
       }catch(er){
           console.log('shida ya kufecth ',er)
        }
     } 

     
         
    FetchExams = async ()=>{

        try{
         this.setState({loadingExams:true})
         const exams = await axios.post('/api/get/examresult')
        this.setState({AllExams:exams.data.result})
        this.setState({loadingExams:false})
     //    console.log(news)
        }
        catch(er){
            console.error(er)
            this.setState({loadingExams:false})
        } 
         
     }     
   
     FetchCalender = async ()=>{

        try{
         this.setState({loadingAcademic:true})
         const calender = await axios.post('/api/get/calender')
        this.setState({academicCalender:calender.data.result})
        this.setState({loadingAcademic:false})
        }
        catch(er){
            console.error(er)
            this.setState({loadingAcademic:false})
        } 
         
     }     

     
     FetchAppForm = async ()=>{

        try{
         this.setState({loaderApplicationForm:true})
         const applform = await axios.post('/api/get/applicationform')
        this.setState({ApplicationForm:applform.data.result})
        this.setState({loaderApplicationForm:false})
        }
        catch(er){
            console.error(er)
            this.setState({loaderApplicationForm:false})
        } 
         
     }     



     uploadAcademic = async()=>{
         if(this.state.academicFile===''){
             
            this.info('error','No File Choosed!',3000)
            return false
         }
         else{
             this.setState({waitLoader:true,openAcademic:false})
            let form = new FormData();
            form.set('document',this.state.academicFile)
             const submitCalender=async()=>{
                      try{ let answ = await axios.post('/api/create/calender',form)
                        console.log(answ,'saved Calender')
                        this.info('success','uploaded successfully!',3000)
                        this.setState({waitLoader:false,darkBG:false})
                        this.FetchCalender()
                    }
                        catch(er){
                     console.error('error :',er)
                     this.info('error','failed to upload!',3000)
                     this.setState({waitLoader:false})

                        }            
             }
             submitCalender()
         }
     }
     
   
     uploadAppForm = async()=>{
        if(this.state.formChoosed===''){
            
           this.info('error','No File Choosed!',3000)
           return false
        } 
        else{
            this.setState({waitLoader:true,createAPPform:false})
           let form = new FormData();
           form.set('document',this.state.formChoosed)
            const submitCalender=async()=>{
                     try{ let answ = await axios.post('/api/create/applicationform',form)
                       console.log(answ,'saved Calender')
                       this.info('success','uploaded successfully!',3000)
                       this.setState({waitLoader:false,darkBG:false})
                       this.FetchAppForm()
                   }
                       catch(er){
                    console.error('error :',er)
                    this.info('error','failed to upload!',3000)
                    this.setState({waitLoader:false})

                       }            
            }
            submitCalender()
        }
    }

    componentDidMount(){
        let localUser = window.localStorage.getItem('user')
        let user = JSON.parse(localUser)
          this.setState({user})
        this.menu = React.createRef();
        this.adminScreen= React.createRef()
        // this.overlayMain = React.createRef()
        this.checkUpdates()
        this.setState({loadingNews:true})
        this.fetchPics()
       this.FetchCalender()
        this.FetchAppForm()
        this.imgBox = React.createRef();
         setTimeout(() => {
             this.FetchExams()
         }, 50);
        const FetchNews = async ()=>{

           try{
            this.setState({loadingNews:true})
            const news = await axios.post('/api/get/news')
              let sliced = news.data.result.slice(0,3)
           this.setState({news:sliced})
           this.setState({loadingNews:false})
        //    console.log(news)
           }
           catch(er){
               console.error(er)
               this.setState({loadingNews:false})
           } 
            
        } 
        FetchNews()




        if(!localStorage.getItem('user')){
            this.props.changeLogin()
            this.setState({redirect:true})
        }
  
        this.props.setOnlineService(true)  

       //F  this.overlayMain.current.style.background ="#00000000"
           
        setTimeout(() => {
        // this.overlayMain.current.style.background ="#00000000"
            this.props.setOnlineService(true)
        }, 50);

        setTimeout(() => {
            this.props.setOnlineService(true)
            window.scrollTo(0,0)
           }, 5);
    }

  

    
    async fetchPics(){

        try{
            this.setState({loadingPictures:true})

            const photos = await axios.post('/api/get/pictures')
            let sliced = photos.data.result.slice(0,4)
           this.setState({pictures:sliced})
           this.setState({loadingPictures:false})
       }
           catch(er){
               console.error(er)
               this.setState({loadingNews:false})
           } 
     }

    componentWillUnmount(){
        this.props.setOnlineService(false);
    }

    examsHandler=(e)=>{
              console.log(e.target.value,'name',e.target.name)
              this.setState({[e.target.name]:e.target.value})
    }

    buildDocument=(dat)=>{
        let link = `data:${dat.document.contentType};base64,${new Buffer(dat.document.data).toString('base64')}`
     return  link;
    
    }

    updateNews=async()=>{


        if(this.state.title.length<=3){
            this.setState({updateError:'Title required more than 3 characters'})
            window.scrollTo(0,0)
               return;
         }
        else{
             
        try{
             this.setState({ waitLoader:true})
            let obj = {title:this.state.title,_id:this.state.updateId,body:this.state.body}
            const news = await axios.post('/api/update/news',obj)
        this.TengenezaUpyaNews()
        this.info('success','Updated Successfully!',3000)
        this.setState({
            successUpdateAccount:false,
            home:false,
            setting:false,
            newsEvents:true,
            
            gallery:false,
            showCreate:false,
            openUpdate:false,
            waitLoader:false,
            darkBG:false
            })

        //    this.setState({news:news.data})
              console.log(news)
        //    console.log(news)
           }
           catch(er){
               console.error(er)
               this.info('error','Failed to Update!',3000)
               this.setState({
                successUpdateAccount:false,
                home:false,
                setting:false,
                newsEvents:true,
                
                gallery:false,
                showCreate:false,
                openUpdate:false,
                waitLoader:false,
                darkBG:false
                })
           } 
        }
       
    }

    handleImages=(ev)=>{
        this.setState({photo:ev.target.files[0]});
        
        for(let i = 0;i<ev.target.files.length;){
            let arry = this.imgBox.current.childNodes
            arry.forEach(c=>c.remove())
          let binaryData = [];
          binaryData.push(ev.target.files[i])
            let img = document.createElement('img')
            img.src=URL.createObjectURL(new Blob(binaryData, {type: "image"}));
            img.alt='preview'
            img.className='imgPreview'
            //` <img  src=${URL.createObjectURL(ev.target.files[i])}className='imgPreview'  alt='img to be previewd' style={{width:'10rem',height:"10rem"}}/>`
               this.imgBox.current.appendChild(img)
               this.imgBox.current.childNodes[0].style.width='100%'
             i++
        }
  }



    CreateNews=async()=>{


        if(this.state.title.length<=3){
            this.setState({updateError:'Title required more than 3 characters'})
            window.scrollTo(0,0)
               return;
         }
        
         else if(this.state.photo.length>0 ){
            if(this.state.photo){
                window.scrollTo(0,0)
                this.setState({updateError:'Error Photo file must be less than 10Mb'})
                return;
            }
         }
   
     else{
         
        let formData = new FormData()
         
        formData.set("title", this.state.title);  
        formData.set("body", this.state.body);  
        formData.set("photo", this.state.photo); 
        formData.set("document", this.state.document); 
       
 
            try{
             this.setState({waitLoader:true})
           let res=  await axios.post('/api/create/news',formData)
                   this.info('success','Posted Successfully',2000)
                 this.setState({waitLoader:false});
                 this.TengenezaUpyaNews()
                 this.setState({
                    successUpdateAccount:false,
                    home:false,
                    setting:false,
                    newsEvents:true,
                    
                    gallery:false,
                    showCreate:false,
                    openUpdate:false,
                    darkBG:false
                    })
                 console.log(res.data)
          
             
 
            }
            catch(er){
                console.error(er)
                this.info('error','Failed to post',2000)
                this.setState({waitLoader:false})
            }
     }
          
    }



    handleNewsChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
        this.formData.set([e.target.name], e.target.value)
    }
    populateUpdate=(title,body,_id)=>{
        console.log('title ',title)
        console.log('body',body)
      this.setState({darkBG:true,title,body,openUpdate:true,updateId:_id})    
                      
    }

    deleteNews=async()=>{
        let answer = this.state.answer
    let _id = this.state.deleteId;
    if(!_id)return
        if(answer){  
            this.setState({promp:false,darkBG:false,waitLoader:true}) 
        let result = await axios.post('/api/delete/news',{_id})
           this.TengenezaUpyaNews()
           this.setState({waitLoader:false,promp:false,darkBG:false})
           if(result.error){
               console.log('error during deleting news',result.error)
               this.setState({waitLoader:false,promp:false,darkBG:false})
           }

        } 
    }


    handleImageChange=(e)=>{        
         
       this.setState({[e.target.name]:e.target.files[0]})
    
    }
       handleUpdateChange=(e)=>{
let user =  {...this.state.user};
  user[e.target.name]=e.target.value;
this.setState({user,updateError:'',successUpdateAccount:false})

       }

       handleImageProfileChange=()=>{

       }

       SaveProfileUpdates=async()=>{
               if(this.state.user.firstName.length<=3){
                   this.setState({updateError:'First name is required more than 3 characters'})
                      return;
                }
                else if(this.state.user.lastName.length<=3){
                    this.setState({updateError:'Last name is required more than 3 characters'})
                    return;
                }
                else if(this.state.user.password.length<6){
                    this.setState({updateError:'Password must be 6 to 10 characters'})
                    return;
                }
                else if(this.state.user.password.length>10){
                    this.setState({updateError:'Password must be 6 to 10 characters'})
                    return;
                }

         else{
              
                 this.setState({lockButton:true})
                  
                  const UPDATEPROFILE=async()=>{
                            
                    try{

                        let user =  new FormData()
                        user.set('firstName',this.state.user.firstName)
                        user.set('lastName',this.state.user.lastName)
                        user.set('password',this.state.user.password)
                        user.set('_id',this.state.user._id)
                         console.log(this.state.user.firstName,this.state.user.lastName,this.state.user.password,this.state.user._id)
        
                        if(this.state.photo!==''){
                             user.set('photo', this.state.photo)
                        }
                        let result = await axios.post('/api/update/profile',user)
                         this.setState({lockButton:false,successUpdateAccount:true})
                         window.scrollTo(0,0)
                         console.log('huyu upadate user',result)
                         this.props.setUser(result.data.profile)
        
                       }
                       catch(er){
                           console.error(er,'problem during update profile')
                           this.setState({lockButton:false})
                       }
                  }

                  UPDATEPROFILE()
                  
               
             }


       }


        setstateHelper=(obj)=>{
            this.setState({...obj})
        }


       handleMenu=()=>{
           if(window.innerWidth>=868){
            if(this.state.logoutBox===false){
                this.adminScreen.current.style.display='block'
                this.setState({logoutBox:true})
             }
             else{
                this.adminScreen.current.style.display='none';
                this.setState({logoutBox:false})
             }
           }
           else{
           
             if(this.state.mobileMenu===false){
                this.menu.current.style.left=0
                this.menu.current.style.width='60vw';
                this.menu.current.style.height='100vh';
                document.body.style.overflow='hidden'
                this.adminScreen.current.style.display='block'
                this.setState({mobileMenu:true})
             }
             else{
                this.menu.current.style.left='-100%'
                this.menu.current.style.width='100%';
                document.body.style.overflow='auto'
                this.menu.current.style.height='100vh';
                this.adminScreen.current.style.display='none'
                this.setState({mobileMenu:false})
             }
          
           

           }
       }

       closeNav=()=>{
         this.handleMenu()
       }

    GalleryHelper=(obj)=>{
        this.setState({...obj})
    }


    buildPicture=(dat)=>{
        if(!dat.photo) return 
        let binary = `data:image/png;base64,`+ new Buffer(dat.photo.data).toString('base64')
        
        return  binary;

}


uploadExams=()=>{
    if(this.state.examFile.length===0){
        this.info('error','file not choosed!',3000)
        return
    }
    else{
        this.setState({darkBG:false,openCreateResults:false,waitLoader:true,AllExams:[]})
        
        let form = new FormData()
        form.set("type",this.state.examType)
        form.set("year",this.state.examYear)
        form.set('class', this.state.classesSelection)
        form.set('document', this.state.examFile)
        const submitResultForm=async()=>{

           try{
            let result =   await axios.post('/api/create/examresult',form)
            this.info('success','uploaded successfully!',3000)
            console.log(result,'majibu')
            this.setState({openCreateResults:false,waitLoader:false})
            this.FetchExams()
           }
           catch(er){
               this.info('error','failed to upload results!',3000)
               console.log('error :',er)
               this.setState({openCreateResults:false,waitLoader:false})
           }

        }

        submitResultForm()
    }
}

  helpForm=()=>{
     
    if( this.state.ApplicationForm.length!==0 && this.state.loaderApplicationForm===false)
    {
        return <div onClick={()=>this.setState({prompForm:true,darkBG:true})} className='uploadExams'>Delete Application Form</div>
    } 
else{
     
    return <div onClick={()=>this.setState({ formChoosed:'', createAPPform:true,darkBG:true})}
    className='uploadExams'>Upload Application Form</div>
}
  }


handleDeleteResult=()=>{
        if(this.state.resulDelelteId){
            if(this.state.answer){


              const deleteR = async ()=>{

                    try{

                        await axios.post('/api/delete/examresult',{_id:this.state.resulDelelteId})
                           this.info('success','deleted successfully',3000)
                           this.setState({waitLoader:false,darkBG:false})
                           this.FetchExams()
                    }
                    catch(er){
                        console.log(er,'failed to delete Exam')
                        this.info('error','deleted failed',3000)
                        this.setState({waitLoader:false,darkBG:false})
                    }

              }

              deleteR()

            }
        }
      
}
deleteCalender=(_id)=>{
    if(true){
        if(this.state.answer){
          const deleteR = async ()=>{

                try{

                    await axios.post('/api/delete/calender',{_id})
                       this.info('success','deleted successfully',3000)
                       this.setState({waitLoader:false,darkBG:false})
                       this.FetchCalender()
                }
                catch(er){
                    console.log(er,'failed to delete')
                    this.info('error','deleted failed',3000)
                    this.setState({waitLoader:false,darkBG:false})
                }

          }

          deleteR()

        }
    }
  
}


deleteApplForm=(_id)=>{
    if(true){
        if(this.state.answer){
          const deleteR = async ()=>{

                try{

                    await axios.post('/api/delete/applicationform',{_id})
                       this.info('success','deleted successfully',3000)
                       this.setState({waitLoader:false,darkBG:false})
                       this.FetchAppForm()
                }
                catch(er){
                    console.log(er,'failed to delete')
                    this.info('error','deleted failed',3000)
                    this.setState({waitLoader:false,darkBG:false})
                }

          }

          deleteR()

        }
    }
  
}

    render() { 
        const{user}=this.props
     return(
        
        <div className='admin'>
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

{/* STARTS PROMPT CONTANER */}
{this.state.promp && <div className='PROMPT'>
   <h3>ARE YOU SURE?</h3>
   <div>
   <button className='yes'onClick={()=>{
       
       this.setState({answer:true,waitLoader:true,promp:true,darkBG:true})
     setTimeout(() => {
        this.deleteNews()
     }, 200);
   }}>Yes</button> 
   <button className='no' onClick={()=>{
  this.setState({answer:false,waitLoader:false,promp:false,darkBG:false})
   }} >No</button>
   </div>
</div>}
{this.state.prompResultDelete && <div className='PROMPT'>
   <h3>ARE YOU SURE?</h3>
   <div>
   <button className='yes'onClick={()=>{
       
       this.setState({answer:true,waitLoader:true,prompResultDelete:false,darkBG:true})
     setTimeout(() => {
        this.handleDeleteResult()
     }, 1);
   }}>Yes</button> 
   <button className='no' onClick={()=>{
  this.setState({answer:false,waitLoader:false,prompResultDelete:false,darkBG:false})
   }} >No</button>
   </div>
</div>}
{/*starts of update post container */}

{this.state.openUpdate && <div className='updatePostContainer'>
     <div className='cancel-update'onClick={()=>this.setState({openUpdate:false,darkBG:false})} >
         <CancelSvg/>
     </div>
          <h2>UPDATE POST</h2>
          <div className='updatePostInside'>

           <form onSubmit={(e)=>e.preventDefault()}>
                    <div>
           <div className='lable'>Title</div>
                  <input placeholder='Enter Main Post Title' value={this.state.title} onChange={this.handleNewsChange} type='text' name='title' placeholde='Enter title'/>
                           </div>
                           <div className='createTitle'>
                               <div className='lable'>Body</div>
                               <input className='inputBody'  placeholder='Enter Extra Article (optional)' value={this.state.body} type='text' name='body' onChange={this.handleNewsChange} placeholde='Enter explanation if needed'/>
                           </div>
                           <div className='createTitle'>
                               <button onClick={this.updateNews}>SAVE CHANGES</button>
                           </div>
           </form>

          </div>
</div>
}

{/* ends of update post container */}


         {this.state.darkBG&&  <div className='fade-white-bg'>
               
               </div>}

            {this.state.waitLoader&&
             <div className='waitLoader'>
                  <ReactLoading type={'spin'} color={'var(--blue)'} height={'5rem'} width={'5rem'} />
                  <span className='waitTextLoader'>Please wait..</span>
             </div>
            }
            <div className='adminScreen' ref={this.adminScreen} onClick={this.closeNav}></div>
            <div className='admin-menu' ref={this.menu}>

            <div className='top_utilis'>
            <div className='imgLogo'>
                <img src={Logo} alt='logo-for-remnant'/>
            </div>
            <div className='NotifBox'>
                <span className='notfCount'>
                    <span className='count'>0</span>
                </span>
                <Notif/>
            </div>
            <div 
          onClick={()=>{
              this.setState({
                home:false,
                setting:true,
                
                newsEvents:false,
                gallery:false,
                showCreate:false,
                singlePost:false,
                examResults:false
              })
          }}
            className='msgBox'>
                  <UserSvg/>
            </div>
            </div>

            {/* profile */}

            <div className='profileShortCut'>
                <div className='profileBOx'>
                <img onError={i=>i.target.src=`${profile}`}
                 src={`https://remnantbaseapi.herokuapp.com/api/get/user/pic/${this.props.user._id}`} alt='userPic'/>
                </div>
                <div className='profile-info'>
                    <h4>{user.firstName}  &nbsp;{user.lastName}  </h4>
                  <p>{user.email}</p>
                {this.props.user.isAdmin &&   <p style={{fontWeight:'bold',color:'var(--red)',marginTop:'.8rem'}}>Admin Account</p>}
                </div>
            </div>

            {/* dash links */}

            <div className='dashLinks'>
                <div className='dashHeadLinks'>
                    <h5>DASHBOARDS</h5>
                    <p>important menues link</p>
                </div>
                <div className='dashLink'
                 id={this.state.home?'activeAdminTab':''}
                 onClick={()=>{
                     if(window.innerWidth<868){
                        this.handleMenu()
                     }
                     this.GalleryHelper({
                        successUpdateAccount:false,
                        newsEvents:false,
                        home:true,
                        setting:false,
                        gallery:false,
                        showCreate:false,
                        singlePost:false,
                        examResults:false
                        })
                 }}>
                  <span><HomeSvg/></span> 
                   <span>Home</span>
                </div>
                <div className='dashLink'
                 id={this.state.newsEvents?'activeAdminTab':''}
                 onClick={()=>{
                    if(window.innerWidth<868){
                        this.handleMenu()
                     }
                     this.setState({
                        successUpdateAccount:false,
                        home:false,
                        setting:false,
                        newsEvents:true,
                        
                        gallery:false,
                        showCreate:false,
                        singlePost:false,
                        examResults:false
                        })
                 }}>
                <span className='docs'><DocSvg/></span>
                <span>News &amp; Events</span>
                </div>
                {/* {/* <div className='dashLink'>
                <span className='docs'><StuSvg/></span>     <span>Students</span>
                </div> */}
                <div className='dashLink'
                onClick={()=>{
                    if(window.innerWidth<868){
                        this.handleMenu()
                     }
                    this.GalleryHelper({
                        successUpdateAccount:false,
                        home:false,
                        setting:false,
                        newsEvents:false,
                        
                        gallery:false,
                        showCreate:false,
                        singlePost:false,
                        examResults:true
                        })
                }}
                >
                <span className='docs'><TeSvg/></span><span>Academics</span>
                </div> 
                <div className='dashLink'
                  id={this.state.gallery?'activeAdminTab':''}
                onClick={()=>{
                    if(window.innerWidth<868){
                        this.handleMenu()
                     }
                    this.GalleryHelper({
                        successUpdateAccount:false,
                        home:false,
                        setting:false,
                        newsEvents:false,
                        
                        gallery:true,
                        showCreate:false,
                        singlePost:false,
                        examResults:false
                        })
                }}>
                <span className='docs'><StarSvg/></span>  <span>Gallery</span>
                </div>
                <div className='dashLink' 
                 id={this.state.setting?'activeAdminTab':''}
                onClick={()=>{
                    if(window.innerWidth<868){
                        this.handleMenu()
                     }
                    this.setState({
                        home:false,
                        setting:true,
                        
                        newsEvents:false,
                        gallery:false,
                        showCreate:false,
                        singlePost:false,
                        examResults:false
                        })
                }}>
                <span className='docs'><SettingSvg/></span>     <span>Settings</span>
                </div>
            </div>

            </div>
            <div className='admin-container'>            
<div className='topNavAdmin'>
    <div style={{position:'relative'}} className='navSvg'>
       {this.state.logoutBox&& <div className='logout-menu'>
            <span onClick={this.logout}> Log out? </span>
        </div>}
        <span  onClick={this.handleMenu}>    
        <NavSvg/>

        </span>
    </div>
  
    <div className='TaskSvg'>
      {this.state.home?"Home":<span 
      onClick={()=>this.setState({
        successUpdateAccount:false,
        newsEvents:false,
        home:true,
        showCreate:false,
        setting:false,
        gallery:false,
        singlePost:false,
        examResults:false
        })}
      >Go Back</span>}
    </div>
    {this.state.redirect &&<Redirect to='/online-services'/>}
</div>

   {this.state.home &&    <div className='adminWrap'> 

{/* ends of top nav */}
{/* starts welcome back box */}

    <div className='welcomeBack'>

        <div className='welcomePerson'>
            <div className='Upic'>
            <img onError={i=>i.target.src=`${profile}`}
                   src={`https://remnantbaseapi.herokuapp.com/api/get/user/pic/${this.props.user._id}`} alt='userPic'/>
            </div>
            <div className='wTexts'>
                <h3>Welcome back {this.props.user.firstName}!</h3>
                 <p> <span><FlashSvg/></span> <span>todays quote: never stop learning</span></p>
            </div>
        </div>
       {this.props.user.isAdmin? <div className='create-newsEvent' onClick={()=>{
            this.setState({
                successUpdateAccount:false,
                home:false,
                setting:false,
                newsEvents:false,              
                gallery:false,
                showCreate:true,
                examResults:false
            })
        }}>
           <span>create news or event</span>
            </div>:  <div className='create-newsEvent' onClick={()=>{
            this.setState({
                successUpdateAccount:false,
                home:false,
                setting:false,
                newsEvents:true,              
                gallery:false,
                showCreate:false,
                examResults:false
            })
        }}>
           <span>news and events</span>
            </div>}
            <div className='upload-calender'
            onClick={()=>{
                this.setState({
                    successUpdateAccount:false,
                    home:false,
                    setting:false,
                    newsEvents:false,
                    
                    gallery:false,
                    showCreate:false,
                    singlePost:false,
                    examResults:true
                })
            }}
            >
            <span>All Academics FIles</span>
            </div>
    </div>
{/* ends welcome back box */}
{/* starts recent news events box */}
<div className='recentNews'>
    <h4 style={{fontSize:'2rem'}}>Preview recently added</h4> <div onClick={()=>{
        this.TengenezaUpyaNews()
        this.setState({pictures:[],news:[],loadingPictures:true,AllExams:[]})
        this.fetchPics()
        this.FetchExams();
        
    }} className='REFRESH'>Refesh Data</div>
    <div className='recentNewsInside'>
        <div className='titleNewsEvents'> 
             <div className='title'>
                 title
             </div>
             <div className='date'>
                 posted
             </div>
           {this.props.user.isAdmin && <React.Fragment>
            <div className='delete'>
                 update
             </div>
             <div className='edit'>
                 delete
             </div>
               </React.Fragment>}
             <div className='actionMore'>
              link
             </div>
          </div>
          {/* start of single box */}
             {
                 this.state.news.length > 0?<React.Fragment>
                     {
                        this.state.news.map((n,i)=>{
                            return (
                                <div className='rowSingle'
                                style={{cursor:'pointer'}}
                                 onClick={()=>{
                                     this.setState({
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
                                key={i}>
                                <div className='rowTitle'>
                                   {n.title.length>20?n.title.substring(0,50)+'...':n.title}
                                </div>
                                
                                <div className='rowDate'>
                                  {new Date(n.date).toLocaleDateString()}
                                </div>
                                
                              {this.props.user.isAdmin && <React.Fragment>
                                <div className='rowUpdate' onClick={()=>this.populateUpdate(n.title,n.body,n._id)}>
                                  <EditSvg/>
                                </div>
                                
                                <div className='rowDelete' onClick={()=>this.setState({deleteId:n._id,promp:true,darkBG:true})}>
                                  <TrashSvg/>
                                </div>
                                  </React.Fragment>
                                  }
                                <div className='rowMore'>
                                  view
                                </div>
                            </div>
                            )
                        })  
                     }
                 </React.Fragment>:''
             }
             <div>  {this.state.loadingNews&& <div className='newsLoader'>
             <ReactLoading type={'spin'} color={'var(--blue)'} height={'5rem'} width={'5rem'} />
                 </div>}</div>
             <div>
                 {this.state.loadingNews===false&& this.state.news.length===0?<h4>No news posted</h4>:''}
             </div>
         
          <div
          onClick={()=>{
               this.setState({
                      
                        home:false,
                        setting:false,
                        newsEvents:true,
                        
                        gallery:false,
                        showCreate:false,
                        singlePost:false
                        })
                 }}
          className='viewAllNew sameProps'><h5> {this.props.user.isAdmin?"Manage ":"See "}All News &amp; Events</h5></div>
    </div>

   
</div>
{/* ends recent nes events box */}
{/* starts recent on Gallery added */}
<div className='recentGallery'>
{this.state.loadingPictures&& <div className='newsLoader'>
             <ReactLoading type={'spin'} color={'var(--blue)'} height={'5rem'} width={'5rem'} />
                 </div>}
     <div className='recentGalleryInside'>
          {/* single pic */}
          {this.state.pictures.length>0 && <React.Fragment>
            {this.state.pictures.map((p,i)=>{
                return   <div
                 onClick={()=>{
                    this.setState({
                        home:false,
                        setting:false,
                        newsEvents:false,
                        
                        gallery:true,
                        showCreate:false,
                        singlePost:false
                        })
                 }}
                className='picSingle' key={i}>
                <div className='imgSingle'>
                    <img src={this.buildPicture(p)} alt={p.caption}/>
                </div>
                </div>
            })}
              </React.Fragment>}
              {this.state.loadingPictures===false && this.state.pictures.length===0?<h3>NO PICTURES UPLOADED!</h3>:''}
       
        
         {/* ends single Pic */}
        </div>
        <div 
        onClick={()=>{
            this.setState({
                      
                home:false,
                setting:false,
                newsEvents:false,
                
                gallery:true,
                showCreate:false,
                singlePost:false
                })
         }}

        className='manageAllPic sameProps'><h5>{this.props.user.isAdmin?"Manage ":"view "} Gallery</h5></div>
</div>
{/* ends recent on Gallery added */}
</div>}
                {/* ends of admin-wrap */}
                {/* starts admin setting */}
                     
                     {this.state.setting && <div className='adminSetting'>
 
                <div className='settingContainer'>
                    <div className='settingTitle'>
                        <span><SettingSvg/> </span>

                        <span className='setting-t'>EDIT ACCOUNT</span>
                    </div>
                     {this.state.successUpdateAccount && <div className='success'>
                        account updated successfully! 
                    </div>}
                <div className='creatNews'>
                             <form onSubmit={(e)=>e.preventDefault()}> 
                            
                             <div className='logoutOuot' 
                             onClick={this.logout}
                             >Logout</div>   
                            <div className='editProfileSetting'>
                            <img onError={i=>i.target.src=`${profile}`}
   src={`https://remnantbaseapi.herokuapp.com/api/get/user/pic/${this.props.user._id}`} alt='userPic'/>
                            </div>
                        {this.state.updateError.length>1 &&  <div className='updateProfileErrors'>{this.state.updateError}</div>}   
                           <div className='createTitle'>
                               <div className='lable'>First Name</div>
                               <input value={this.state.user.firstName}
                                onChange={this.handleUpdateChange} type='text' name='firstName' 
                                placeholde='Enter title'/>
                           </div>
                           <div className='createTitle'>
                           <div className='lable'>Last Name</div>
                               <input autoComplete='true' value={this.state.user.lastName} 
                               type='text' name='lastName' onChange={this.handleUpdateChange}
                                placeholde='Enter explanation if needed'/>
                           </div>
                           <div className='createTitle'>
                           <div className='lable'>Password</div>
                               <input value={this.state.user.password} type='password' autoComplete="current-password"  name='password' 
                               onChange={this.handleUpdateChange} placeholde='Enter explanation if needed'/>
                           </div> <div  ref={this.imgBox} className='createTitle'>                    
            </div>
                           <div className='createTitle uploadBox'>
                
                               <input type="file" id="avatar" onChange={this.handleImages} name="photo" 
                               accept="image/*"/>
                           </div>
                           <div className='createTitle'>
                              {this.state.lockButton? <button disabled className='lockedBtn' onClick={()=>this.SaveProfileUpdates()}>Please wait...</button>:
                                  <button onClick={()=>this.SaveProfileUpdates()}>Save Changes</button>
                              }
                           </div>
                    </form>
                </div>
                </div>
</div>
}
{/* ends of setting */}
{/* starts of newsEventAdmin */}
 {
     this.state.newsEvents && <NewsEventAdmin 
     user={this.props.user} helper={this.GalleryHelper}
      answer={this.state.answer} 
      openUpdate={this.state.openUpdate} 
       populateUpdate={this.populateUpdate}
        setstateHelper={this.setstateHelper} />
 }

{/* ends of newsEventAdmin */}
{/* starts gallery here */}
 {this.state.gallery && <GalleryAdmin user={this.props.user} info={this.info}   GalerryHelper={this.GalleryHelper}/>}
{/* ends gallery */}
                {/* start of admin newpostBox */}

                {this.state.showCreate &&  <div  className='newPostBox'>
                   <div className='newPostInside'>
                         <h2>CREATE NEWS OR EVENT</h2>
                     {this.state.updateError.length>0 &&  <div className='erro-show-box'>{this.state.updateError}</div>}  
                  <div className='updateForm'>
               <form onSubmit={(e)=>e.preventDefault()}> 
                <div className='createTitle'>
            
                    <div className='lable'>Title</div>
                  <input placeholder='Enter Main Post Title' value={this.state.title} onChange={this.handleNewsChange} type='text' name='title' placeholde='Enter title'/>
                           </div>
                           <div className='createTitle'>
                               <div className='lable'>Body</div>
                               <input className='inputBody'  placeholder='Enter Extra Article (optional)' value={this.state.body} type='text' name='body' onChange={this.handleNewsChange} placeholde='Enter explanation if needed'/>
                           </div>
                           <div className='createTitle uploadDocument UPL'>
                               <UploadSvg/>
                               <input  type='file' name='document'
                               accept="application/msword, application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.presentationml.presentation, application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/vnd.ms-powerpoint,text/plain, application/pdf"
                                onChange={this.handleImageChange}/>
                           </div>
                           <div className='createTitle uploadImage UPL'>
                               <UploadSvg/>
                               <input  type='file' name='photo'
                                onChange={this.handleImageChange}
                                accept="image/*"
                                />
                           </div>
                         
                           <div >
                               <button
                               onClick={()=>this.CreateNews()}
                               >CREATE NOW</button>
                           </div>
                    
                           </form>
                    </div>
                   </div>
                </div>}

                {/* ends of admin newpostBox */}
                {/* starts singlePost container */}

  {this.state.singlePost &&  <SinglePost  selected={this.state.selectedSingle} helper ={this.GalleryHelper}/>}
                 
                {/* ends of singlePost container */}
                {/* starts upload examination results */}

                {this.state.openCreateResults && <div className='updatePostContainer'>
     <div className='cancel-update'onClick={()=>{
         this.setState({openCreateResults:false,darkBG:false})
     }} >
         <CancelSvg/>
     </div>
          <h2>EXAMS RESULT</h2>
          <div className='updatePostInside'>

           <form onSubmit={(e)=>e.preventDefault()}>

                           <div>
                               <div className='lable'>Select Class</div>
                               <select name='classesSelection' onChange={this.examsHandler}>
                                 <option value='classFour'>class Four</option>
                                 <option value='classSeven'>class Seven</option>
                               </select>
                           </div>
                           
                           <div>
                               <div className='lable'>Examination Type</div>
                               <select name='examType' onChange={this.examsHandler}>
                                 <option value='national'>National Exam</option>
                                 <option value='mock'>Other Exams</option>
                               </select>
                           </div>

                           <div>
                               <div className='lable'>Select Year</div>
                               <select name='examYear' onChange={this.examsHandler}>
                                 <option value='2020'>2020</option>
                                 <option value='2021'>2021</option>
                                 <option value='2021'>2022</option>
                                 <option value='2021'>2023</option>
                               </select>
                            </div>
                            <div>
                               <div className='chooseDocExam'>
                                  <input type='file'
                                     accept="application/msword, application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.presentationml.presentation, application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/vnd.ms-powerpoint,text/plain, application/pdf"
                                     onChange={(e)=>{
                                         console.log(e.target.files[0])
                                         this.setState({examFile:e.target.files[0]})
                                     }}
                                  />
                               </div>
                           </div>
                           
                           
                           <div className='createTitle'>
                               <button onClick={this.uploadExams}>UPLOAD RESULTS</button>
                           </div>
           </form>

          </div>
</div>
}

{/* prompt for academic calender start*/}
{this.state.openAcademic && <div className='updatePostContainer'>
     <div className='cancel-update'onClick={()=>{
         this.setState({openAcademic:false,darkBG:false})
     }} >
         <CancelSvg/>
     </div>
          <h2>UPLOAD CALENDER</h2>
          <div className='updatePostInside'>
            <br/>
       <span style={{color:'var(--red)'}}>   <strong> *IMPORTANT*</strong> Calender is Pdf file (.pdf) extension only!</span>
            <br/>
           <form onSubmit={(e)=>e.preventDefault()}>
                           <br/>
                           <br/>
                               <div>
                               <div className='chooseDocExam'>
                                  <input type='file'
                                     accept="application/pdf"
                                     onChange={(e)=>{
                                         console.log(e.target.files[0])
                                         this.setState({academicFile:e.target.files[0]})
                                     }}
                                  />
                               </div>
                           </div>
                           <br/>
                           <br/>
                           
                           <div className='createTitle'>
                               <button onClick={this.uploadAcademic}>UPLOAD CALENDER</button>
                           </div>
           </form>

          </div>
</div>
}

{/* prompt for academic calender ends */}
{/* STARTS CALENDER PROMPT CONTANER */}
{this.state.prompCalender && <div className='PROMPT'>
   <h3>ARE YOU SURE?</h3>
   <div>
   <button className='yes'onClick={()=>{
       
       this.setState({answer:true,waitLoader:true,prompCalender:false,darkBG:false})
     setTimeout(() => {
         
        this.deleteCalender(this.state.academicCalender[0]._id)
     }, 10);
   }}>Yes</button> 
   <button className='no' onClick={()=>{
  this.setState({answer:false,waitLoader:false,prompCalender:false,darkBG:false})
   }} >No</button>
   </div>
</div>}
{this.state.prompResultDelete && <div className='PROMPT'>
   <h3>ARE YOU SURE?</h3>
   <div>
   <button className='yes'onClick={()=>{
       
       this.setState({answer:true,waitLoader:true,prompResultDelete:false,darkBG:true})
     setTimeout(() => {
        this.handleDeleteResult()
     }, 1);
   }}>Yes</button> 
   <button className='no' onClick={()=>{
  this.setState({answer:false,waitLoader:false,prompResultDelete:false,darkBG:false})
   }} >No</button>
   </div>
</div>}
{/*starts of update post container */}
                {/* ends of uplod examination results */}


{/* ----------------------STARTS ONLY MAKE APPLICATION FORM UPLAOD AND PROMPT -----------*/}






{/* prompt for academic calender start*/}
{this.state.createAPPform && <div className='updatePostContainer'>
     <div className='cancel-update'onClick={()=>{

         this.setState({createAPPform:false,darkBG:false,formChoosed:''})
     }} >
         <CancelSvg/>
     </div>
          <h2>APPLICATION FORM</h2>
          <div className='updatePostInside'>
            <br/>
       <span style={{color:'var(--red)'}}>   <strong> *IMPORTANT*</strong> Only Documents allowed not picture!</span>
            <br/>
           <form onSubmit={(e)=>e.preventDefault()}>
                           <br/>
                           <br/>
                               <div>
                               <div className='chooseDocExam'>
                                  <input type='file'
                                     accept="application/msword, application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.presentationml.presentation, application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/vnd.ms-powerpoint,text/plain, application/pdf"
                                     onChange={(e)=>{
                                         console.log(e.target.files[0])
                                         this.setState({formChoosed :e.target.files[0]})
                                     }}
                                  />
                               </div>
                           </div>
                           <br/>
                           <br/>
                           
                           <div className='createTitle'>
                               <button onClick={this.uploadAppForm}>SAVE APPLICATION FORM</button>
                           </div>
           </form>

          </div>
</div>
}

{/* prompt for academic calender ends */}
{/* STARTS CALENDER PROMPT CONTANER */}
{this.state.prompForm  && <div className='PROMPT'>
   <h3>ARE YOU SURE?</h3>
   <div>
   <button className='yes'onClick={()=>{
       
       this.setState({answer:true,waitLoader:true,prompForm:false,darkBG:false})
     setTimeout(() => {
         
        this.deleteApplForm(this.state.ApplicationForm[0]._id)
     }, 10);
   }}>Yes</button> 
   <button className='no' onClick={()=>{
  this.setState({answer:false,waitLoader:false,prompForm:false,darkBG:false})
   }} >No</button>
   </div>
</div>}


{/*------------------ ENDS OF APPLICATIION FORM PROMPT AND UPLOAD BOX----------------------- */}



{
    this.state.examResults && 
    <div className='exam-results-page'>
        <div className='examsResultInside'>
            <br/>
            <h2 style={{width:'95%'}}><TeSvg/>CALENDER / FORM &amp; EXAMS</h2>
             {
                 this.state.academicCalender.length===0 && this.state.loadingAcademic===false ?
                <React.Fragment> 
                    {this.props.user.isAdmin &&  <div onClick={()=>this.setState({academicFile:'', openAcademic:true,darkBG:true})}
            className='uploadExams'>Upload Calender</div>}
                </React.Fragment>
                :<React.Fragment>
                {this.props.user.isAdmin &&  <div
            onClick={()=>this.setState({prompCalender:true,darkBG:true})}
            className='uploadExams'>Delete Calender</div>}
            </React.Fragment>
             }

{this.props.user.isAdmin && <React.Fragment>
{ this.helpForm() }
</React.Fragment> }  
       {
           this.props.user.isAdmin &&      <div
           onClick={()=>this.setState({openCreateResults:true,darkBG:true})}
           className='uploadExams'>Upload Results</div>
       }
              <h2>ACADEMIC CALENDER</h2>
           <div className='academic-calder'>
          {  this.state.academicCalender.length===0 && this.state.loadingAcademic===false?
        <h3 style={{color:'var(--red)'}}>No calender uploaded!</h3>:'' 
        }
         
         <React.Fragment>
      
         {this.state.academicCalender.length>0 && this.state.loadingAcademic===false?
         <React.Fragment>
          
             {this.state.academicCalender.map((c,i)=>{
            return <React.Fragment key={i}>
                 <embed style={{width:'100%',height:"100%"}}  type="application/pdf" src={this.buildDocument(c)} key={i}>
              
              </embed>
              <div className='download-ac-calender'>
             <a href={this.buildDocument(c)} download={c.document.originalFilename}><u>download calender</u> </a> 
              </div>
            </React.Fragment>

             })}

         </React.Fragment> :''
       }
         </React.Fragment>
         <div className='applicationFormBox'>
                 <h3>Application form</h3>
                  {
                      this.state.ApplicationForm.length!==0 && this.state.loaderApplicationForm===false?
                      <React.Fragment>
                          <div className='APPLCNF'>
                     <img src={Word} alt='application-form'/>
                 </div>
                 <a href={this.buildDocument(this.state.ApplicationForm[0])} download={this.state.ApplicationForm[0].originalFilename} > download form </a>
                      </React.Fragment>:''
                  }
                  { this.state.ApplicationForm.length===0 && this.state.loaderApplicationForm?
                 <ReactLoading type={'spin'} color={'var(--blue)'} height={'5rem'} width={'5rem'} />
                 :''  
                }

                {this.state.ApplicationForm.length===0 && this.state.loaderApplicationForm===false?
                <h4 style={{color:'var(--red)'}}>No Application Form uploaded!</h4> :''   
            }
             </div>

         <h3 className='examRt'>EXAM RESULTS</h3>

       {
           this.state.loadingAcademic && this.state.academicCalender.length===0?
           <ReactLoading type={'spin'} color={'var(--blue)'} height={'5rem'} width={'5rem'} />:''
       }
           </div>
 {this.state.AllExams.length>0 && this.state.loadingExams===false ? <div className='containerRESULTS'>
                    <div className='result-class'>
                        <h4>Class Four :</h4>
                        <div className='National'>
                            <strong>National Examination resuts:</strong>

                          
                          {this.state.AllExams.filter(e=>e.type==='national'&& e.type==='classFour').map((e,i)=>{
                          

                                return  <div className='res-bx' key={i}>
                                <div> <a href={this.buildDocument(e)} download={e.document.originalFilename}><img src={Pdf} alt='exam-result doc'/> </a> </div>
                                   <div>
                                   <strong>Exam year :</strong>   {e.year}
                                 {this.props.user.isAdmin &&  <div
                                 onClick={()=>{
                                     this.setState({darkBG:true,prompResultDelete:true,resulDelelteId:e._id})
                                 }}
                                 className='deleteResult'>Delete</div>}
                                   </div>
                            </div>
                          
                          })}


                        </div>
                        <div className='other'>
                            <strong>Other Examination resuts:</strong>
                            {this.state.AllExams.filter(e=>e.type==='mock'&& e.type==='classFour').map((e,i)=>{
                            

                                  return  <div className='res-bx' key={i}>
                                  <div> <a href={this.buildDocument(e)} download={e.document.originalFilename}><img src={Pdf} alt='exam-result doc'/> </a> </div>
                                   <div>
                                   <strong>Exam year :</strong>   {e.year}
                                   {this.props.user.isAdmin &&   <div 
                                   onClick={()=>   this.setState({darkBG:true,prompResultDelete:true,resulDelelteId:e._id})}
                                 className='deleteResult'>Delete</div>}
                                 
                                   </div>
                            </div>
                            
                          })}

                        </div>
                    </div>
    
                    <div className='result-class'>
                        <h4>Class Seven :</h4>
                        <div className='National'>
                            <strong>National Examination resuts:</strong>
                             
                          {this.state.AllExams.filter(e=>e.type==='national'&& e.type==='classFour').map((e,i)=>{
                             

                                  return  <div className='res-bx' key={i}>
                                <div> <a href={this.buildDocument(e)} download={e.document.originalFilename}><img src={Pdf} alt='exam-result doc'/> </a> </div>
                                   <div>
                                   <strong>Exam year: </strong>{e.year}
                                   {this.props.user.isAdmin &&  <div    onClick={()=>   this.setState({darkBG:true,prompResultDelete:true,resulDelelteId:e._id})}
                                 className='deleteResult'>Delete</div>}
                                   </div>
                            </div>
                          
                          })}
                        </div>
                        <div className='other'>
                            <strong>Other Examination resuts:</strong>
                            {this.state.AllExams.filter(e=>e.type==='national'&& e.type==='classFour').map((e,i)=>{
                              

                                  return  <div className='res-bx' key={i}>
                                  <div> <a href={this.buildDocument(e)} download={e.document.originalFilename}><img src={Pdf} alt='exam-result doc'/> </a> </div>
                                   <div>
                               <strong>Exam year :</strong> {e.year}
                                {this.props.user.isAdmin && <div   onClick={()=>   this.setState({darkBG:true,prompResultDelete:true,resulDelelteId:e._id})}
                                 className='deleteResult'>Delete</div>}
                                   </div>
                            </div>
                           
                          })}
                        </div>
                    </div>
               
                </div>:<h3 className='no-exam'>
                    
                     {this.state.loadingExams===false && "No exams result uploaded!"}
                    </h3>}

                {this.state.AllExams.length===0 && this.state.loadingExams? <ReactLoading type={'spin'} color={'var(--blue)'} height={'5rem'} width={'5rem'} />:''}

        </div>
    </div>
}
{/* ends of examresult page */}
            </div>
        
        </div>
     )
    }
}
 
export default Admin;
