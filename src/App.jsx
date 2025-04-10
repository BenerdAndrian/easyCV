import { useState } from 'react'
import { FormSwitchInteract } from './form'
import { GenerateCV } from './CV'
// use useState to store datas receiving from the child and give it to GenerateCV component to render to UI
function App() {
  const [data,setData]=useState({
    firstName:'Ben',
    lastName:'Andrian',
    email:'ben527466@gmail.com',
    phoneNumber:'+84 977 645 341',
    location:'District 12,HCMC,Vietnam',
    occupation:'Student/Web dev',
    language:'',
    git:'',
    summary:'4-years of Intelligence Technology,graduaded from prestigious Saigon University,with experiences in building multiple projects spreading throughout many majors, im confident on many languages like C/C++,Python,Javascript,HTML,CSS,Reactjs,react Native,nodejs and databases',
    schoolName:'',
    degree:'',
    studyStartDate:'',
    studyEndDate:'',
    isStudy:'false',
    companyName:'',
    role:'',
    workEndDate:'',
    workStartDate:'',
    roleDescription:'',
    isWorking:'',
    skillCategory:'',
    skillDetail:'',
})
const [eduData,setEduData]=useState([
  {
    schoolName:'SGU',
    degree:'Bachelor',
    startDate:'2022-03-03',
    endDate:'2024-05-05',
    isStudy:'false',
  }
])
const [workData,setWorkData]=useState([
  {
        companyName:'Apple Inc',
        role:'Code Janitor',
        workStartDate:'2020-04-02',
        workEndDate:'2023-11-22',
        roleDescription:'Clean code for all Apple Software and floors',
        isWorking:'false',
  }
])
const [skillData,setSkillData]=useState([
  {
    category:'Front-end Skills',
    skillsDetail:'HTML,CSS,Javascript,ReactJS,React Native,Jest,TailWind,BootsTrap,Git,Webpack,NodeJs,MySQL'
  }
])
console.log("eduData: ",eduData);
console.log("workData: ",workData)

const [generalData,setGeneralData]=useState({
    firstName:"Ben",
    lastName:"Andrian",
    Occupation:"Student/Web Dev",
    summary:"dfdsfds"
})
  //define general info value takes function 
  const getFirstNameValue=(value)=>{
    const theData={...data,firstName:value}
    setData(theData)
  }
  const getLastNameValue=(value)=>{
    const theData={...data,lastName:value}
    setData(theData)
  }
  const getEmailValue=(value)=>{
    const theData={...data,email:value}
    setData(theData)
  }
  const getPhoneValue=(value)=>{
    const theData={...data,phoneNumber:value}
    setData(theData)
  }
  const getLocationValue=(value)=>{
    const theData={...data,location:value}
    setData(theData)
  }
  const getOccupationValue=(value)=>{
    const theData={...data,occupation:value}
    setData(theData)
  }
  const getGitValue=(value)=>{
    const theData={...data,git:value}
    setData(theData)
  }
  const getLanguageValue=(value)=>{
    const theData={...data,language:value}
    setData(theData)
  }
  const getSummary=(value)=>{
    const theData={...data,summary:value}
    setData(theData)
  }
  //define edu data take functions
  const getSchoolName=(value)=>{
    const theData={...data,schoolName:value}
    setData(theData);
  }
  const getDegree=(value)=>{
    const theData={...data,degree:value}
    setData(theData);
  }
  const getStudyStartDate=(value)=>{
    const theData={...data,studyStartDate:value}
    setData(theData);
  }
  const getStudyEndDate=(value)=>{
    const theData={...data,studyEndDate:value}
    setData(theData);
  }
  const getIsStudy=(value)=>{
    const theData={...data,isStudy:value}
    setData(theData);
  }
  //define work history data take function
  const getCompanyName=(value)=>{
    const theData={...data,companyName:value}
    setData(theData)
  }
  const getRole=(value)=>{
    const theData={...data,role:value};
    setData(theData)
  }

  const getWorkEndDate=(value)=>{
    const theData={...data,workEndDate:value};
    setData(theData)
  }
  const getWorkStartDate=(value)=>{
    const theData={...data,workStartDate:value};
    setData(theData)
  }
  const getRoleDescription=(value)=>{
    const theData={...data,roleDescription:value};
    setData(theData)
  }
  const getIsWorking=(value)=>{
   const theData={...data,isWorking:value};
   setData(theData)
  }
  const sendWorkInfoList=(value)=>{
    setWorkData(value)
  }
 // define skill data take function
 const getCategory=(value)=>{
  const theData={...data,skillCategory:value}
  setData(theData)
 }
 const getSkillDetail=(value)=>{
  const theData={...data,skillDetail:value}
  setData(theData)
 }
 const sendDataList=(value)=>{
  setEduData(value)
 }
  //store all the generalInfo props inside generalProps
  const generalProps={getFirstNameValue,getLastNameValue,getEmailValue,getPhoneValue,getLocationValue,getOccupationValue,getGitValue,getLanguageValue,getSummary}
  ////store all the education Info props inside eduProps
  const eduProps={getSchoolName,getDegree,getStudyStartDate,getStudyEndDate,getIsStudy,sendDataList}
  //store all the work history props inside workHistoryProps
  const workHistoryProps={getCompanyName,getRole,getWorkEndDate,getWorkStartDate,getRoleDescription,getIsWorking,sendWorkInfoList}
  //store all the skill props inside skillProps
  const skillProps={getCategory,getSkillDetail}
  //store useState 
  const useStateList={eduData,setEduData,workData,setWorkData,skillData,setSkillData};

  return <div className="theApp">
   <FormSwitchInteract useStateList={useStateList} skillsProps={skillProps} workHistoryProps={workHistoryProps} generalProps={generalProps} eduProps={eduProps} />
   <GenerateCV skillData={skillData} workData={workData} eduData={eduData} receive={data}/>
  </div>
 
}

export default App
