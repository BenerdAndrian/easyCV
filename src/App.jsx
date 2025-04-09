import { useState } from 'react'
import { FormSwitchInteract } from './form'
import { GenerateCV } from './CV'
function App() {
  const [data,setData]=useState({
    firstName:'',
    lastName:'',
    email:'',
    phoneNumber:'',
    location:'',
    occupation:'',
    language:'',
    git:'',
    summary:'',
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
  const generalProps={getFirstNameValue,getLastNameValue,getEmailValue,getPhoneValue,getLocationValue,getOccupationValue,getGitValue,getLanguageValue,getSummary}
  return <div className="theApp">
   <FormSwitchInteract generalProps={generalProps} />
   <GenerateCV receive={data}/>
  </div>
 
}

export default App
