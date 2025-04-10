import workIcon from './assets/img/work.svg'
import eduIcon from './assets/img/edu.svg'
function GenerateCV(props){
    //receive data object from props
    const today=new Date();
    const day=today.toISOString().split('T')[0];
    console.log(day)
    const data=props.receive;
    const eduData=props.eduData;
    console.log(data.isStudy)
    console.log('data ne: ',eduData)
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
                    <div className="workHistorySection">
                        <img src={workIcon} alt="work icon" />
                        <span>Work History</span>
                        <hr />
                    </div>
                    <div className="contactSection"></div>
                </div>
                <div className="row2">
                    <div className="educationSection">
                        <img src={eduIcon} alt="edu icon" />
                        <span>Education</span>
                        <hr />
                        <ul className="eduList">
                        {eduData.map((data,i)=> {return <li key={i}>
                            <div className="theDateFormat">
                            <h2>{data.degree}</h2>
                            <p className="dateFormat">
                                <span>{data.startDate}</span>
                                <span>---</span>
                                <span>
                                    {data.isStudy?'Current':data.endDate}
                                   
                                </span>
                            </p>
                            </div>
                            <h3>{data.schoolName}</h3>
                            
                            </li>} )}
                        </ul>
                           
                       
                    </div>
                    <div className="skillsSection"></div>
                </div>
            </div>
        </div>
    )
}
export {GenerateCV}