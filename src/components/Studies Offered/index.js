import React from 'react';
import './index.css'
class StudiesOffered extends React.Component {

    componentDidMount(){
        const tabs = document.querySelectorAll('.tab');
        const tableContent = document.querySelector('.tableContent')
        const h = tableContent.querySelector('h3');
        const p = tableContent.querySelector('p')
        
       let engshBtn = document.querySelector('#eng')
      setTimeout(() => {
        engshBtn.click();
      }, 0.1);
        function checkTab(e){
          //  remove any of current active tab state
          tabs.forEach(t=>{
            if(t.classList.contains('activeTab')){
              t.classList.remove('activeTab')
            }

            // reading a tabId
            let id = e.target.id;
            if(id==='eng'){
               h.innerText='ENGLISH'
               p.innerText='is a West Germanic language of the Indo-European language family, originally spoken by the inhabitants of early medieval England. It is named after the Angles, one of the ancient Germanic peoples that migrated to the area of Great Britain that later took their name, England. Both names derive from Anglia, a peninsula on the Baltic Sea which is not to be confused with East Anglia, the Eastern part of England which comprises the counties of Norfolk, Suffolk and Essex. English is most closely related to Frisian and Low Saxon, while its vocabulary has been significantly influenced by other Germanic languages, particularly Old Norse (a North Germanic language), as well as by Old Norman, French and Latin'
            }
            else if(id==='sw'){
               h.innerText='SWAHILI'
               p.innerText='also known by its native name Kiswahili, is a Bantu language and the native language of the Swahili people. It is one of two official languages of the East African Community countries, namely Burundi, Kenya, Rwanda, South Sudan, Tanzania, and Uganda.  Swahili is also one of the working languages of the African Union and of the Southern African Development Community. The exact number of Swahili speakers, be they native or second-language speakers, is estimated to be between 50 million to 150 million. Basically, Swahili being a trade language is very useful in business. ... Swahili will definitely make it easier for one to build relationships and trust when working with people who speak Swahili, and it`s a bit more efficient than trying to learn many other different tribal languages of East and Central Africa.'
            }

            else if(id==='geo'){
               h.innerText='GEOGRAPHY'
               p.innerText='Geography is a field of science devoted to the study of the lands, features, inhabitants, and phenomena of the Earth and planets. Geography helps us investigate and to think critically and creatively about the complexities of places, and different views and feelings relating to places. Geography is studied through enquiry, this requires the formulation of effective questions. Fieldwork and outdoor education are essential to geography'
            }
            else if(id==='sc'){
               h.innerText='SCIENCE'
               p.innerText='Science is the study of the nature and behavior of natural things and the knowledge that we obtain about them. ... A science is a particular branch of science such as physics, chemistry, or biology. Physics is the best example of a science which has developed strong, abstract theories.  Science generates solutions for everyday life and helps us to answer the great mysteries of the universe. In other words, science is one of the most important channels of knowledge. ... Science, technology and innovation must drive our pursuit of more equitable and sustainable development.'
            }

            else if(id==='math'){
               h.innerText='MATHEMATICS'
               p.innerText='the abstract science of number, quantity, and space, either as abstract concepts ( pure mathematics ), or as applied to other disciplines such as physics and engineering ( applied mathematics ).   Mathematics makes our life orderly and prevents chaos. Certain qualities that are nurtured by mathematics are power of reasoning, creativity, abstract or spatial thinking, critical thinking, problem-solving ability and even effective communication skills"a taste for mathematics'
            }

            else if(id==='hist'){
               h.innerText='HISTORY'
               p.innerText='is the study of past.In history we study about the past life of people, we come to know about the reigns of various Kings how they ruled their failures their achievements and their conquests.It also gives us an idea about the state of art, literature ,culture and civilization. Studying history allows us to observe and understand how people and societies behaved. For example, we are able to evaluate war, even when a nation is at peace, by looking back at previous events. History provides us with the data that is used to create laws, or theories about various aspects of society.'
            }

            else if(id==='civ'){
               h.innerText='CIVICS'
               p.innerText=' is the study of the rights and duties of the citizens of a society. The purpose of civics education is to prepare students to be informed and engaged citizens. Schools should help young people acquire the knowledge, skills and attitudes to prepare them to be responsible, thoughtful citizens. So, clearly civics education has something to do with preserving our democracy.'
            }

            else if(id==='comp'){
               h.innerText='COMPUTER'
               p.innerText=' is an electronic machine that dynamic and rapidly growing area that has become an integral part of the world that we live in today. ... Computing is part of everything we do! Expertise in computing enables you to solve complex, challenging problems. Computing enables you to make a positive difference in the world. Almost every job today and jobs of the future require some technical knowledge. ... Having computer-related skills also allow you to get remote jobs with more flexibility, and that could allow you to work from home.'
            }
            else{
              alert('something went wrong please refresh!!')
            }




          })

          // append new state to selected tab
          e.target.classList.add('activeTab')
       }
      
        tabs.forEach(t=>{
          t.onclick=checkTab
        })
    }

    render() { 
        return <React.Fragment>
<div className="studies">

<div className="studies_inside">
  <h1>STUDIES OFFERED </h1>
  <div className="table">
    <div className="tableTabs">
      <div className="tab" id="eng">English</div>
      <div className="tab" id="sw">Kiswahili</div>
      <div className="tab" id="math">Mathematics</div>
      <div className="tab"id='sc'>Science</div>
      <div className="tab" id="geo">Geography</div>
      <div className="tab" id="hist">History</div>
      <div className="tab" id="civ">Civics</div>
      <div className="tab"id='comp'>Computer</div>
    </div>
    <div className="tableContent">
       <div className="contentsInside">
            <h3>_</h3>
            <p>_</p>
       </div>
    </div>
  </div>
</div>



</div>
<div className="spaceStudies"></div>
        </React.Fragment>;
    }
}
 
export default StudiesOffered;