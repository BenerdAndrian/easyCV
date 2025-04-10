import { Label_Input,Button } from "./inputArea"
import eduIcon from './assets/img/edu.svg'
import profileIcon from './assets/img/profile.svg'
import skillsIcon from './assets/img/skills.svg'
import workIcon from './assets/img/work.svg'
import {useState} from 'react'
//create generalInfo form component
function GenerateGeneralInfo({getFirstNameValue,getLastNameValue,getEmailValue,getPhoneValue,getLocationValue,getOccupationValue,getLanguageValue,getGitValue,getSummary}){
  const takeData=(e)=>{
     getSummary(e.target.value)
  }

    return(
        <form id="GeneralInfoForm">
            <div className="formRow">
            <Label_Input toTake={(value)=>getFirstNameValue(value)} labelText="First Name: " inputType="text" forProp="fname" defaultValue="Ben" />
            <Label_Input toTake={(value)=>getLastNameValue(value)} labelText="Last Name: " inputType="text" forProp="lname" defaultValue="Andrian" />
            </div>
           <div className="formRow">
           <Label_Input toTake={(value)=>getEmailValue(value)} labelText="Email: " inputType="email" forProp="email" defaultValue="Benerd2243@gmail.com" />
           <Label_Input toTake={getPhoneValue} labelText="Phone: " inputType="tel" forProp="phone" defaultValue="+84 988 637 203" />
           </div>
          <div className="formRow">
          <Label_Input toTake={(value)=>getLocationValue(value)} labelText="Location: " inputType="text" forProp="location" defaultValue="District 12,HCMC,Vietnam" />
          <Label_Input toTake={getOccupationValue} labelText="Occupation: " inputType="text" forProp="occupation" defaultValue="Student" />
          </div>
          <div className="formRow">
          <Label_Input toTake={(value)=>getLanguageValue(value)} labelText="Languages: " inputType="text" forProp="language" defaultValue="Vietnamese,English" />
          <Label_Input toTake={(value)=>getGitValue(value)} labelText="Github: " inputType="text" forProp="git" defaultValue="https://github.com/BenerdAndrian" />
          </div>
          
           <div className="summary">
            <label htmlFor="sum">Summary</label>
            <textarea defaultValue="4-years of Intelligence Technology,graduaded from prestigious Saigon University,with experiences in building multiple projects spreading throughout many majors, im confident on many languages like C/C++,Python,Javascript,HTML,CSS,Reactjs,react Native,nodejs and databases" onChange={takeData} placeholder="i love coding on the beach..." cols="10" rows="5" name="summary" id="sum"></textarea>
           </div>
        </form>
    )
}
//create education info form component
function EducationInfo({getSchoolName,getDegree,getStudyStartDate,getStudyEndDate,getIsStudy,sendDataList,eduData,setEduData}){
    const [data,setData]=useState({
       schoolName:'',
       degree:'',
       startDate:'',
       endDate:'',
       isStudy:'',
    })
  
    const [editState,setEditState]=useState(false);
    const [index,setIndex]=useState(null);

    const toSave=(editState,i)=>{
      if(!editState){
        const addedData=[...eduData,data];
        setEduData(addedData)
        const tocheck=document.getElementById('studyAns')
        tocheck.checked=false;
      }else{
       
        const updateList=Array.from(eduData);
       updateList[i].schoolName=data.schoolName;
       updateList[i].degree=data.degree;
       updateList[i].startDate=data.startDate;
       updateList[i].endDate=data.endDate;
       updateList[i].isStudy=data.isStudy;
       setEduData(updateList);
       setEditState(false)
      }
      setData({
        schoolName:'',
       degree:'',
       startDate:'',
       endDate:'',
       isStudy:'',
      })
    }
    const toClear=(e)=>{
        e.preventDefault();
      setData({
        schoolName:'',
        degree:'',
        startDate:'',
        endDate:'',
        isStudy:'',
      })
        console.log(data)
        const tocheck=document.getElementById('studyAns')
        tocheck.checked=false;
    }
    const toCheck=(e)=>{
        getIsStudy(e.target.checked)
        setData({...data,isStudy:e.target.checked})
    }
    const toDeleteInfo=(i)=>{
        const updatedList=Array.from(eduData);
        updatedList.splice(i,1);
        setEduData(updatedList)
       sendDataList(updatedList);
    }
    const toEditInfo=(i)=>{
        setEditState(true);
        setIndex(i)
        setData({
            schoolName:eduData[i].schoolName,
            degree:eduData[i].degree,
            startDate:eduData[i].startDate,
            endDate:eduData[i].endDate,
            isStudy:eduData[i].isStudy,
        })
        

        const savebtn=document.querySelector('.toSave');
        savebtn.onclick=()=>toSave(editState,index)
    }
    return (
        <form id="eduInfoForm">
           <Label_Input value={data.schoolName} toTake={(value)=>{getSchoolName(value);setData({...data,schoolName:value})}} labelText="School Name: " inputType="text" forProp="schoolName" />
           <Label_Input value={data.degree} toTake={(value)=>{getDegree(value),setData({...data,degree:value})}} labelText="Degree/Program: " inputType="text" forProp="degree" />
           <Label_Input value={data.startDate} toTake={(value)=>{getStudyStartDate(value),setData({...data,startDate:value})}} labelText="Start Date: " inputType="date" forProp="startStudyDate" />
           <Label_Input value={data.endDate} toTake={(value)=>{getStudyEndDate(value),setData({...data,endDate:value})}} labelText="End Date: " inputType="date" forProp="endStudyDate" />
           <div className="studyQuestion">
            <label htmlFor="studyAns">Do You Still Study Here?</label>
            <div className="studyAnswer">
            <input onChange={toCheck} id="studyAns" type="checkbox" />
            <span>Yes</span>
            </div>
           </div>
           <div className="btnList">
            <Button type="button" onClick={()=>toSave(editState,index)} text="Save" theClass="toSave"/>
            <Button type="button" onClick={toClear} text="Clear" theClass="toClear"/>
           </div>
           <div className="dataList">
            {eduData.map((data,i)=>{

                return <DataSet editCurrentInfo={()=>toEditInfo(i)} deleteCurrentInfo={()=>toDeleteInfo(i)} schoolName={data.schoolName} key={i}/>
            })}
           </div>
        </form>
    )
}
//create work history form component
function WorkHistoryInfo({getCompanyName,getRole,getWorkEndDate,getWorkStartDate,getRoleDescription,getIsWorking,workData,setWorkData}){
    const [workInfo,setWorkInfo]=useState({
        companyName:'',
        role:'',
        workStartDate:'',
        workEndDate:'',
        roleDescription:'',
        isWorking:'',
    })
    const [editState,setEditState]=useState(false)
    const [index,setIndex]=useState()
    const toSave=(editState,index)=>{
      if(!editState){
        const updateList=[...workData,workInfo]
        setWorkData(updateList)
      }else{
       const updatedList=Array.from(workData)
      updatedList[index].companyName=workInfo.companyName;
      updatedList[index].role=workInfo.role;
      updatedList[index].workStartDate=workInfo.workStartDate;
      updatedList[index].workEndDate=workInfo.workEndDate;
      updatedList[index].roleDescription=workInfo.roleDescription;
      updatedList[index].isWorking=workInfo.isWorking;
      setWorkData(updatedList);
       setEditState(false);
      }
      setWorkInfo({
        companyName:'',
        role:'',
        workStartDate:'',
        workEndDate:'',
        roleDescription:'',
        isWorking:'',
    })
    }
    const editInfo=(i)=>{
        setEditState(true)
      const info=workData[i];
      setWorkInfo({
        companyName:info.companyName,
        role:info.role,
        workStartDate:info.workStartDate,
        workEndDate:info.workEndDate,
        roleDescription:info.roleDescription,
        isWorking:info.isWorking,
      })
      setIndex(i)
    }
    const deleteInfo=(i)=>{
        const updatedList=Array.from(workData);
        updatedList.splice(i,1);
        setWorkData(updatedList)
    }
    const toClear=()=>{
        setWorkInfo({
            companyName:'',
            role:'',
            workStartDate:'',
            workEndDate:'',
            roleDescription:'',
            isWorking:'',
        })
    }
    const takeData=(e)=>{
        getIsWorking(e.target.checked)
        setWorkInfo({...workInfo,isWorking:e.tartget.checked})
    }
    return (
        <form id="workHistory">
            <Label_Input value={workInfo.companyName} toTake={(value)=>{getCompanyName(value),setWorkInfo({...workInfo,companyName:value})}}  labelText="Company: " inputType="text" forProp="company" />
           <Label_Input value={workInfo.role} toTake={(value)=>{getRole(value),setWorkInfo({...workInfo,role:value})}} labelText="Role: " inputType="text" forProp="role" />
           <Label_Input value={workInfo.workStartDate} toTake={(value)=>{getWorkStartDate(value),setWorkInfo({...workInfo,workStartDate:value})}} labelText="Start Date: " inputType="date" forProp="startWorkDate" />
           <Label_Input value={workInfo.workEndDate} toTake={(value)=>{getWorkEndDate(value),setWorkInfo({...workInfo,workEndDate:value})}} labelText="End Date: " inputType="date" forProp="endWorkDate" />
           <div className="workQuestion flex">
            <label htmlFor="workAns">Do You Still Working Here?</label>
            <div className="workAnswer">
                <input value={workInfo.isWorking} onChange={takeData} type="checkbox" id="workAns" />
                <span>Yes</span>
            </div>
           </div>
           <Label_Input value={workInfo.roleDescription} toTake={(value)=>{getRoleDescription(value),setWorkInfo({...workInfo,roleDescription:value})}} labelText="Role Description: " inputType="text" forProp="roleDes"/>
           <div className="btnList">
            <Button text="Save" onClick={()=>toSave(editState,index)} theClass="toSave" type="button"/>
            <Button text="Clear" onClick={toClear} theClass="toClear" type="button"/>
           </div>
           <div className="dataList">
            {workData.map((work,i)=>{
                return <DataSet editCurrentInfo={()=>editInfo(i)} deleteCurrentInfo={()=>deleteInfo(i)} key={i} role={work.role} />
            })}
           </div>
        </form>
    )
}
//create skills form component
function SkillsInfo({getCategory,getSkillDetail}){
    return(
        <form id="skills">
             <Label_Input toTake={(value)=>{getCategory(value)}} labelText="Category: " inputType="text" forProp="skillCategory" />
             <Label_Input toTake={(value)=>{getSkillDetail(value)}} labelText="Skill Details: " inputType="text" forProp="skillDetail" />
             <div className="btnList">
            <Button text="Save" theClass="toSave"/>
            <Button text="Clear" theClass="toClear"/>
           </div>
        </form>
    )
}
//create formSwitchinteract component
function FormSwitchInteract({generalProps,eduProps,skillsProps,workHistoryProps,useStateList}){
   const [theForm,setForm]=useState("general")
   const generateGeneralInfoForm=()=>{
    setForm('general');
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
      {theForm==="general" && <GenerateGeneralInfo 
      getFirstNameValue={(value=>generalProps.getFirstNameValue(value))}
      getLastNameValue={(value)=>generalProps.getLastNameValue(value)}
      getEmailValue={(value)=>generalProps.getEmailValue(value)}
      getPhoneValue={(value)=>generalProps.getPhoneValue(value)}
      getLocationValue={(value)=>generalProps.getLocationValue(value)}
      getOccupationValue={(value)=>generalProps.getOccupationValue(value)}
      getLanguageValue={(value)=>generalProps.getLanguageValue(value)}
      getGitValue={(value)=>generalProps.getGitValue(value)}
      getSummary={(value)=>generalProps.getSummary(value)}
      />}
      {theForm==="edu" && <EducationInfo
       getSchoolName={(value)=>eduProps.getSchoolName(value)}
       getDegree={(value)=>eduProps.getDegree(value)}
       getStudyStartDate={(value)=>eduProps.getStudyStartDate(value)}
       getStudyEndDate={(value)=>eduProps.getStudyEndDate(value)}
       getIsStudy={(value)=>eduProps.getIsStudy(value)}
       sendDataList={(value)=>eduProps.sendDataList(value)}
       eduData={useStateList.eduData}
       setEduData={useStateList.setEduData}
      />}
      {theForm==="skills" && <SkillsInfo
      getCategory={(value)=>{skillsProps.getCategory(value)}}
      getSkillDetail={(value)=>{skillsProps.getSkillDetail(value)}}
      />}
      {theForm==="work" && <WorkHistoryInfo
      getCompanyName={(value)=>workHistoryProps.getCompanyName(value)}
      getRole={(value)=>workHistoryProps.getRole(value)}
      getWorkEndDate={(value)=>workHistoryProps.getWorkEndDate(value)}
      getWorkStartDate={(value)=>workHistoryProps.getWorkStartDate(value)}
      getRoleDescription={(value)=>workHistoryProps.getRoleDescription(value)}
      getIsWorking={(value)=>workHistoryProps.getIsWorking(value)}
      sendWorkInfoList={(value)=>workHistoryProps.sendWorkInfoList(value)}
      workData={useStateList.workData}
      setWorkData={useStateList.setWorkData}
      />}
    </div>
    </div>
 )
}
//create div area component which represents a set of data being added in UI
function DataSet({role,schoolName,deleteCurrentInfo,editCurrentInfo}){
    const toEdit=(e)=>{
        e.preventDefault();
        editCurrentInfo();
    }
    const toDelete=(e)=>{
        e.preventDefault()
        deleteCurrentInfo();
    }
    return(
        <div className="dataSetDiv">
          <h3>{schoolName||role}</h3>
          <div className="btnList">
          <Button onClick={toEdit} text="Edit" theClass="toEdit"/>
          <Button onClick={toDelete} text="Delete" theClass="toDelete"/>
          </div>
        </div>
    )
}
export {FormSwitchInteract}