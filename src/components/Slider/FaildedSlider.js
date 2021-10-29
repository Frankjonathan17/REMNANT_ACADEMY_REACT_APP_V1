import React from 'react';
import './index.css'



class Slider extends React.Component {

  

  componentDidMount(){
setTimeout(() => {
    let SLIDERR = document.getElementById('wowslider-container0');
    let clone = SLIDERR.cloneNode(true);
    clone.style.display='block'
 // HATUA YA PILI KUIWEKA CLONED NA KU-FIRE SCRIPT ZAKE
    let app = document.querySelector('.slider > .inside');
    let div = document.createElement('div');
    let root = document.getElementById('refSlide');
    div.className='wo'
    app.appendChild(div);

    app.insertBefore(div,root);
  setTimeout(() => {
    let dav = document.querySelector('.wo');

    dav.replaceWith(clone);

  }, 1);

    let jEngine = document.createElement('script');
    let Engine1 = document.createElement('script');
    let Engine2 = document.createElement('script');
    jEngine.className='slideScript'
    Engine1.className='slideScript'
    Engine2.className='slideScript';
    Engine1.id='sumbufu'
    jEngine.src="engine0/jquery.js";
    Engine1.src="engine0/wowslider.js"
    Engine2.src="engine0/script.js"
    let ExistScripts = document.querySelectorAll('.slideScript');
    if(ExistScripts.length>1){
      ExistScripts.forEach(e=>e.remove())
  }
   setTimeout(() => {
     
 
  document.body.appendChild(jEngine)

  window.innerWidth='100vw'
   console.log('boooooooooooooom')

    setTimeout(() => {
      document.body.appendChild(Engine1)
      console.log('SUMBUFU ADDED 😠')
    }, .05);
    setTimeout(() => {
      document.body.appendChild(Engine2)
      console.log('LAST ADDED 🤷‍♀️')
    }, .09);
   }, 0.1);
    
}, 1);


 
  }




  componentWillUnmount(){
    let ExistScripts = document.querySelectorAll('.slideScript');
    console.log('we are unmounting ',ExistScripts)
  //   if(ExistScripts.length>1){
  //     ExistScripts.forEach(e=>e.remove())
  // }
  }  

  render(){
    return (
      <React.Fragment>
      </React.Fragment>
    );
  }}


export default  Slider;
