import React, {useState} from "react";

export const MyFirstState = () => {

    /* without use state (doesn´t work)
    let name = "John Doe"

    const changeName = () => {
        name = "Andres Nei"
    }
    */

    const [name, setName] = useState(" John Doe ");

    const changeName = e => {
        setName(" Andres Nei ")
    }

    return (
        <div>
            <h3>Component: MyFirstState</h3>
            <strong>
                {name}
            </strong>
            <button onClick={changeName}> Change </button>
        </div>

    )
}