import { Label_Input,Button } from "./inputArea"
import eduIcon from './assets/img/edu.svg'
import profileIcon from './assets/img/profile.svg'
import skillsIcon from './assets/img/skills.svg'
import workIcon from './assets/img/work.svg'
import {useState} from 'react'
import brushIcon from './assets/img/brush.svg'
import infoIcon from './assets/img/i.svg'
import loadIcon from './assets/img/load.svg'
//create generalInfo form component
function GenerateGeneralInfo({getFirstNameValue,getLastNameValue,getEmailValue,getPhoneValue,getLocationValue,getOccupationValue,getLanguageValue,getGitValue,getSummary,dataForm,setDataForm}){

    const takeData=(e)=>{
     getSummary(e.target.value);
     setDataForm({...dataForm,summary:e.target.value})
  }
    
    return(
        <form id="GeneralInfoForm">
            <div className="formRow">
            <Label_Input value={dataForm.firstName} toTake={(value)=>{getFirstNameValue(value),setDataForm({...dataForm,firstName:value})}} labelText="First Name: " inputType="text" forProp="fname" defaultValue="Ben" />
            <Label_Input value={dataForm.lastName} toTake={(value)=>{getLastNameValue(value),setDataForm({...dataForm,lastName:value})}} labelText="Last Name: " inputType="text" forProp="lname" defaultValue="Andrian" />
            </div>
           <div className="formRow">
           <Label_Input value={dataForm.email} toTake={(value)=>{getEmailValue(value),setDataForm({...dataForm,email:value})}} labelText="Email: " inputType="email" forProp="email" defaultValue="Benerd2243@gmail.com" />
           <Label_Input value={dataForm.phone} toTake={(value)=>{getPhoneValue(value),setDataForm({...dataForm,phone:value})}} labelText="Phone: " inputType="tel" forProp="phone" defaultValue="+84 988 637 203" />
           </div>
          <div className="formRow">
          <Label_Input value={dataForm.location} toTake={(value)=>{getLocationValue(value),setDataForm({...dataForm,location:value})}} labelText="Location: " inputType="text" forProp="location" defaultValue="District 12,HCMC,Vietnam" />
          <Label_Input value={dataForm.occupation} toTake={(value)=>{getOccupationValue(value),setDataForm({...dataForm,occupation:value})}} labelText="Occupation: " inputType="text" forProp="occupation" defaultValue="Student" />
          </div>
          <div className="formRow">
          <Label_Input value={dataForm.language} toTake={(value)=>{getLanguageValue(value),setDataForm({...dataForm,language:value})}} labelText="Languages: " inputType="text" forProp="language" defaultValue="Vietnamese,English" />
          <Label_Input value={dataForm.git} toTake={(value)=>{getGitValue(value),setDataForm({...dataForm,git:value})}} labelText="Github: " inputType="text" forProp="git" defaultValue="https://github.com/BenerdAndrian" />
          </div>
          
           <div className="summary">
            <label htmlFor="sum">Summary</label>
            <textarea value={dataForm.summary} onChange={takeData} placeholder="i love coding on the beach..." cols="10" rows="5" name="summary" id="sum"></textarea>
           </div>
        </form>
    )
}
//create education info form component
function EducationInfo({getSchoolName,getDegree,getStudyStartDate,getStudyEndDate,getIsStudy,sendDataList,eduDataList,setEduDataList,eduData,setEduData}){

  
    const [editState,setEditState]=useState(false);
    const [index,setIndex]=useState(null);

    const toSave=(editState,i)=>{
      if(!editState){
        const addedData=[...eduDataList,eduData];
        setEduDataList(addedData)
        const tocheck=document.getElementById('studyAns')
        tocheck.checked=false;
      }else{
       
        const updateList=Array.from(eduDataList);
       updateList[i].schoolName=eduData.schoolName;
       updateList[i].degree=eduData.degree;
       updateList[i].startDate=eduData.startDate;
       updateList[i].endDate=eduData.endDate;
       updateList[i].isStudy=eduData.isStudy;
       setEduDataList(updateList);
       setEditState(false)
      }
      setEduData({
        schoolName:'',
       degree:'',
       startDate:'',
       endDate:'',
       isStudy:'',
      })
    }
    const toClear=(e)=>{
        e.preventDefault();
      setEduData({
        schoolName:'',
        degree:'',
        startDate:'',
        endDate:'',
        isStudy:'',
      })
        const tocheck=document.getElementById('studyAns')
        tocheck.checked=false;
    }
    const toCheck=(e)=>{
        getIsStudy(e.target.checked)
        setEduData({...eduData,isStudy:e.target.checked})
    }
    const toDeleteInfo=(i)=>{
        const updatedList=Array.from(eduDataList);
        updatedList.splice(i,1);
        setEduDataList(updatedList)
       sendDataList(updatedList);
    }
    const toEditInfo=(i)=>{
        setEditState(true);
        setIndex(i)
        setEduData({
            schoolName:eduDataList[i].schoolName,
            degree:eduDataList[i].degree,
            startDate:eduDataList[i].startDate,
            endDate:eduDataList[i].endDate,
            isStudy:eduDataList[i].isStudy,
        })
        

        const savebtn=document.querySelector('.toSave');
        savebtn.onclick=()=>toSave(editState,index)
    }
    return (
        <form id="eduInfoForm">
           <Label_Input value={eduData.schoolName} toTake={(value)=>{getSchoolName(value);setEduData({...eduData,schoolName:value})}} labelText="School Name: " inputType="text" forProp="schoolName" />
           <Label_Input value={eduData.degree} toTake={(value)=>{getDegree(value),setEduData({...eduData,degree:value})}} labelText="Degree/Program: " inputType="text" forProp="degree" />
           <Label_Input value={eduData.startDate} toTake={(value)=>{getStudyStartDate(value),setEduData({...eduData,startDate:value})}} labelText="Start Date: " inputType="date" forProp="startStudyDate" />
           <Label_Input value={eduData.endDate} toTake={(value)=>{getStudyEndDate(value),setEduData({...eduData,endDate:value})}} labelText="End Date: " inputType="date" forProp="endStudyDate" />
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
            {eduDataList.map((data,i)=>{

                return <DataSet editCurrentInfo={()=>toEditInfo(i)} deleteCurrentInfo={()=>toDeleteInfo(i)} schoolName={data.schoolName} key={i}/>
            })}
           </div>
        </form>
    )
}
//create work history form component
function WorkHistoryInfo({getCompanyName,getRole,getWorkEndDate,getWorkStartDate,getRoleDescription,getIsWorking,workDataList,setWorkDataList,workInfo,setWorkInfo}){
  
    const [editState,setEditState]=useState(false)
    const [index,setIndex]=useState()
    const toSave=(editState,index)=>{
      if(!editState){
        const updateList=[...workDataList,workInfo]
        setWorkDataList(updateList)
      }else{
       const updatedList=Array.from(workDataList)
       console.log('updated list: ',updatedList)
      updatedList[index].companyName=workInfo.companyName;
      updatedList[index].role=workInfo.role;
      updatedList[index].workStartDate=workInfo.workStartDate;
      updatedList[index].workEndDate=workInfo.workEndDate;
      updatedList[index].roleDescription=workInfo.roleDescription;
      updatedList[index].isWorking=workInfo.isWorking;
      setWorkDataList(updatedList);
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
      const info=workDataList[i];
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
        const updatedList=Array.from(workDataList);
        updatedList.splice(i,1);
        setWorkDataList(updatedList)
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
            {workDataList.map((work,i)=>{
                return <DataSet editCurrentInfo={()=>editInfo(i)} deleteCurrentInfo={()=>deleteInfo(i)} key={i} role={work.role} />
            })}
           </div>
        </form>
    )
}
//create skills form component
function SkillsInfo({getCategory,getSkillDetail,skillDataList,setSkillDataList,skill,setSkill}){
   
    const [editState,setEditState]=useState(false)
    const [index,setIndex]=useState()
    const toClear=(e)=>{
        e.preventDefault();
        setSkill({
            category:'',
            skillsDetail:'',
        })
    }
    const toSave=(editState,index)=>{
     if(!editState){
        const updateList=[...skillDataList,skill]
        setSkillDataList(updateList)
     }else{
       const updatedList=Array.from(skillDataList);
       updatedList[index].category=skill.category;
       updatedList[index].skillsDetail=skill.skillsDetail;
       setSkillDataList(updatedList)
     }
     setSkill({
        category:'',
        skillsDetail:'',
    })
    setEditState(false)
    }
    const editInfo=(i)=>{
       setIndex(i);
       setEditState(true);
       setSkill({
        category:skillDataList[i].category,
        skillsDetail:skillDataList[i].skillsDetail
       })

    }
    const deleteInfo=(i)=>{
      const updatedList=Array.from(skillDataList)
      updatedList.splice(i,1);
      setSkillDataList(updatedList);
    }
    return(
        <form id="skills">
             <Label_Input value={skill.category} toTake={(value)=>{getCategory(value),setSkill({...skill,category:value})}} labelText="Category: " inputType="text" forProp="skillCategory" />
             <Label_Input value={skill.skillsDetail} toTake={(value)=>{getSkillDetail(value),setSkill({...skill,skillsDetail:value})}} labelText="Skill Details: " inputType="text" forProp="skillDetail" />
             <div className="btnList">
            <Button onClick={()=>toSave(editState,index)} text="Save" theClass="toSave" type="button"/>
            <Button onClick={toClear} text="Clear" theClass="toClear"/>
           </div>
           <div className="dataList">
            {skillDataList.map((skill,i)=>{
                return <DataSet  editCurrentInfo={()=>editInfo(i)} deleteCurrentInfo={()=>deleteInfo(i)} key={i} skill={skill.category} />
            })}
           </div>
        </form>
    )
}
//create formSwitchinteract component
function FormSwitchInteract({generalProps,eduProps,skillsProps,workHistoryProps,useStateList,cleanData,loadData,answer,eduData,setEduData,workInfo,setWorkInfo,skill,setSkill,dataForm,setDataForm}){
   
 
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
   
   const toLoad=()=>{
    console.log('keoe')
    loadData();
    setDataForm({
        firstName:'Ben',
        lastName:'Andriandfsdfd',
        email:'ben527466@gmail.com',
        phone:'+84 977 645 341',
        location:'District 12,HCMC,Vietnam',
        occupation:'Student/Web dev',
        language:'Vietnamese,English,Thai',
        git:'https://github.com/BenerdAndrian',
        summary:'4-years of Intelligence Technology,graduaded from prestigious Saigon University,with experiences in building multiple projects spreading throughout many majors, im confident on many languages like C/C++,Python,Javascript,HTML,CSS,Reactjs,react Native,nodejs and databases',
    })
   }

   const toClean=()=>{
   
    console.log('kaka')
    cleanData()
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
      dataForm={dataForm}
      setDataForm={setDataForm}
      />}
      {theForm==="edu" && <EducationInfo
       getSchoolName={(value)=>eduProps.getSchoolName(value)}
       getDegree={(value)=>eduProps.getDegree(value)}
       getStudyStartDate={(value)=>eduProps.getStudyStartDate(value)}
       getStudyEndDate={(value)=>eduProps.getStudyEndDate(value)}
       getIsStudy={(value)=>eduProps.getIsStudy(value)}
       sendDataList={(value)=>eduProps.sendDataList(value)}
       eduDataList={useStateList.eduDataList}
       setEduDataList={useStateList.setEduDataList}
       eduData={eduData}
       setEduData={setEduData}
      />}
      {theForm==="skills" && <SkillsInfo
      getCategory={(value)=>{skillsProps.getCategory(value)}}
      getSkillDetail={(value)=>{skillsProps.getSkillDetail(value)}}
      skillDataList={useStateList.skillDataList}
      setSkillDataList={useStateList.setSkillDataList}
      skill={skill}
      setSkill={setSkill}
      />}
      {theForm==="work" && <WorkHistoryInfo
      getCompanyName={(value)=>workHistoryProps.getCompanyName(value)}
      getRole={(value)=>workHistoryProps.getRole(value)}
      getWorkEndDate={(value)=>workHistoryProps.getWorkEndDate(value)}
      getWorkStartDate={(value)=>workHistoryProps.getWorkStartDate(value)}
      getRoleDescription={(value)=>workHistoryProps.getRoleDescription(value)}
      getIsWorking={(value)=>workHistoryProps.getIsWorking(value)}
      sendWorkInfoList={(value)=>workHistoryProps.sendWorkInfoList(value)}
      workDataList={useStateList.workDataList}
      setWorkDataList={useStateList.setWorkDataList}
      workInfo={workInfo}
      setWorkInfo={setWorkInfo}
      />}
    </div>
    <ul className="btnFunctionList">
     <li>
        <Button onClick={toClean} theClass='brushBtn' text="Clean" icon={brushIcon}></Button>
     </li>
     <li>
     <Button onClick={toLoad} theClass="loadBtn" style="backgroundColor:red" text="Load" icon={loadIcon}></Button>
     </li>
     <li>
     <Button  theClass='infoBtn' style="backgroundColor:red" text="Info" icon={infoIcon}></Button>
     </li>
    </ul>
    </div>
 )
}
//create div area component which represents a set of data being added in UI
function DataSet({skill,role,schoolName,deleteCurrentInfo,editCurrentInfo}){
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
          <h3>{schoolName||role||skill}</h3>
          <div className="btnList">
          <Button onClick={toEdit} text="Edit" theClass="toEdit"/>
          <Button onClick={toDelete} text="Delete" theClass="toDelete"/>
          </div>
        </div>
    )
}

export {FormSwitchInteract}