import React from "react";

const SecondComponent = () => {

    const characters = [
        {
            name: "Thofinn",
            from: "Vinland Saga"
        },
        {
            name: "Gojo Satoru",
            from: "Jujutsu Kaisen"
        },
        {
            name: "Monkey D Luffy",
            from: "One Piece"
        }
]

    return (
        <div className="second-component">
            <h2><strong>Component 2:</strong> List of anime characters</h2>
            {characters.length >= 1 ?( // THIS is the condition characters.length >= 1
                <ul>
                    {characters.map((character, index) => {
                        return (
                            <div className= 'characters-container' key={index}>
                                <li><strong>Name:</strong> {character.name}</li>
                                <li><strong>From:</strong> {character.from}</li>
                            </div>
                        )
                    })}
                </ul>)
                 : (
                console.log("there is no more than One character") //We are using ternary condition or Ternarias, its like an if/else. ? = if  : = else
                 )
            }
        </div>
    )
}

export default SecondComponent