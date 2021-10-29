import React from 'react';
import InfoHeader from '../Info Header';
import MainHeader from '../Main Header';

class Header extends React.Component {

           constructor(props){
              super(props)
               this.head = React.createRef()      
           }


    menuHandle=()=>{
      console.log('menu clicked')
    }

    handleEnterMouse=()=>{
          if(window.innerWidth>=868){
            document.querySelector('.overlayMain').style.background='#00000045';
          }
          else return null
    }

    handleLeaveMouse=()=>{
        document.querySelector('.overlayMain').style.background='rgb(0 0 0 / 0%)';
    }


    render() { 
        return <header className='header'ref={this.head} 
          onMouseEnter={this.handleEnterMouse}
          onMouseLeave={this.handleLeaveMouse}>
            <InfoHeader/>
            <MainHeader />
      
        </header>;
    }
}
 
export default Header;