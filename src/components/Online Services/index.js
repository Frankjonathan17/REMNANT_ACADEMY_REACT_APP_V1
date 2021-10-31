import React from 'react';
import './index.css'
// import PdfPic from '../../images/file.png';
// import BeautyImg from '../../images/body_bg.jpg';
// import HeadImg from '../../images/t_news.png';
import RemnantLogo from '../../assets/REMNANT LOGO.svg';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactLoading from 'react-loading';
import {Link} from 'react-router-dom'
class OnlineServices extends React.Component {

    state={
        firstName:'',
        lastName:'',
        password:'',
        secreteCode:'',
        email:'',
        loading:false
    }

 
    componentDidMount(){


        document.querySelector('.overlayMain').style.background ="#00000000"
           
        setTimeout(() => {
            document.querySelector('.overlayMain').style.background ="#00000000"
            this.props.setOnlineService(true)
        }, 2);

        setTimeout(() => {
            window.scrollTo(0,0)
           }, 5);
    }
    
    componentWillUnmount(){
        this.props.setOnlineService(false);
    }

    info=(type,message)=>{
        toast[type](message, {
            position: "top-center",
            autoClose: 5800,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }

    async SubmitData(data){
        this.setState({loading:true})
      await axios.post('/api/register',data)
        .then((answ)=>{
            console.log('answer ',answ)
            this.setState({loading:false})
            this.info('success','Account created successfully!')
        })
        .catch(er=>{
            this.setState({loading:false})
            this.info('error','Kuna tatizo la network')
            console.log('error',er)
        })
    }

    handleSubmit=(e)=>{
        
        e.preventDefault();
        const {firstName,lastName,password,secreteCode,email}=this.state;
        if(firstName.length<3 || firstName.length===0){
            this.info('error','First name needed atleast 3 characters')
            return false;
        }
        else if(lastName.length<3 || lastName.length===0){
            this.info('error','Last name needed atleast 3 characters')
            return false;
        }
        else if(email.length<5 || lastName.length===0){
            this.info('error','Enter a Valid Email')
            return false;
        }
        else if(secreteCode.length<4 || secreteCode.length>4){
            this.info('error','Secrecte code must be 4 numbers')
            return false;
        }
        else if(password.length<6 || password.length>10){
            this.info('error','Password needed between 6-10 characters')
            return false;
        }
         
        let data = {
            firstName,
            lastName,
            secreteCode,
            password,
            email
        }


         this.SubmitData(data)
        
    }
    

    handleChange=(e)=>{
       
         this.setState({[e.target.name]:e.target.value});
      
    }


    render() { 
     return <div className='onlinePortal beautyBg' style={this.styles}>

         <Link to='/' className='backHome'>  Back Home </Link>
                <ToastContainer
                position="top-center"
                autoClose={5800}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                />
            <div className='remnantLogoBox'>
                <img src={RemnantLogo} alt='remnantLogo'/>
            </div>
               {this.state.loading?   <ReactLoading type={'spin'} color={'var(--blue)'} height={'4rem'} width={'4rem'} />:<div className="onlineInside">
       <div className="headForm" style={this.styles2}>
         <h2>CREATE NEW ACCOUNT</h2>
           <p>(as Teacher/Admin)</p>
         <form onSubmit={this.handleSubmit} >
            <div className='oneInput'>
            <label htmlFor="firstName">First Name</label>
             <input autoComplete='true' type='text' onChange={this.handleChange} name='firstName' placeholder='eg.johnson'/>
            </div>
            <div className='oneInput'>
            <label htmlFor="lastName">Second Name</label>
             <input autoComplete='true' type='text'onChange={this.handleChange} name='lastName' placeholder='eg.Andrew'/>
            </div>
            <div className='oneInput'>
            <label htmlFor="email">Email Address</label>
             <input onChange={this.handleChange} autoComplete='true' type='email' name='email' placeholder='eg. myemail@mail.com'/>
            </div>
            <div className='oneInput'>
            <label htmlFor="password">New Password</label>
             <input autoComplete='true' type='password' onChange={this.handleChange} name='password'/>
            </div>
            <div className='oneInput'>
            <label htmlFor="secreteCode">Private Code</label>
             <input onChange={this.handleChange} autoComplete='false' type='number' name='secreteCode' placeholder='Enter Teachers private code'/>
            </div>
            <div className='oneInput'>
               <button type='submit'>Register</button>
            </div>
         </form>
       </div>
   
       {/* ends of single post box */}
     
 </div>}


        </div>;
    }
}
 
export default OnlineServices;
