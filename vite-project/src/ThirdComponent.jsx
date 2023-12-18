import React from "react";
import Proptypes from "prop-types"

const ThirdComponent = ({name, last, userCard}) => {

    return(
        <div className="third-component">
            <h3>Component to Learn component comunication</h3>
            <ul>
                <li>{name}</li>
                <li>{last}</li>
                <li>{userCard.height}</li>
                <li>{userCard.weight}</li>
                <li>{userCard.blood}</li>
                <li>{userCard.state}</li>

            </ul>
        </div>
    )
}

ThirdComponent.propTypes = {
    name: Proptypes.string.isRequired, //Proptypes.string.isRequired  this mean that the prop must to have content
    last: Proptypes.string , //if this prop doesnt come with any data, this going to be void or undefined
    userCard: Proptypes.object
}

export default ThirdComponent