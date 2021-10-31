import React from 'react';
import './index.css'
import PdfPic from '../../images/file.png';
import BeautyImg from '../../images/body_bg.jpg';
import HeadImg from '../../images/t_news.png';
import RemnantLogo from '../../assets/REMNANT LOGO.svg';
class OnlineServices extends React.Component {


 
    componentDidMount(){


        document.querySelector('.overlayMain').style.background ="#00000000"
           
        setTimeout(() => {
            this.props.setOnlineService(true)
        }, 2);

        setTimeout(() => {
            window.scrollTo(0,0)
           }, 5);
    }
    
    componentWillUnmount(){
        this.props.setOnlineService(false);
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        console.log('submitting')
    }
    
    render() { 
     return <div className='onlinePortal beautyBg' style={this.styles}>
            <div className='remnantLogoBox'>
                <img src={RemnantLogo} alt='remnantLogo'/>
            </div>
<div className="onlineInside">
       <div className="headForm" style={this.styles2}>
         <h2>CREATE NEW ACCOUNT</h2>
           <p>(as Teacher/Admin)</p>
         <form onSubmit={this.handleSubmit} >
            <div className='oneInput'>
            <label htmlFor="firstName">First Name</label>
             <input autoComplete type='text' name='firstName' placeHolder='eg.johnson'/>
            </div>
            <div className='oneInput'>
            <label htmlFor="secondName">Second Name</label>
             <input autoComplete type='text' name='secondName' placeHolder='eg.Andrew'/>
            </div>
            <div className='oneInput'>
            <label htmlFor="email">Email Address</label>
             <input autoComplete type='email' name='email' placeHolder='eg. myemail@mail.com'/>
            </div>
            <div className='oneInput'>
            <label htmlFor="password">New Password</label>
             <input autoComplete type='password' name='password'/>
            </div>
            <div className='oneInput'>
            <label htmlFor="password">Repeat Password</label>
             <input autoComplete={false} type='password' name='password'/>
            </div>
            <div className='oneInput'>
            <label htmlFor="number">Private Code</label>
             <input autoComplete={false} type='number' name='number' placeHolder='Enter Teachers private code'/>
            </div>
            <div className='oneInput'>
               <button type='submit'>Register</button>
            </div>
         </form>
       </div>
   
       {/* ends of single post box */}
     
 </div>

        </div>;
    }
}
 
export default OnlineServices;
