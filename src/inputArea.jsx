//create input component which takes label and input and properties related included as props
function Label_Input({labelText,inputType,forProp,defaultValue,toTake,value}){
    const takeTheInput=(e)=>{
       toTake(e.target.value);
    }
    return(
        <div className="area">
            <label htmlFor={forProp}>{labelText}</label>
            <input value={value} onChange={takeTheInput} defaultValue={defaultValue} id={forProp} type={inputType} />
        </div>
       
    )
}
//create button component to click
function Button({text,icon,style,theClass,onClick,type}){
    if(!icon){
        return (
            <button type={type} onClick={onClick} className={theClass} style={{style}}>{text}</button>
        )
    }
    return (

        <button type={type} onClick={onClick} className={theClass} style={{style}}>
           <img src={icon} alt="icon" />
           <p>{text}</p>
        </button>
    )
}
function GenerateBox({heading,text,setBlurLayer,setAnswer,answer,clean}){
    const toClose=()=>{
        setBlurLayer(false)
    }
    const toContinue=()=>{
        const theAnswer=true;
        setAnswer(theAnswer)
        clean(true)
        setBlurLayer(false)
    }
    return(
        <div className="box">
        <h2>{heading}</h2>
        <p>{text}</p>
        
        <Button onClick={toContinue} text="Yes"/>
        <Button onClick={toClose} text="No"/>
   
       
        </div>
    )
}
function GenerateBlurLayer(){
    return <div className="blurLayer">
    
    </div>
}
function GenerateColorBoard({color,setColor,setColorBoard,className}){
    const chooseColor=(value)=>{
       setColor(value)
       setColorBoard(false);
    }
    return <ul className={className}>
        <li>
            <button onClick={()=>chooseColor('brown')} className="colorMarker color1"></button>
        </li>
        <li>
            <button onClick={()=>chooseColor('rgb(10, 10, 100)')} className="colorMarker color2"></button>
        </li>
        <li>
            <button onClick={()=>chooseColor('rgb(177, 102, 11)')} className="colorMarker color3"></button>
        </li>
        <li>
            <button onClick={()=>chooseColor('black')} className="colorMarker color4"></button>
        </li>
    </ul>
}
export{Label_Input,Button,GenerateBox,GenerateBlurLayer,GenerateColorBoard}