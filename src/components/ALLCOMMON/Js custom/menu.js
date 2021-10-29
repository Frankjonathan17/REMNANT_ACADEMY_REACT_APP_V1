const mobileMenu= document.querySelector('.mobileMenu');
const before = document.querySelector('.before');
const after = document.querySelector('.after');
const infoHeader = document.querySelector('.infoHeader');
const lineTop = document.querySelector('.lineTop');
const lineBottom = document.querySelector('.lineBottom')
const lineLeft = document.querySelector('.lineLeft');
const lineRight = document.querySelector('.lineRight');
const MenuOne = document.querySelector('.headingMenu .one');
const MenuTwo = document.querySelector('.headingMenu .two');
const MenuThree = document.querySelector('.headingMenu .three');
const MenuTwoSpan = document.querySelector('.headingMenu .two > span');
const menues = document.querySelector('.menues');
let hamb = document.querySelector('.hamburger');



let BigMlinks = document.querySelectorAll('.m-link');
BigMlinks.forEach(l=>{
  l.onclick=function(e){
   e.preventDefault();
  
   let link = e.target.getAttribute('href')
   console.log(link)

   window.open(link,'_Parent')
    
  }
})


window.addEventListener('keydown',function(e){
    if(e.key=='M'|| e.key=='m'){
            menuHandle();    
    }
  })
 

  
 function menuHandle(){
    let time;
 
   hamb.style.pointerEvents='none'
   if(window.innerWidth>mainBreakPoint){
      time = 500
   }
   else{
     time = 1500
   }
 
   setTimeout(() => {
     hamb.style.pointerEvents='inherit'
   }, time);
 
   if(HiddenMenuState===false){
     if(window.innerWidth>=mainBreakPoint){
       document.querySelector('.MainHeadWrap .hiddenMenu').style.height='8rem'
      
     }
    
     document.querySelector('.hamburger').style.background ='var(--blue)';
     document.querySelector('.hamburger').style.background ='var(--blue)';
     document.querySelector('.bar-1').style.transform=' translateY(.8rem)rotate(-47deg)';
     document.querySelector('.bar-2').style.transform=' translatex(-1rem)rotate(0deg)';
     document.querySelector('.bar-2').style.opacity=0;
     document.querySelector('.bar-3').style.transform=' translateY(-.9rem)rotate(47deg)';
     HiddenMenuState=true;
 
  if(window.innerWidth<mainBreakPoint){
    document.body.style.overflow='hidden'
    timeline =  new gsap.timeline();
 
     timeline.
     to(infoHeader,{
       marginTop:'-4rem',
       duration:.5,
       ease:'expo.out',
       delay:0
     },'same')
     .to(before,{
       x:'-100vw',
       duration:.5,
       ease:'expo.out',
       delay:0
     },'same')
     .to(after,{
       x:'-100vw',
       duration:.5,
       ease:'expo.out',
       delay:0.05
     },'same')
     .to(mobileMenu,{
       x:'-100vw',
       duration:.5,
       ease:'expo.out',
       delay:0.12
     },'same')
     
     // ending lines animation
     // starting header animation
     .to(MenuOne,{
       width:'100%',
       left:0,
       duration:1,
       ease:'expo.out',
       delay:0.32
     },'same')
     .to(MenuTwo,{
       width:'100%',
       left:0,
       duration:1,
       ease:'expo.out',
       delay:0.4
     },'same')
     .to(MenuThree,{
       width:'100%',
       left:0,
       duration:1,
       ease:'expo.out',
       delay:0.42
     },'same')
     .to(MenuTwoSpan,{
         opacity:1,
       duration:.48,
       ease:'expo.out',
       delay:0.425
     },'same')
     .to(MenuThree,{
       width:'0%',
       left:'100%',
       duration:1,
       ease:'expo.out',
       delay:0.48
     },'same')
     .to(menues,{
       opacity:1,
       x:'0',
       duration:1,
       ease:'expo.out',
       delay:0.48
     },'same')
 
  }
   }else{
 
     if(window.innerWidth>=mainBreakPoint){
       document.querySelector('.MainHeadWrap .hiddenMenu').style.height='0rem'
     }
 
     document.querySelector('.bar-1').style.transform=' translateY(0rem)rotate(0deg)';
     document.querySelector('.bar-2').style.transform=' translatex(0rem)rotate(0deg)';
     document.querySelector('.bar-2').style.opacity=1;
     document.querySelector('.bar-3').style.transform=' translateY(0rem)rotate(0deg)';
     HiddenMenuState=false;
       document.querySelector('.hamburger').style.background ='var(--dark-blue)';
 
       if(window.innerWidth<mainBreakPoint){
         document.body.style.overflow='auto'
         timeline.reverse()
       }
 
   }
 
 }
 
   hamb.onclick=menuHandle
//  autoclick hamb menu on desktop only

if(window.innerWidth>mainBreakPoint){
 if(window.location.href.includes('index')){
  alert(window.localStorage.getItem('visited'));
     if(visitTruth===false){
      setTimeout(() => {
        hamb.click()
      }, 0.1);
     }
 }
}