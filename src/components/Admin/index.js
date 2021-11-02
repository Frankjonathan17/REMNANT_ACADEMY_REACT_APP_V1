import React from 'react';
import './styles.css';
// import PdfPic from '../../images/file.png';
// import BeautyImg from '../../images/body_bg.jpg';
import Logo from '../../assets/REMNANT LOGO.svg';
import {ReactComponent as Notif} from '../../assets/Notification.svg';
import {ReactComponent as UserSvg} from '../../assets/User.svg';
import {ReactComponent as HomeSvg} from '../../assets/Home.svg';
import {ReactComponent as DocSvg} from '../../assets/Doc.svg';
import {ReactComponent as StuSvg} from '../../assets/Students.svg';
import {ReactComponent as TeSvg} from '../../assets/Gradu.svg';
import {ReactComponent as SettingSvg} from '../../assets/Setting.svg';
import {ReactComponent as StarSvg} from '../../assets/Star.svg';
import {ReactComponent as TaskSvg} from '../../assets/Task.svg';
import {ReactComponent as SearchSvg} from '../../assets/Search.svg';
import {ReactComponent as NavSvg} from '../../assets/Menu.svg';
import {ReactComponent as FlashSvg} from '../../assets/Flash.svg';
import {ReactComponent as TrashSvg} from '../../assets/Trash.svg';
import {ReactComponent as EditSvg} from '../../assets/Edit.svg';
import {ReactComponent as DropSvg} from '../../assets/Drop.svg';
import  studentsOne from '../../images/highclas.png';
import  studentsSix from '../../images/gorofda.jpg';
// import  studentsTwo from '../../images/middleclass.jpg'
import  studentsThree from '../../images/all-students.jpg';
import  studentsFour from '../../images/CropLasaba.jpg';
import  studentsFive from '../../images/babyclass.jpg';
import profile from '../../images/headmaster.jpg';
// import HeadImg from '../../images/t_news.png';
// import RemnantLogo from '../../assets/REMNANT LOGO.svg';
// import axios from 'axios';
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import ReactLoading from 'react-loading';
// import {Link} from 'react-router-dom'
// import {Redirect} from "react-router-dom"
class Admin extends React.Component {

    state={
     
        email:'',
        redirect:false
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

    render() { 
     return(
        <div className='admin'>
            <div className='admin-menu'>
            <div className='top_utilis'>
            <div className='imgLogo'>
                <img src={Logo} alt='logo-for-remnant'/>
            </div>
            <div className='NotifBox'>
                <span className='notfCount'>
                    <span className='count'>0</span>
                </span>
                <Notif/>
            </div>
            <div className='msgBox'>
                  <UserSvg/>
            </div>
            </div>

            {/* profile */}

            <div className='profileShortCut'>
                <div className='profileBOx'>
                    <img src={profile} alt='userPic'/>
                </div>
                <div className='profile-info'>
                    <h4>Sir John </h4>
                  <p>john12@gmail.com</p>
                  
                </div>
            </div>

            {/* dash links */}

            <div className='dashLinks'>
                <div className='dashHeadLinks'>
                    <h5>DASHBOARDS</h5>
                    <p>important admin actions</p>
                </div>
                <div className='dashLink'>
                  <span><HomeSvg/></span>   <span>Home</span>
                </div>
                <div className='dashLink'>
                <span className='docs'><DocSvg/></span>     <span>News &amp; Events</span>
                </div>
                <div className='dashLink'>
                <span className='docs'><StuSvg/></span>     <span>Students</span>
                </div>
                <div className='dashLink'>
                <span className='docs'><TeSvg/></span>  <span>Teachers</span>
                </div>
                <div className='dashLink'>
                <span className='docs'><StarSvg/></span>       <span>Gallery</span>
                </div>
                <div className='dashLink'>
                <span className='docs'><SettingSvg/></span>     <span>Settings</span>
                </div>
            </div>

            </div>
            <div className='admin-container'>
                <div className='topNavAdmin'>
                    <div className='navSvg'>
                        <NavSvg/>
                    </div>
                    <div className='SearchSvg'>
                        <SearchSvg/>
                    </div>
                    <div className='TaskSvg'>
                        <TaskSvg/>
                    </div>
                </div>
                {/* ends of top nav */}
                {/* starts welcome back box */}

                    <div className='welcomeBack'>

                        <div className='welcomePerson'>
                            <div className='Upic'>
                            <img src={profile} alt='user-pic'/>
                            </div>
                            <div className='wTexts'>
                                <h3>Welcome back John!</h3>
                                 <p> <span><FlashSvg/></span> <span>todays quote: never stop learning</span></p>
                            </div>
                        </div>
                        <div className='create-newsEvent'>
                           <span>create news or event</span>
                            </div>
                            <div className='upload-calender'>
                            <span>upload academic calender</span>
                            </div>
                    </div>
                {/* ends welcome back box */}
                {/* starts recent news events box */}
                <div className='recentNews'>
                    <h4>recently added</h4>
                    <div className='recentNewsInside'>
                        <div className='titleNewsEvents'> 
                             <div className='title'>
                                 title
                             </div>
                             <div className='date'>
                                 posted
                             </div>
                             <div className='delete'>
                                 update
                             </div>
                             <div className='edit'>
                                 delete
                             </div>
                             <div className='actionMore'>
                                 action
                             </div>
                          </div>
                          {/* start of single box */}
                            <div className='rowSingle'>
                                <div className='rowTitle'>
                                    we shall meeet the new rule at the corner of the state
                                </div>
                                
                                <div className='rowDate'>
                                   12.4.2021
                                </div>
                                
                                <div className='rowUpdate'>
                                  <EditSvg/>
                                </div>
                                
                                <div className='rowDelete'>
                                  <TrashSvg/>
                                </div>
                                <div className='rowMore'>
                                  <DropSvg/>
                                </div>
                            </div>
                          {/* ends of single box */}
                                   {/* start of single box */}
                                   <div className='rowSingle'>
                                <div className='rowTitle'>
                                    we shall meeet the new rule at the corner of the state
                                </div>
                                
                                <div className='rowDate'>
                                   12.4.2021
                                </div>
                                
                                <div className='rowUpdate'>
                                  <EditSvg/>
                                </div>
                                
                                <div className='rowDelete'>
                                  <TrashSvg/>
                                </div>
                            </div>
                          {/* ends of single box */}
                                   {/* start of single box */}
                                   <div className='rowSingle'>
                                <div className='rowTitle'>
                                    rule at the corner of the state
                                </div>
                                
                                <div className='rowDate'>
                                   12.4.2021
                                </div>
                                
                                <div className='rowUpdate'>
                                  <EditSvg/>
                                </div>
                                
                                <div className='rowDelete'>
                                  <TrashSvg/>
                                </div>
                            </div>
                          {/* ends of single box */}
                          <div className='viewAllNew sameProps'><h5>Manage All News &amp; Events</h5></div>
                    </div>
                   
                </div>
                {/* ends recent nes events box */}
                {/* starts recent on Gallery added */}
                <div className='recentGallery'>
                     <div className='recentGalleryInside'>
                         {/* single pic */}
                         <div className='picSingle'>
                             <div className='imgSingle'>
                                 <img src={profile} alt='single pic'/>
                             </div>
                             <div className='actions'>
                                 <div className='editGallery'>
                                     <EditSvg/>
                                 </div>
                                 <div className='deleteGallery'>
                                     <TrashSvg/>
                                 </div>
                             </div>
                         </div>
                         {/* ends single Pic */}
                          {/* single pic */}
                          <div className='picSingle'>
                             <div className='imgSingle'>
                                 <img src={studentsOne} alt='single pic'/>
                             </div>
                             <div className='actions'>
                                 <div className='editGallery'>
                                     <EditSvg/>
                                 </div>
                                 <div className='deleteGallery'>
                                     <TrashSvg/>
                                 </div>
                             </div>
                         </div>
                         {/* ends single Pic */}
                     
                          {/* single pic */}
                          <div className='picSingle'>
                             <div className='imgSingle'>
                                 <img src={studentsThree} alt='single pic'/>
                             </div>
                             <div className='actions'>
                                 <div className='editGallery'>
                                     <EditSvg/>
                                 </div>
                                 <div className='deleteGallery'>
                                     <TrashSvg/>
                                 </div>
                             </div>
                         </div>
                         {/* ends single Pic */}
                          {/* single pic */}
                          <div className='picSingle'>
                             <div className='imgSingle'>
                                 <img src={studentsFour} alt='single pic'/>
                             </div>
                             <div className='actions'>
                                 <div className='editGallery'>
                                     <EditSvg/>
                                 </div>
                                 <div className='deleteGallery'>
                                     <TrashSvg/>
                                 </div>
                             </div>
                         </div>
                         {/* ends single Pic */}
                          {/* single pic */}
                          <div className='picSingle'>
                             <div className='imgSingle'>
                                 <img src={studentsFive} alt='single pic'/>
                             </div>
                             <div className='actions'>
                                 <div className='editGallery'>
                                     <EditSvg/>
                                 </div>
                                 <div className='deleteGallery'>
                                     <TrashSvg/>
                                 </div>
                             </div>
                         </div>
                         {/* ends single Pic */}
                          {/* single pic */}
                          <div className='picSingle'>
                             <div className='imgSingle'>
                                 <img src={studentsSix} alt='single pic'/>
                             </div>
                             <div className='actions'>
                                 <div className='editGallery'>
                                  <span>Edit</span><span><EditSvg/></span>
                                 </div>
                                 <div className='deleteGallery'>
                                 <span>Delete</span><span><TrashSvg/></span>

                                 </div>
                             </div>
                         </div>
                         {/* ends single Pic */}
                        </div>
                        <div className='manageAllPic sameProps'><h5>Manage Gallery</h5></div>
                </div>
                {/* ends recent on Gallery added */}

            </div>
        
        </div>
     )
    }
}
 
export default Admin;
