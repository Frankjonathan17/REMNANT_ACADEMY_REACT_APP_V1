import React from 'react';
import './index.css'

class BellSchedules extends React.Component {
  componentDidMount()
  {
      setTimeout(() => {
          window.scrollTo(0,0)
         }, 5);
  }
    render() { 
        return <React.Fragment>
 <div className="bellSchedules">
   
   <h1>BELL SCHEDULES</h1>

   <table className="tableDesktop">
     <thead>
       <tr>
         <th className="day">TIME</th>
         <th className="time">8:00-10:00am</th>
         <th className="time">10:00-10:30am</th>
         <th className="time">10:30-12:30pm</th>
         <th className="time">12:30-1:00pm</th>
         <th className="time">1:00-2:00pm</th>
       </tr>
       <tr>
         <th className="day">MONDAY</th>
         <th className="activity">clasess</th>
         <th className="activity">short break</th>
         <th className="activity">clasess</th>
         <th className="activity">short break</th>
         <th className="activity">clasess</th>
       </tr>
       
       <tr>
         <th className="day">TUESDAY</th>
         <th className="activity2">clasess</th>
         <th className="activity2">short break</th>
         <th className="activity2">clasess</th>
         <th className="activity2">short break</th>
         <th className="activity2">clasess</th>
        
       </tr>
       <tr>
         <th className="day">WEDNESDAY</th>
         <th className="activity">clasess</th>
         <th className="activity">short break</th>
         <th className="activity">clasess</th>
         <th className="activity">short break</th>
         <th className="activity">clasess</th>
       </tr>
       <tr>
         <th className="day">THURSDAY</th>
         <th className="activity2">clasess</th>
         <th className="activity2">short break</th>
         <th className="activity2">clasess</th>
         <th className="activity2">short break</th>
         <th className="activity2">clasess</th>
       </tr>
       <tr>
         <th className="day">FRIDAY</th>
         <th className="activity">clasess</th>
         <th className="activity">short break</th>
         <th className="activity">clasess</th>
         <th className="activity">short break</th>
         <th className="activity">____</th>
       </tr>
     </thead>
    
   </table>


   <table className="tableMobile">
     <thead>
       <tr>
         <th className="day">TIME</th>
         <th className="day">MONDAY</th>
         <th className="day">TUESDAY</th>
        
       </tr>
       <tr>
       
         <th className="time">8:00-10:00am</th>
         <th className="activity2">clasess</th>
         <th className="activity2">clasess</th>
       </tr>
       
       <tr>
        
         <th className="time">10:00-10:30am</th>
         <th className="activity2">short break</th>
         <th className="activity2">short break</th>
       
        
       </tr>
       <tr>
         <th className="time">10:30-12:30pm</th>
         <th className="activity2">clasess</th>
         <th className="activity2">clasess</th>
         
       </tr>
       <tr>
         <th className="time">12:30-1:00pm</th>
         <th className="activity2">short break</th>
         <th className="activity2">short break</th>
       </tr>
       <tr>
         <th className="time">1:00-2:00pm</th>
         <th className="activity2">clasess</th>
         <th className="activity2">clasess</th>
       </tr>
     </thead>
    
   </table>

   <table className="tableMobile">
     <thead>
       <tr>
         <th className="day">TIME</th>
         <th className="day">WEDNESDAY</th>
         <th className="day">THURSDAY</th>
        
       </tr>
       <tr>
       
         <th className="time">8:00-10:00am</th>
         <th className="activity2">clasess</th>
         <th className="activity2">clasess</th>
       </tr>
       
       <tr>
        
         <th className="time">10:00-10:30am</th>
         <th className="activity2">short break</th>
         <th className="activity2">short break</th>
       
        
       </tr>
       <tr>
         <th className="time">10:30-12:30pm</th>
         <th className="activity2">clasess</th>
         <th className="activity2">clasess</th>
         
       </tr>
       <tr>
         <th className="time">12:30-1:00pm</th>
         <th className="activity2">short break</th>
         <th className="activity2">short break</th>
       </tr>
       <tr>
         <th className="time">1:00-2:00pm</th>
         <th className="activity2">clasess</th>
         <th className="activity2">clasess</th>
       </tr>
     </thead>
    
   </table>
         <table className="tableMobile">
           <thead>
             <tr>
               <th className="day">TIME</th>
               <th className="day">FRIDAY</th>
               <th className="day  friday">__________</th>
              
             </tr>
             <tr>
             
               <th className="time">8:00-10:00am</th>
               <th className="activity2">clasess</th>
           
             </tr>
             
             <tr>
              
               <th className="time">10:00-10:30am</th>
               <th className="activity2">short break</th>    
              
             </tr>
             <tr>
               <th className="time">10:30-12:30pm</th>
               <th className="activity2">clasess</th>
               
             </tr>
             <tr>
               <th className="time">12:30-1:00pm</th>
               <th className="activity2">short break</th>
             </tr>
             <tr>
               <th className="time">1:00-2:00pm</th>
               <th className="activity2">clasess</th>
             </tr>
           </thead>
          
         </table>
</div>

<div className="bellSpaceBottom">

</div>

        </React.Fragment>;
    }
}
 
export default BellSchedules;