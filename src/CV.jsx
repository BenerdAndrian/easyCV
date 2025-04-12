import workIcon from './assets/img/work.svg'
import eduIcon from './assets/img/edu.svg'
import skillIcon from './assets/img/skills.svg'
import profileIcon from './assets/img/profile.svg'
import mailIcon from './assets/img/mail.svg'
import locationIcon from './assets/img/location.svg'
import languageIcon from './assets/img/language.svg'
import phoneIcon from './assets/img/phone.svg'
import gitIcon from './assets/img/github.svg'
import colorIcon from './assets/img/color.svg'
import download from './assets/img/download.svg'
import { Button } from './inputArea'
import {GenerateColorBoard} from './inputArea'
import { useState } from 'react'
import {jsPDF} from 'jspdf'
import html2canvas from 'html2canvas'
function GenerateCV(props){
    //receive data object from props
    const today=new Date();
    const day=today.toISOString().split('T')[0];
    console.log(day)
    const data=props.receive;
    const eduData=props.eduData;
    const workData=props.workData;
    const skillData=props.skillData
    console.log(data.isStudy)
    console.log('data ne: ',eduData)
    const [colorBoard,setColorBoard]=useState(false)
    const [color,setColor]=useState()
    const handleColorBoardDisplay=()=>{

        if(colorBoard) setColorBoard(false);
        else if(!colorBoard) setColorBoard(true);
    }
    const handleDownloadPDF= async ()=>{
        const cvElement=document.getElementById('CV')
        if(!cvElement){
            alert('doesnt found any CV');
            return;
        }
        //use canvas to capture the div
        const canvas = await html2canvas(cvElement, { scale: 2, useCORS: true });
        const imgData = canvas.toDataURL('image/png');
    
        const pdf = new jsPDF('p', 'mm', 'a4');
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
    
        const imgWidth = pdfWidth;
        const imgHeight = (canvas.height * pdfWidth) / canvas.width;
    
        let heightLeft = imgHeight;
        let position = 0;
    
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pdfHeight;
    
        while (heightLeft > 0) {
          position = position - pdfHeight;
          pdf.addPage();
          pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
          heightLeft -= pdfHeight;
        }
    
        pdf.save('my-cv.pdf');
      
    }
    return (
        <div className="container">
             <h1>Easy CV</h1>
              <div className="outsideContainer">
          <div id="CV">
            <div style={{backgroundColor:color}} className="CVHeader">
                <div className="fullname">
                    <span>{data.firstName}</span>
                    <span>{data.lastName}</span>
                </div>
                <h3>{data.occupation}</h3>
                <p>{data.summary}</p>
            </div>
            <div className="CVMain">
                <div className="row1">
                    <div className="workHistorySection">
                        <img src={workIcon} alt="work icon" />
                        <span>Work History</span>
                        <hr />
                        <ul className="eduList">
                        {workData.map((data,i)=> {return <li key={i}>
                            <div className="theDateFormat">
                            <h2>{data.role}</h2>
                            <p className="dateFormat">
                                <span>{data.workStartDate}</span>
                                <span>---</span>
                                <span>
                                    {data.isWorking?'Current':data.workEndDate}
                                   
                                </span>
                            </p>
                            </div>
                            <h3>{data.companyName}</h3>
                            <p>{data.roleDescription}</p>
                            </li>} )}
                        </ul>
                    </div>
                    <div className="contactSection">
                        <img src={profileIcon} alt="profile icon" />
                        <span>Contacts</span>
                        <hr />
                        <ul>
                            <li>
                                <p className="row">
                                <img src={phoneIcon} alt="phone icon" />
                                <span>Phone</span>
                                </p>
                                
                                <p className="row">
                                    {data.phoneNumber}
                                </p>
                            </li>

                            <li>
                                <p className="row">
                                <img src={mailIcon} alt="mail icon" />
                                <span>Email</span>
                                </p>
                                
                                <p className="row">
                                    {data.email}
                                </p>
                            </li>

                            <li>
                                <p className="row">
                                <img src={locationIcon} alt="location icon" />
                                <span>Location</span>
                                </p>
                                
                                <p className="row">
                                    {data.location}
                                </p>
                            </li>

                            <li>
                                <p className="row">
                                <img src={gitIcon} alt="git icon" />
                                <span>Github</span>
                                </p>
                                
                                <p className="row">
                                    {data.git}
                                </p>
                            </li>

                            <li>
                                <p className="row">
                                <img src={languageIcon} alt="language icon" />
                                <span>Languages</span>
                                </p>
                                
                                <p className="row">
                                    {data.language}
                                </p>
                            </li>

                        </ul>

                    </div>
                </div>
                <div className="row2">
                    <div className="educationSection">
                        <img src={eduIcon} alt="edu icon" />
                        <span>Education</span>
                        <hr />
                        <ul className="eduList">
                        {eduData.map((data,i)=> {return <li key={i}>
                            <div className="theDateFormat">
                            <h2>{data.degree}</h2>
                            <p className="dateFormat">
                                <span>{data.startDate}</span>
                                <span>---</span>
                                <span>
                                    {data.isStudy?'Current':data.endDate}
                                   
                                </span>
                            </p>
                            </div>
                            <h3>{data.schoolName}</h3>
                            
                            </li>} )}
                        </ul>
                           
                       
                    </div>
                    <div className="skillsSection">
                        <img src={skillIcon} alt="Skill icon" />
                        <span>Skills</span>
                        <hr />
                         <div className="skillData">
                            <ul className="skills">
                                {skillData.map(skill=>{
                                    return <li>
                                        <h2>{skill.category}</h2>
                                        <p>{skill.skillsDetail}</p>
                                    </li>
                                })}
                            </ul>
                         </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="buttonFunctionContainer">
        <ul className="buttonFunction">
            <li>
                <Button onClick={handleDownloadPDF} theClass='funcBtn' icon={download}></Button>
            </li>
            <li>
            <Button onClick={handleColorBoardDisplay} theClass='funcBtn' icon={colorIcon}></Button>
            </li>
        </ul>
        {colorBoard &&<GenerateColorBoard className='colorBoard' setColorBoard={setColorBoard} color={color} setColor={setColor}/>}
        </div>
        
        </div>
        </div>
       
      
        

    )
}
export {GenerateCV}