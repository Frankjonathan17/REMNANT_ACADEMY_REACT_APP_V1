import React from 'react';
import BodyImg from '../../images/body_bg.jpg';
import HeadImg from '../../images/t_news.png';
import './index.css'
import axios from 'axios'
import ReactLoading from 'react-loading'

class ApplicationForm extends React.Component {

    state={
        loaderApplicationForm:false,
        ApplicationForm:[]
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

     componentDidMount() {
        this.FetchAppForm()
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
                    <span>Application Form</span>
                  </div>
                   
                 {this.state.loaderApplicationForm===false && this.state.ApplicationForm.length !== 0 ?
                 
                 <React.Fragment>
                 <h5>download application form by clicking  a link below!.</h5>
                  <div className='APPLICAITO'>
                  <a href={this.buildDocument(this.state.ApplicationForm[0])} download='Remnant Application Form' > download form </a>
                  </div>
                 </React.Fragment>:''}
        
        {
            this.state.loaderApplicationForm && this.state.ApplicationForm.length===0 ?
            <div className='loaderForm'> 
              <ReactLoading type={'spin'} color={'var(--blue)'} height={'5rem'} width={'5rem'} />
            </div>
            :''
        }

        {
            this.state.loaderApplicationForm===false && this.state.ApplicationForm.length===0 ?
            <div className='NO-APPLICAITO'>
                <h4>No application Form Uploaded at the moment!</h4> 
            </div>:''
        }
          
    </div>
</div>
        )

    }
}
 
export default ApplicationForm;