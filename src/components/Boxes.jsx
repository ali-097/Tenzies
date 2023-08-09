import React from "react"

const Boxes = (props) => {
    return (
        <div className="dice--items" onClick={() => props.toggle(props.id)}
            style={props.on ? {backgroundColor:"#269dc7"} : {backgroundColor:"white"}}>
                <h2>{props.number}</h2>
        {/* <div className="dice--items" onClick={props.toggle}
            style={props.isHeld ? {backgroundColor:"#269dc7"} : {backgroundColor:"white"}}>
            <h2>{props.number}</h2> */}
        </div>
    )
}

export default Boxes;