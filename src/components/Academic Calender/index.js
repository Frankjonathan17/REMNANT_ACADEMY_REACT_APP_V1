import React from 'react';
import PdfCalender from '../ALLCOMMON/files/Remnant_academic_Calender.pdf'
import './index.css'
class AcademicCalender extends React.Component {
    render() { 
        return (
            <div className="academicCalender">
                <h2>ACADEMIC CALENDER 2022/2023</h2>
    <div className="downloadCalender">
      <span>
      <a href={PdfCalender} download="Remnant_academic_Calender">
          <span>Download Academic calender here &gt;&gt;</span>
        </a>
      <br/>
      <br/>
            <a href={PdfCalender}>
            <span>Preview Academic calender now &gt;&gt;</span>
            </a>
      </span>
    </div>
    </div>
   
        )
    }
}
 
export default AcademicCalender;