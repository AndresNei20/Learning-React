import React, { useEffect } from 'react'

const AdviceComponent = () => {

    useEffect(() => {
        //appears when the component is loaded
        alert("The component is loaded")

        //when the components quit 
        return () => {
            alert("Component just quit")
        }//this return works for "Desmontar" the component

    }, []); //the components runs just ONE time because we give it an empty array

  return (
    <div>
        <hr></hr>
      <h3>You found your love ❤</h3>
      <button onClick={e => {
        alert("Welcome")
      }}>Show Alert</button>
    </div>
  )
}

export default AdviceComponent
