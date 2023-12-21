import React, {useState} from "react";

export const MyFirstState = () => {

    /* without use state (doesn´t work)
    let name = "John Doe"

    const changeName = () => {
        name = "Andres Nei"
    }
    */

    const [name, setName] = useState(" John Doe ");

    const changeName = (e, staticName) => {
        setName(staticName)
    }

    return (
        <div>
            <h3>Component: MyFirstState</h3>
            <strong className="label">
                {name}
            </strong>
            <button onClick={e => changeName(e, "Andres Nei ")}> Change name for Andres </button>
            <br/>
            <input type="text" placeholder="Change the name" onChange={e => changeName(e, e.target.value)}></input>
            {/* <input type="text" placeholder="Change the name" onKeyUp={e => changeName(e, e.target.value)}></input> */}
        </div>

    )
}