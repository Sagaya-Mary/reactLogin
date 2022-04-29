import React from "react"
const Welcome = (props) => {

    return (
        <div className="button-log">
            <button type="submit" id="submit-btn"> {props.name} </button>
        </div>
    )
}



export default Welcome;