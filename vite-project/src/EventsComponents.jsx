import React from "react";

const EventsComponent = () => {

    const handleClick = (e, name) => {
        alert("hello, you clicked " + name)
    }

    return(

        <div className="events-components">
            <h3>React Events</h3>
            <button onClick={e => handleClick(e, "Andres")}>Click me</button>
        </div>

    )
}

export default EventsComponent