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
        loading:false,
        showLogin:true,
        showRegister:false
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
        console.log('unmounted')
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
            if(answ.data.error){
                this.info('error',answ.data.message)
                return
            }
            this.info('success',answ.data.message)
          
        
        })

        .catch(er=>{
            this.setState({loading:false})
            this.info('error',er.message)
            console.error('error',er)
        })
    }


    async loginUser(data){
        data.email.trim()
        this.setState({loading:true})
        await axios.post('/api/login',data)
          .then((answ)=>{
              //console.log('answer ',answ)
              this.setState({loading:false})
              if(answ.data.error){
                  this.info('error',answ.data.error)
                  return
              }
              if(answ.data.redirect){
                this.info('success','Logging in successfully!') 
                setTimeout(() => {
                    console.log('time to redirect')
                }, 1000);
                return
            }
              
          })
          .catch(er=>{
              this.setState({loading:false})
              this.info('error',er.message)
              console.log('error',er)
          })
    }

    handleLoginChange=(e)=>{
        e.preventDefault()
        const {password,email}=this.state;
        if(email.length<5 || email.length===0){
            this.info('error','Enter a Valid Email')
            return false;
        }
        else if(password.length<6 || password.length>10){
            this.info('error','Password needed between 6-10 characters')
            return false;
        }       
       else{
           
         this.loginUser({password:this.state.password,email:this.state.email})
       }
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
        else if(email.length<5 || email.length===0){
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
    handleLoginInput=(e)=>{
       
        this.setState({[e.target.name]:e.target.value});
       
     
   }

   onEmailChange(event) {
    this.setState({
      email: event.target.value
    })

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
            <div className='choose'>
                    <div className='login'onClick={()=>this.setState({showLogin:true,showRegister:false})}>
                       {this.state.showLogin && <span></span>}
                        Login Now
                    </div>
                    <div className='createAccount'
                    onClick={()=>this.setState({showLogin:false,showRegister:true})}
                    >
                    {this.state.showRegister && <span></span>}
                        Create Account
                    </div>
                </div>
               {this.state.loading?   <ReactLoading type={'spin'} color={'var(--blue)'} height={'4rem'} width={'4rem'} />:<div className="onlineInside">
       <div className="headForm" style={this.styles2}>
           {/* login box */}
            {this.state.showLogin && <div className='loginContainer'> 
           <h2>LOGIN</h2>
         <br/>
           <p>(as Teacher/Admin)</p>
         <form onSubmit={this.handleLoginChange} >
            <div className='oneInput'>
            <label htmlFor="email">*Email Address</label>
             <input value={this.state.email} onChange={this.handleLoginInput} autoComplete='true' type='text' name='email' placeholder='eg. myemail@mail.com'/>
            </div>
            <div className='oneInput'>

            <label htmlFor="password">*Password</label>
             <input value={this.state.password} autoComplete='true' type='password' onChange={this.handleLoginInput} name='password'/>
            </div>
            <div className='oneInput'>
               <button type='submit'>Login</button>
            </div>
         </form>
         </div>}
           {/* create account box */}
           {this.state.showRegister&&<div className='createAccountContainer'> 
         <h2>NEW ACCOUNT</h2>
         <br/>
           <p>(as Teacher/Admin)</p>
         <form onSubmit={this.handleSubmit} >
            <div className='oneInput'>
            <label htmlFor="firstName">*First Name</label>
             <input autoComplete='true' type='text' onChange={this.handleChange} name='firstName' placeholder='eg.johnson'/>
            </div>
            <div className='oneInput'>
            <label htmlFor="lastName">*Second Name</label>
             <input autoComplete='true' type='text'onChange={this.handleChange} name='lastName' placeholder='eg.Andrew'/>
            </div>
            <div className='oneInput'>
            <label htmlFor="email">*Email Address</label>
             <input onChange={this.handleChange} autoComplete='true' type='email' name='email' placeholder='eg. myemail@mail.com'/>
            </div>
            <div className='oneInput'>
            <label htmlFor="password">*New Password</label>
             <input autoComplete='true' type='password' onChange={this.handleChange} name='password'/>
            </div>
            <div className='oneInput'>
            <label htmlFor="secreteCode">*Private Code</label>
             <input onChange={this.handleChange} autoComplete='false' type='number' name='secreteCode' placeholder='Enter Teachers private code'/>
            </div>
            <div className='oneInput'>
               <button type='submit'>Register</button>
            </div>
         </form>
         </div>}
       </div>
   
       {/* ends of single post box */}
     
 </div>}


        </div>;
    }
}
 
export default OnlineServices;
