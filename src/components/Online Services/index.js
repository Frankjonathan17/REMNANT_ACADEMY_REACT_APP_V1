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
import {Redirect} from "react-router-dom"
import validator from 'validator'

class OnlineServices extends React.Component {

    state={
        firstName:'',
        lastName:'',
        password:'',
        secreteCode:'',
        email:'',
        loading:false,
        showLogin:true,
        showRegister:false,
        hideAll:false,
        redirect:false,
        pleaseWait:false,
    }

 
    componentDidMount(){

        if(window.localStorage.getItem('user')){
            this.setState({hideAll:true,showLogin:false,showRegister:false,showSuggest:true})
            
        }


        // document.querySelector('.overlayMain').style.background ="#00000000"
           
        setTimeout(() => {
            // document.querySelector('.overlayMain').style.background ="#00000000"
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
            autoClose: 4800,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }

handleLogOut=()=>{
    this.props.changeLogin();
    setTimeout(()=>{
        window.location.reload()
    },200)
}

    async SubmitData(data){
        // this.setState({loading:true})
        let dataChecked = data
        if(dataChecked.secreteCode){
            console.log('privateCode ni:',dataChecked.secreteCode)
            let adminCode ="1908015127"
            if(dataChecked.secreteCode===adminCode){
                dataChecked.isAdmin=true
                this.info('success','YOUR ADMIN NOW')
            }
        }

      await axios.post('/api/register',data)
        .then((answ)=>{
            this.setState({loading:false})
            if(answ.data.error){
                this.info('error',answ.data.message)
                return
            }
            this.info('success',answ.data.message)
            this.props.setUser(answ.data.profile)
            this.setState({redirect:true,
                showRegister:false,
                showLogin:false,
                hideAll:true,
                pleaseWait:true})
         
           

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
               this.setState({hideAll:true})
               this.setState({showLogin:false})
               this.setState({showRegister:false})
                 // console.log(answ.data.profile)
                //   this.props.setUser(answ.data.profile)
                    // this.setState({redirect:true})
                    let user = answ.data.profile
                    user.photo=''
                  let  user2 = JSON.stringify(user)
                    localStorage.setItem('user',user2)
                    this.props.history.push('/admin')
                return
            }
              
          })
          .catch(er=>{
              this.setState({loading:false})
              this.info('error',er.message)
              console.log('error',er)
          })
    }

    handleLoginChange= async(e)=>{
       
        e.preventDefault()
        const {password,email}=this.state;
  
        if (validator.isEmail(email)===false){
           
         
        this.info('error','Email  too short  !')
          
              

            return false;
        }
    

        else if(password.length<6 || password.length>10){
            this.info('error','Password needed between 6-10 characters')
            return false;
        }       
       else{
           
         this.loginUser({password:this.state.password,email:this.state.email.toLocaleLowerCase()})
       }
    }

    handleSubmit=(e)=>{
        
        e.preventDefault();

        const {firstName,lastName,password,secreteCode,email}=this.state;
        let loweMail = email.toLocaleLowerCase()
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
        else if(secreteCode.length>10){
            this.info('error','Secrecte code must be 10 numbers')
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
            email:loweMail
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

{this.state.redirect&& <Redirect to='/admin'/>}

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
                  {this.props.user.length!==0 && <React.Fragment>
                    <div className='login-as'>
                     <Link to='/admin'> continue as {this.props.user.firstName}?</Link>
                    </div>
                    <div className='login-as another' onClick={this.handleLogOut}>
                     <span> another account ?</span>
                    </div>
                      </React.Fragment>}
               <React.Fragment>
                   {this.state.hideAll===false &&   <div className='choose'>
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
                </div>}
               </React.Fragment>
               {this.state.loading?   <ReactLoading type={'spin'} color={'var(--blue)'} height={'4rem'} width={'4rem'} />:<div style={this.state.hideAll?{padding:'0',opacity:0}:{}} className="onlineInside">
               {this.state.pleaseWait&&<span className='waitText'>Please wait...</span>}
       <div className="headForm" style={this.styles2}>
           {/* login box */}
            {this.state.showLogin && <div className='loginContainer'> 
           <h2>LOGIN</h2>
         <br/>
         <p>(as Teacher/Admin/parent/student)</p>
         <form onSubmit={this.handleLoginChange} >
            <div className='oneInput'>
            <label htmlFor="email">*Email Address</label>
             <input  value={this.state.email} onChange={this.handleLoginInput} autoComplete='true' type='text' name='email' placeholder='eg. myemail@mail.com'/>
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
           <p>(as Teacher/Admin/parent/student)</p>
         <form onSubmit={this.handleSubmit} >
            <div className='oneInput'>
            <label htmlFor="firstName">*First Name</label>
             <input autoComplete='true' type='text' onChange={this.handleChange} name='firstName' placeholder='eg.johnson'/>
            </div>
            <div className='oneInput'>
            <label htmlFor="lastName">*Last Name</label>
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
            <label htmlFor="secreteCode">*Private Code : (you can skip this)</label>
             <input onChange={this.handleChange} autoComplete='false' type='number' 
             name='secreteCode' placeholder=' 10 numbers(only))'/>
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
