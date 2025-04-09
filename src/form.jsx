import { Label_Input,Button } from "./inputArea"
import eduIcon from './assets/img/edu.svg'
import profileIcon from './assets/img/profile.svg'
import skillsIcon from './assets/img/skills.svg'
import workIcon from './assets/img/work.svg'
import {useState} from 'react'
//create generalInfo form component
function GenerateGeneralInfo(){
    return(
        <form id="GeneralInfoForm">
            <div className="formRow">
            <Label_Input labelText="First Name: " inputType="text" forProp="fname" defaultValue="Ben" />
            <Label_Input labelText="Last Name: " inputType="text" forProp="lname" defaultValue="Andrian" />
            </div>
           <div className="formRow">
           <Label_Input labelText="Email: " inputType="email" forProp="email" defaultValue="Benerd2243@gmail.com" />
           <Label_Input labelText="Phone: " inputType="tel" forProp="phone" defaultValue="+84 988 637 203" />
           </div>
          <div className="formRow">
          <Label_Input labelText="Location: " inputType="text" forProp="location" defaultValue="District 12,HCMC,Vietnam" />
          <Label_Input labelText="Occupation: " inputType="text" forProp="occupation" defaultValue="Student" />
          </div>
          <div className="formRow">
          <Label_Input labelText="Languages: " inputType="text" forProp="language" defaultValue="Vietnamese,English" />
          <Label_Input labelText="Github: " inputType="text" forProp="git" defaultValue="https://github.com/BenerdAndrian" />
          </div>
          
           <div className="summary">
            <label htmlFor="sum">Summary</label>
            <textarea cols="10" rows="5" name="summary" id="sum"></textarea>
           </div>
        </form>
    )
}
//create education info form component
function EducationInfo(){
    return (
        <form id="eduInfoForm">
           <Label_Input labelText="School Name: " inputType="text" forProp="schoolName" />
           <Label_Input labelText="Degree/Program: " inputType="text" forProp="degree" />
           <Label_Input labelText="Start Date: " inputType="date" forProp="startStudyDate" />
           <Label_Input labelText="End Date: " inputType="date" forProp="endStudyDate" />
           <div className="studyQuestion">
            <label htmlFor="studyAns">Do You Still Study Here?</label>
            <div className="studyAnswer">
            <input id="studyAns" type="checkbox" />
            <span>Yes</span>
            </div>
           </div>
           <div className="btnList">
            <Button text="Save" theClass="toSave"/>
            <Button text="Clear" theClass="toClear"/>
           </div>
        </form>
    )
}
//create work history form component
function WorkHistoryInfo(){
    return (
        <form id="workHistory">
            <Label_Input labelText="Company: " inputType="text" forProp="company" />
           <Label_Input labelText="Role: " inputType="text" forProp="role" />
           <Label_Input labelText="Start Date: " inputType="date" forProp="startWorkDate" />
           <Label_Input labelText="End Date: " inputType="date" forProp="endWorkDate" />
           <div className="workQuestion">
            <label htmlFor="workAns">Do You Still Working Here?</label>
            <div className="workAnswer">
                <input type="checkbox" id="workAns" />
                <span>Yes</span>
            </div>
           </div>
           <Label_Input labelText="Role Description: " inputType="text" forProp="roleDes"/>
           <div className="btnList">
            <Button text="Save" theClass="toSave"/>
            <Button text="Clear" theClass="toClear"/>
           </div>
        </form>
    )
}
//create skills form component
function SkillsInfo(){
    return(
        <form id="skills">
             <Label_Input labelText="Category: " inputType="text" forProp="skillCategory" />
             <Label_Input labelText="Skill Details: " inputType="text" forProp="skillDetail" />
             <div className="btnList">
            <Button text="Save" theClass="toSave"/>
            <Button text="Clear" theClass="toClear"/>
           </div>
        </form>
    )
}
//create formSwitchinteract component
function FormSwitchInteract(){
   const [theForm,setForm]=useState("general")
   const generateGeneralInfoForm=()=>{
    setForm('general');
    console.log('hello')
   }
   const generateEduInfoForm=()=>{
    setForm('edu');
   }
   const generateSkillsForm=()=>{
    setForm('skills')
   }
   const generateWorkHistoryForm=()=>{
    setForm('work')
   }
 return(
    <div className="formManipulate">
    <div className="formSwitchBtn">
        <nav>
            <ul>
                <li>
                    <Button onClick={generateGeneralInfoForm} icon={profileIcon} text="General Info" theClass="generalInfoBtn" />
                </li>
                <li>
                    <Button onClick={generateEduInfoForm} icon={eduIcon} text="Education" theClass="educationBtn"/>
                </li>
                <li>
                   <Button onClick={generateWorkHistoryForm} icon={workIcon} text="Work History" theClass="workHistoryBtn"/>
                </li>
                <li>
                   <Button onClick={generateSkillsForm} icon={skillsIcon} text="Skills" theClass="skillsBtn"/>
                </li>
            </ul>
        </nav>
    </div>
    <div className="formGenerate">
      {theForm==="general" && <GenerateGeneralInfo/>}
      {theForm==="edu" && <EducationInfo/>}
      {theForm==="skills" && <SkillsInfo/>}
      {theForm==="work" && <WorkHistoryInfo/>}
    </div>
    </div>
    
 )
}
export {FormSwitchInteract}