import React from "react";

const ThirdComponent = (props) => {

    console.log(props)

    return(
        <div className="third-component">
            <h3>Component to Learn component comunication</h3>
            <ul>
                <li>{props.name}</li>
                <li>{props.last}</li>
                <li>{props.userCard.height}</li>
                <li>{props.userCard.weight}</li>
                <li>{props.userCard.blood}</li>
                <li>{props.userCard.state}</li>

            </ul>
        </div>
    )
}

export default ThirdComponent