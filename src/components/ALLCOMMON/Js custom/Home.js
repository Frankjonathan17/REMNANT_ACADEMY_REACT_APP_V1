const loadHome=()=>{
  
let closeVideo = document.querySelector('html .emmbed .closeVideo');
let introVideo = document.querySelector('html .videoBox .left');
let emmbed= document.querySelector('.emmbed');
let video = document.createElement('video');

function openingVideo(){
  
  introVideo.removeEventListener('click', openingVideo)
  emmbed.classList.add('openVideo')
  emmbed.querySelector('iframe').style.display='none';
  video.src = './videos/remnant .mp4';
  video.style.width='100%'
  video.style.height='100%'
  video.setAttribute('autoplay', true);
  video.setAttribute('controls', true);
  video.setAttribute('loop', true);
  video.style.zIndex=10000
  video.style.position='relative'
 

  emmbed.appendChild(video)


  console.log('intro opened')
  

}
introVideo.addEventListener('click', openingVideo );

closeVideo.onclick=function(){

  emmbed.classList.remove('openVideo')
 emmbed.classList.add('closingVideo')
 emmbed.removeChild(video)

 setTimeout(() => {
  introVideo.addEventListener('click', openingVideo )
 }, 500);

}

}

window.addEventListener('load', loadHome);


  // swiper slider
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: false,
  
    // If we need pagination
    pagination:false,
  

  
 
  });
  
  