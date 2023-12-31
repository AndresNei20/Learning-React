import React from "react";

const EventsComponent = () => {

    const handleClick = (e, name) => {
        alert("hello, you clicked " + name)
    }
    
    const handleDoubleClick = (e, name) => {
        alert("hello, you clicked " + name)
    }

    const uEnter = (e, action) => {
        alert("Hi, you " + action + " the box")
    }

    const uLeave = (e, action) => {
        alert("Hi, you " + action + " the box")
    }

    const urInside = (e) => {
        console.log("You are at the input, introduce your name")
    }

    const urOut = (e) => {
        console.log("You are out the input, introduce your name")
    }

    return(

        <div className="events-components">
            <h3>React Events</h3>
            <p>
            <button onClick={e => handleClick(e, "Andres")}>Click me</button>
            </p>

            <p>
            {/**double click event */}
            <button onDoubleClick={e => handleDoubleClick(e, "Jose")}>Double click me</button>
            </p>

            
            <div id="box"
             onMouseEnter={ e => uEnter(e, "ENTER")}
             onMouseLeave={e => uLeave(e, "LEAVE")}
             >
            {/**onMouseEnter onMOuseLeave */}
            Hover your mouse!!!
            </div>

            <p>
                {/**onFocus onBlur */}
                <input type="text" onFocus={urInside} onBlur={urOut} placeholder="Write your name"/>
            </p>
        
        </div>

    )
}

export default EventsComponent