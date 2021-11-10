import React from 'react';
// import {Link} from 'react-router-dom'
// import AllStudntsImg from '../../images/all-students.jpg';
// import MiddleClassIMG from '../../images/middleclass.jpg';
// import HighClassImg from '../../images/highclas.png';
// import BabyClassImg from '../../images/babyclass.jpg';
import HeadImg from '../../images/all-students.jpg';
import BodyImg from '../../images/body_bg.jpg';
import axios from 'axios'
import './index.css'


class Gallery extends React.Component {


           state={
               pictures:[],
               loadingPictures:false,
               selectedPic:{caption:'hello',start:0},
               openPop:false
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

     
    buildPicture=(dat)=>{
        if(!dat.photo || dat.photo===null || dat.photo===undefined) return false

        let binary = `data:image/png;base64,`+ new Buffer(dat.photo.data).toString('base64')
 return  binary;

}
    componentDidMount(){

  this.fetchPics()
      

        setTimeout(() => {
            window.scrollTo(0,0)
           }, 0);
    }


    handleSlide =(direction)=>{
        let currentIndex = this.state.pictures.indexOf(this.state.selectedPic)        
           if(direction==='next'){

                if(currentIndex +1 === this.state.pictures.length) currentIndex=-1

                this.setState({selectedPic:this.state.pictures[currentIndex+1]})
           }
           else{

            if(currentIndex === 0) currentIndex=this.state.pictures.length

            this.setState({selectedPic:this.state.pictures[currentIndex-1]})

           }
        
    }
    render() { 
        return <div className='beauty Gallery' style={{backgroundImage:`url(${BodyImg})`}}>
            <div className="GalleryInner">
            {  this.state.openPop &&  <div className='showCaseBoxGallery'>

                   <div className='showCaseInside'>
                       <div className='caption'> <p>{this.state.selectedPic.caption}</p> </div>
                       <div onClick={()=>this.setState({openPop:false})} className='closeMe'>CLOSE</div>
                       <div onClick={()=>this.handleSlide('prev')} className='decrement controls'> &lt; </div>
                       <div onClick={()=>this.handleSlide('next')} className='increment controls'> &gt; </div>
                       
                       <img src={this.buildPicture(this.state.selectedPic)} alt={this.state.selectedPic.caption}/>
                   </div>

                </div>}
       <div className="GHead" style={{backgroundImage:`url(${HeadImg})`}}>
           <h2>PHOTO GALLERY</h2>
       </div>
      <div className="insideGallery">
       <div className='GRID-GALLERY'>
       {this.state.loadingPictures &&   <div className='shimmer2'>
            <h4>Preparing Pictures...</h4>
        </div>}
      {this.state.pictures.length===0 && this.state.loadingPictures===false?
      <div className='NOthing' style={{position:'absolute',color:"var(--reded)"}}>
      <h4>  No pictures uploaded at the moment!</h4>
    </div>:''  
    }
       {this.state.pictures.length>0 && <React.Fragment>
                                        {this.state.pictures.map((p,i)=>{
                                        return    <div 
                                        onClick={()=>this.setState({openPop:true,selectedPic:p})}
                                        className='PIC-S-G' key={i}>
                                <img src={this.buildPicture(p)} alt='pic' caption={p.caption}/>
                                            </div>
                                        })}
                                      </React.Fragment>}
       </div>
      </div>
    
   </div>




        </div>;
    }
}
 
export default Gallery;