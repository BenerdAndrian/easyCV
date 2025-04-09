function GenerateCV(props){
    //receive data object from props
    const data=props.receive;
    return (
        <div id="CV">
            <div className="CVHeader">
                <div className="fullname">
                    <span>{data.firstName}</span>
                    <span>{data.lastName}</span>
                </div>
                <h3>{data.occupation}</h3>
                <p>{data.summary}</p>
            </div>
            <div className="CVMain">
                <div className="row1">
                    <div className="workHistorySection"></div>
                    <div className="contactSection"></div>
                </div>
                <div className="row2">
                    <div className="educationSection"></div>
                    <div className="skillsSection"></div>
                </div>
            </div>
        </div>
    )
}
export {GenerateCV}