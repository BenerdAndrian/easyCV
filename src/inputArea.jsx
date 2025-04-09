//create input component which takes label and input and properties related included as props
function Label_Input({labelText,inputType,forProp,defaultValue}){
    return(
        <div className="area">
            <label htmlFor={forProp}>{labelText}</label>
            <input defaultValue={defaultValue} id={forProp} type={inputType} />
        </div>
       
    )
}
//create button component to click
function Button({text,icon,style,theClass}){
    if(!icon){
        return (
            <button className={theClass} style={style}>{text}</button>
        )
    }
    return (

        <button className={theClass} style={style}>
           <img src={icon} alt="icon" />
           <p>{text}</p>
        </button>
    )
}
export{Label_Input}