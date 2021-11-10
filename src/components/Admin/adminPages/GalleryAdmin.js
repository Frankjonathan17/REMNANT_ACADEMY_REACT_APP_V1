import React from 'react'
import './gallery.css'
import {ReactComponent as StarSvg} from '../../../assets/Star.svg';
import {ReactComponent as CancelSvg} from '../../../assets/cancel.svg'
import axios from 'axios'
import SingleIMG from './singleIMG';
import ReactLoading  from 'react-loading'
import {ReactComponent as TrashSvg} from '../../../assets/Trash.svg';
import {ReactComponent as EditSvg} from '../../../assets/Edit.svg';


class GalleryAdmin extends React.Component {

    Helper = this.props.GalerryHelper
    info = this.props.info

    state={
        postPic:false,
        photo:'',
        caption:'',
        loadingPictures:false,
        viewPic:false,
        loadingPic:false,
        pictures:[],
        singlePicObj:{},
        promp:false,
        answer:false,
        openUpdate:false
    }
     formData = new FormData()

     loadSingle=async(_id)=>{
         
           this.setState({
            viewPic:true,
            loadingPic:true,
        })
        this.Helper({
            darkBG:true
         })
          
         try{
             let pic = await axios.post('/api/get/singlePic',{_id})
               this.singleViewImg.current.src=this.buildPicture(pic.data)
               this.singleViewImg.current.style.display='block'
            
             this.setState({
                loadingPic:false,
                singlePicObj:pic.data
            })

         }catch(er){
      console.log('error :', er)
      this.info('error','Image fail to load (already deleted)',3000)
      this.setState({
        viewPic:false,
        loadingPic:false,
      })
      this.Helper({
        darkBG:false
     })
         }


     }

    async fetchPics(){

        try{
            this.setState({loadingPictures:true})

            const photos = await axios.post('/api/get/pictures')
           this.setState({pictures:photos.data.result})
           this.setState({loadingPictures:false})
       }
           catch(er){
               console.error(er)
               this.setState({loadingNews:false})
           } 
     }

    CreatePhoto=async()=>{

        if(!this.state.photo){
           this.info('error','Please Choose Image !',4000)
           return false;
        }
          this.setState({postPic:false})
        this.Helper({
            waitLoader:true
         })
        let form = new FormData();
        form.set('photo',this.state.photo);
        form.set('caption',this.state.caption)
        try{

         await   axios.post('/api/create/pictures',form);  
        
          this.fetchPics()
         this.setState({  postPic:false })   
         this.Helper({
            waitLoader:false,
            darkBG:false
         })  
         this.info('success','Saved Successfully !',3000)           
   
          }
          catch(er){
            console.error(er)
            this.info('error',er,3000)
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
               i++
          }
    }


    componentDidMount(){

        this.singleViewImg = React.createRef()
        this.imgBox = React.createRef()

        const FetchPhotos = async ()=>{

            try{
             this.setState({loadingPictures:true})
             const photos = await axios.post('/api/get/pictures')
            this.setState({pictures:photos.data.result})
            this.setState({loadingPictures:false})
            // let res = photos.data.result[0].photo.data;
            // let img = document.createElement('img');
            // img.src=`data:image/png;base64,`+ new Buffer(res).toString('base64')
            //  img.style.width='20rem'
            //  img.style.height='20rem'
            //  img.alt='picha'
            //  document.body.appendChild(img)
        }
            catch(er){
                console.error(er)
                this.setState({loadingNews:false})
            } 
             
         }
 
       
         FetchPhotos()

    }



    buildPicture=(dat)=>{
               let binary = `data:image/png;base64,`+ new Buffer(dat.photo.data).toString('base64')
        return  binary;
       
    }

    cancelDelete=()=>{
        this.Helper({
            waitLoader:false,
            darkBG:true
           })
        console.log('canceling is working')
           this.setState({answer:false,promp:false})
       
    }


    updatePic=async()=>{
   
          try{
              this.setState({openUpdate:false, viewPic:false,
                loadingPic:false,})

              this.Helper({waitLoader:true,darkBG:false})
            await axios.post('/api/update/singlePicture',{
                caption:this.state.singlePicObj.caption,
                _id:this.state.singlePicObj._id})
            this.info('success','updated successfully!',3000);
            this.setState({openUpdate:false})
            this.Helper({waitLoader:false})
                
          }catch(er){
              console.log('failed to update caption: ',er)
              this.info('error','failed to update caption',3000);
              this.setState({openUpdate:false})
              this.Helper({waitLoader:false,darkBG:false})
              this.setState({openUpdate:false, viewPic:false,
                loadingPic:false,})

          }
    }



    deletePic=async()=>{
        console.log(this.state.singlePicObj._id)
           try{
                 await axios.post('/api/delete/singlePicture',{_id:this.state.singlePicObj._id})
                 this.info('success','Deleted Successfully!',3000)
                 this.Helper({
                     darkBG:false,
                     waitLoader:false
                 })
                 this.fetchPics()
              
           }catch(er){
                 console.error('imeshidwa delete :',er)
                 this.info('error','failed to delete!',3000)
                 this.Helper({
                    darkBG:false,
                    waitLoader:false
                })
           }
    }

   handleUpdateCaption=(e)=>{
       let singlePicObj = {...this.state.singlePicObj}
        singlePicObj.caption = e.target.value
        this.setState({singlePicObj})
   }

    render() { 
        return <div className='GalleryAdmin'>
            
{this.state.postPic && <div className='updatePostContainer'>
     <div className='cancel-update'
     onClick={()=>{
         this.setState({postPic:false})
         this.Helper({
            darkBG:false
         })
     }} >
         <CancelSvg/>
     </div>
          <h2>UPLOAD PICTURE(S)</h2>
          <div className='updatePostInside'>

           <form onSubmit={(e)=>e.preventDefault()}>
               <div className='thumbsImg'  ref={this.imgBox}>
               
               </div>
                           <div  className='createTitle imgUploadParent'>
                               <input style={{height:'8rem'}} id='imgUpload' className='inputBody'  type='file' name='image' onChange={this.handleImages}/>
                           </div>
                           <div  className='createTitle'>
                               <input id='caption'  placeholder='Enter a caption (optional)' className='inputCaption'  type='text' name='caption' onChange={(e)=>this.setState({caption:e.target.value})}/>
                           </div>
                           <div className='createTitle'>
                               <button className='savePbtn' onClick={this.CreatePhoto}>SAVE NOW</button>
                           </div>
           </form>

          </div>
</div>
}
               <div className='Gallery-inside'>

                   {/* PROMPT START  */}
                   {this.state.promp && <div className='PROMPT' key={'dkdks'}>
   <h3>ARE YOU SURE?</h3>
   <div>
   <button style={{background:'var(--red)'}} className='yes'onClick={()=>{
       
       this.setState({answer:true,promp:false,viewPic:false})
       this.Helper({
        waitLoader:true,
        darkBG:true
       })

     setTimeout(() => {
       this.deletePic()
     }, 100);
   }}>Yes</button> 
   <button className='no' onClick={ this.cancelDelete } > <span 
   
   > No</span></button>
   </div>
</div>}
                   {/* PROMPT ENDS */}
                   {/* shimer is here */} 
                 { this.state.viewPic && <div className='viewLarge'>
                 {this.props.user.isAdmin &&  <div className='actionsIMGPost'>
                     <div className='update'
                     onClick={()=>{
                        this.setState({
                         openUpdate:true,
                        })
                        this.Helper({
                            darkBG:true
                        })
                    }}
                     >
                     <span><EditSvg/> </span>
                         <span>update</span>
                     </div>
                     <div className='delete'
                       onClick={()=>{
                           this.setState({
                            promp:true,
                           })
                       }}
                      >
                         <TrashSvg/>
                         <span>delete</span>
                     </div>
                 </div>}

                     <div className='caption'>
                        {this.state.singlePicObj.caption !=='' &&  <p>{this.state.singlePicObj.caption}</p>}
                     </div>
                     <div className='exit-preview'
                      onClick={()=>{
                          this.setState({
                            viewPic:false,
                            loadingPic:false,
                          })
                          this.Helper({
                            darkBG:false
                         })
                      }}
                     >
                         close
                     </div>
                      {this.state.loadingPic && <div className='shimmer'></div>}
                      <img ref={this.singleViewImg} src='' alt={this.state.singlePicObj.caption}/>
                   </div>}
               <h1> <span><StarSvg/></span><span> Photo Gallery</span></h1>
              {this.props.user.isAdmin ?   <button
                onClick={()=>{
                    this.setState({postPic:true})
                    this.Helper({
                       darkBG:true
                    })
                }} 
                >+ UPLOAD PICTURE(S)</button>:<React.Fragment> 
                     <div className='SPACE' style={{padding:'4rem'}}></div>
                    </React.Fragment>}
                
                   <div className='Gallery-container'>
                   {this.state.pictures.length===0 &&this.state.loadingPictures===false?
                    <div className='no-images' style={{textAlign:'center',marginTop:'5rem',padding:'5rem 0'}}>
                    <h3>No images uploaded at the moment!</h3>
                    </div>
                   :''}


                   
<React.Fragment>
                       {this.state.loadingPictures? <div className='newsLoader'>
             <ReactLoading type={'spin'} color={'var(--blue)'} height={'5rem'} width={'5rem'} />
                 </div>:
                                  <div className='MAIN-GRID'>
                      
                                  {this.state.pictures.length>0 && <React.Fragment>
                                        {this.state.pictures.map((p,i)=>{
                                        return    <div 
                                         onClick={()=>this.loadSingle(p._id)}
                                        className='PIC-S-G' key={i}>
                                <SingleIMG src={this.buildPicture(p)} caption={p.caption}/>
                                            </div>
                                        })}
                                      </React.Fragment>}
                              </div>
                 }
                       </React.Fragment>
   

                      
                   </div>
               </div>
               {/*starts of update post container */}

{this.state.openUpdate && <div className='updatePostContainer'>
     <div className='cancel-update'onClick={()=>{
         this.setState({openUpdate:false})
     }} >
         <CancelSvg/>
     </div>
          <h2>UPDATE CAPTION</h2>
          <div className='updatePostInside'>

           <form onSubmit={(e)=>e.preventDefault()}>
                    <div>
           <div className='lable'>caption</div>
                  <input placeholder='Enter new Caption' 
                      value={this.state.singlePicObj.caption}
                   onChange={this.handleUpdateCaption}
               
                    type='text' 
                  name='caption'/>
                           </div>
                           
                           <div className='createTitle'>
                               <button onClick={this.updatePic}>SAVE CHANGES</button>
                           </div>
           </form>

          </div>
</div>
}

        </div>
    }
}
 
export default GalleryAdmin;