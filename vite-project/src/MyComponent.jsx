import React from "react";

const Mycomponent = () => {

    const name = "Andres";
    const lvl = 14

    //You can also use an object 
    let user = {
        name: "Andres" ,
        last: "Nei" ,
        level: 15 ,
    }

    return (
        <>
        <div className="first-comp">
            <h2>Hello guys</h2>
                    <li>Name: {user.name}</li>
                    <li>Name: {user.last}</li>
                    <li>Level : {user.level}</li>
        </div>
        </>
    )
}

export default Mycomponent