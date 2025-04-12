import { useState } from 'react'
import { FormSwitchInteract } from './form'
import { GenerateCV } from './CV'
import{GenerateBox,GenerateBlurLayer} from './inputArea'
// use useState to store datas receiving from the child and give it to GenerateCV component to render to UI
function App() {
  const [data,setData]=useState({
    firstName:'Ben',
    lastName:'Andrian',
    email:'ben527466@gmail.com',
    phoneNumber:'+84 977 645 341',
    location:'District 12,HCMC,Vietnam',
    occupation:'Student/Web dev',
    language:'Vietnamese,English,Thai',
    git:'https://github.com/BenerdAndrian',
    summary:'4-years of Intelligence Technology,graduaded from prestigious Saigon University,with experiences in building multiple projects spreading throughout many majors, im confident on many languages like C/C++,Python,Javascript,HTML,CSS,Reactjs,react Native,nodejs and databases',
   
})
//to decide if the button of clean,load,info is clicked,if it is clicked then the blurlayer change to true,allow for question box to display
const [blurLayer,setBlurLayer]=useState(false)
//to decide if user choose to click Yes which they want it
const [answer,setAnswer]=useState(false)
const [load,setLoad]=useState(false)
const [eduDataList,setEduDataList]=useState([
  {
    schoolName:'SGU',
    degree:'Bachelor',
    startDate:'2022-03-03',
    endDate:'2024-05-05',
    isStudy:'false',
  }
])
const [workDataList,setWorkDataList]=useState([
  {
        companyName:'Apple Inc',
        role:'Code Janitor',
        workStartDate:'2020-04-02',
        workEndDate:'2023-11-22',
        roleDescription:'Clean code for all Apple Software and floors',
        isWorking:'false',
  }
])
const [skillDataList,setSkillDataList]=useState([
  {
    category:'Front-end Skills',
    skillsDetail:'HTML,CSS,Javascript,ReactJS,React Native,Jest,TailWind,BootsTrap,Git,Webpack,NodeJs,MySQL'
  }
])


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
    setWorkDataList(value)
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
  setEduDataList(value)
 }
 //to clean the data from when clicking on function button
 const cleanData=()=>{
  setBlurLayer(true)
  
 }
 const clean=(answer)=>{
      if(answer){
        
          setDataForm({
            firstName:'',
            lastName:'',
            email:'',
            phone:'',
            location:'',
            occupation:'',
            language:'',
            git:'',
            summary:'',  
        })
        
        const cleanData=Object.assign({},data);
        const eduDataListUpdate=[];
        const workDataListUpdate=[];
        const skillDataListUpdate=[];
        Object.entries(cleanData).forEach(([key,value])=>{cleanData[key]=''})
        setData(cleanData)
        setEduDataList(eduDataListUpdate)
        setWorkDataList(workDataListUpdate)
        setSkillDataList(skillDataListUpdate)
        setAnswer(false)
      }
 }
 const [dataForm,setDataForm]=useState({
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
const [eduData,setEduData]=useState({
  schoolName:'',
  degree:'',
  startDate:'',
  endDate:'',
  isStudy:'',
})
const [workInfo,setWorkInfo]=useState({
  companyName:'',
  role:'',
  workStartDate:'',
  workEndDate:'',
  roleDescription:'',
  isWorking:'',
})
const [skill,setSkill]=useState({
  category:'',
  skillsDetail:'',
})
 //to load the data
 const loadData=()=>{
  setData({
    firstName:'Ben',
    lastName:'Andrian',
    email:'ben527466@gmail.com',
    phoneNumber:'+84 977 645 341',
    location:'District 12,HCMC,Vietnam',
    occupation:'Student/Web dev',
    language:'Vietnamese,English,Thai',
    git:'https://github.com/BenerdAndrian',
    summary:'4-years of Intelligence Technology,graduaded from prestigious Saigon University,with experiences in building multiple projects spreading throughout many majors, im confident on many languages like C/C++,Python,Javascript,HTML,CSS,Reactjs,react Native,nodejs and databases',
  })
  setEduDataList([
    {
    
      schoolName:'SGU',
      degree:'Bachelor',
      startDate:'2022-03-03',
      endDate:'2024-05-05',
      isStudy:'false',
    
  }])
  setWorkDataList([
    {
      
        companyName:'Apple Inc',
        role:'Code Janitor',
        workStartDate:'2020-04-02',
        workEndDate:'2023-11-22',
        roleDescription:'Clean code for all Apple Software and floors',
        isWorking:'false',
  
    }
  ])
  setSkillDataList([
    {
      
        category:'Front-end Skills',
        skillsDetail:'HTML,CSS,Javascript,ReactJS,React Native,Jest,TailWind,BootsTrap,Git,Webpack,NodeJs,MySQL'
      
    }
  ])
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
  const useStateList={eduDataList,setEduDataList,workDataList,setWorkDataList,skillDataList,setSkillDataList};

  return <div className="theApp">
   <FormSwitchInteract  setDataForm={setDataForm} dataForm={dataForm} eduData={eduData} setEduData={setEduData} workInfo={workInfo} setWorkInfo={setWorkInfo} skill={skill} setSkill={setSkill} answer={answer} loadData={loadData} cleanData={cleanData} useStateList={useStateList} skillsProps={skillProps} workHistoryProps={workHistoryProps} generalProps={generalProps} eduProps={eduProps} />
   <GenerateCV skillData={skillDataList} workData={workDataList} eduData={eduDataList} receive={data}/>
   {blurLayer && <div>
    <GenerateBlurLayer/>
    <GenerateBox clean={clean} answer={answer} setAnswer={setAnswer} setBlurLayer={setBlurLayer} heading="Confirmation" text="Are you sure you want to clear all the fields? This action cannot be undone" />
    </div>
   }
  
  </div>
 
}

export default App
