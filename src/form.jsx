import { Label_Input } from "./inputArea"
//create generalInfo form component
function GenerateGeneralInfo(){
    return(
        <form id="GeneralInfoForm">
           <Label_Input labelText="First Name: " inputType="text" forProp="fname" defaultValue="Ben" />
           <Label_Input labelText="Last Name: " inputType="text" forProp="lname" defaultValue="Andrian" />
           <Label_Input labelText="Email: " inputType="email" forProp="email" defaultValue="Benerd2243@gmail.com" />
           <Label_Input labelText="Phone: " inputType="tel" forProp="phone" defaultValue="+84 988 637 203" />
           <Label_Input labelText="Location: " inputType="text" forProp="location" defaultValue="District 12,HCMC,Vietnam" />
           <Label_Input labelText="Occupation: " inputType="text" forProp="occupation" defaultValue="Student" />
           <Label_Input labelText="Languages: " inputType="text" forProp="language" defaultValue="Vietnamese,English" />
           <Label_Input labelText="Github: " inputType="text" forProp="git" defaultValue="https://github.com/BenerdAndrian" />
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
        </form>
    )
}
//create work history form component
function workHistoryInfo(){
    return (
        <form id="workHistory">
            <Label_Input labelText="Company: " inputType="text" forProp="company" />
           <Label_Input labelText="Role: " inputType="text" forProp="role" />
           <Label_Input labelText="Start Date: " inputType="date" forProp="startWorkDate" />
           <Label_Input labelText="End Date: " inputType="date" forProp="endWorkDate" />
           <div className="workQuestion">
            <label htmlFor="workAns">Do You Still Working Here?</label>
            <div className="workAnswer">
                <input type="text" id="workAns" />
                <span>Yes</span>
            </div>
           </div>
           <Label_Input labelText="Role Description: " inputType="text" forProp="roleDes"/>
        </form>
    )
}
//create skills form component
function skillsInfo(){
    return(
        <form id="skills">
             <Label_Input labelText="Category: " inputType="text" forProp="skillCategory" />
             <Label_Input labelText="Skill Details: " inputType="text" forProp="skillDetail" />
        </form>
    )
}
export {GenerateGeneralInfo}