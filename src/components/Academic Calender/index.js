import React from 'react';
import './index.css'
import ReactLoading from 'react-loading'
import axios from 'axios'

class AcademicCalender extends React.Component {
  

  state={
    loadingAcademic:false,
    academicCalender:[]
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

  buildDocument=(dat)=>{

    let link = `data:${dat.document.contentType};base64,${new Buffer(dat.document.data).toString('base64')}`
   return  link;

    }

    componentDidMount() {
      this.FetchCalender()
    }

    render() { 
  
        return (
            <div className="academicCalender">
                <h2>ACADEMIC CALENDER 
                </h2>
                {this.state.academicCalender.length !== 0 && this.state.loadingAcademic ===false?
             <React.Fragment>
          
             {this.state.academicCalender.map((c,i)=>{
            return <React.Fragment key={i}>
                <div className='emmbedContainer'>
                 <embed style={{width:'100%',height:"100%"}}  type="application/pdf" src={this.buildDocument(c)} key={i}>
              
              </embed>
              </div>
              <div className='download-ac-calender'>
             {/* <a href={this.buildDocument(c)} download={c.document.originalFilename}><u>download calender</u> </a>  */}
              </div>
            </React.Fragment>

             })}

         </React.Fragment> :''
       }
             
             {this.state.loadingAcademic===false && this.state.academicCalender.length ===0?
            <h4 style={{margin:'4rem 0',background:'white',padding:'8rem 1.8rem',borderRadius:'.5rem',color:'var(--reded)'}}>No calender Uploaded at the moment!</h4>:'' 
            }
     {this.state.academicCalender.length !== 0 &&  <div className="downloadCalender">
      <span>
      <a href={this.buildDocument(this.state.academicCalender[0])} download={this.state.academicCalender[0].document.originalFilename}>
          <span>Click to Download Calender&gt;&gt;</span>
        </a>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>

      </span>
    </div>}

    {this.state.loadingAcademic && this.state.academicCalender.length===0 ? <div className='LOADERl'>

    <ReactLoading type={'spin'} color={'var(--blue)'} height={'5rem'} width={'5rem'} />
    </div>:''}
    
    </div>
   
        )
    }
}
 
export default AcademicCalender;