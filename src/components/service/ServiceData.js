import "./Service.css"


function ServiceData(props){
    return(
        <div className="t-card">
            <div className="t-image">
                <img alt="placeholder" src={props.img}></img>
            </div>
            <h4>{props.heading}</h4>
            <p>{props.text}</p>
        </div>
    )
}



export default ServiceData