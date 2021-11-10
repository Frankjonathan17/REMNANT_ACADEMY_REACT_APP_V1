import React from 'react';
import BodyImg from '../../images/body_bg.jpg';
import HeadImg from '../../images/t_news.png';
import Pdf from '../../assets/pdf.jpg'
import './index.css'
import axios from 'axios'
import ReactLoading from 'react-loading'

class Perfomance extends React.Component {

    state={
        loaderAllExams:false,
        AllExams:[]
    }


    FetchResults= async ()=>{

        try{
         this.setState({loaderAllExams:true})
         const applform =  await axios.post('/api/get/examresult')
        this.setState({AllExams:applform.data.result})
        this.setState({loaderAllExams:false})
        }
        catch(er){
            console.error(er)
            this.setState({loaderAllExams:false})
        } 
         
     }  

     componentDidMount() {
        this.FetchResults()
        window.scrollTo(0,0)
     }
     
     buildDocument=(dat)=>{
        let link = `data:${dat.document.contentType};base64,${new Buffer(dat.document.data).toString('base64')}`
     return  link;
    
    }

    render() { 
        return(
            <div className='beauty'  style={{backgroundImage:`url(${BodyImg})`}}>
            <div className="admissionProcedures">
                  <div className="admissionProcedureHead" style={{backgroundImage:`url(${HeadImg})`}}>
                    <span>Examination Results</span>
                  </div>
                   
                 {this.state.loaderAllExams===false && this.state.AllExams.length !== 0 ?
                 
                 <React.Fragment>
                 <h5>download results by clicking files below!.</h5>
                 <div className='containerRESULTS'>
                    <div className='result-class'>
                        <h4>Class Four :</h4>
                        <div className='National'>
                            <strong>National Examination resuts:</strong>
                          
                          
                          {this.state.AllExams.filter(e=>e.type==='national'&& e.type==='classFour').map((e,i)=>{
                             

                                  return  <div className='res-bx' key={i}>
                                <div> <a href={this.buildDocument(e)} download={e.document.originalFilename}><img src={Pdf} alt='exam-result doc'/> </a> </div>
                                   <div>
                                   <strong>Exam year :</strong>   {e.year}
                           
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
                               <strong>Exam year :</strong> {e.year}
                            
                                   </div>
                            </div>
                           
                          })}
                        </div>
                    </div>
               
                </div>
                 </React.Fragment>:''}
        
        {
            this.state.loaderAllExams && this.state.AllExams.length===0 ?
            <div className='loaderForm'> 
              <ReactLoading type={'spin'} color={'var(--blue)'} height={'5rem'} width={'5rem'} />
            </div>
            :''
        }

        {
            this.state.loaderAllExams===false && this.state.AllExams.length===0 ?
            <div className='NO-APPLICAITO'>
                <h4>No results uploaded at the moment!</h4> 
            </div>:''
        }
          
    </div>
</div>
        )

    }
}
 
export default Perfomance;