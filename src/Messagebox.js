import React from "react"

function Messagebox(props) {
        return <div>
            {Object.keys(props.queue).map((key, index) =>
    <li key={index}>"{props.queue[key].message}" {props.queue[key].time.slice(-5)}</li>
)}
        </div>
        

} 
export default Messagebox;
