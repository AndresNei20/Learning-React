import React, { useState, useEffect } from "react";

const TestComponent = () => {
  const [user, setUser] = useState("Andres Nei");

  const [date, setDate] = useState("20-08-2004")

  const modUser = (e) => {
    setUser(e.target.value);

  };

  const modDate = e => {
    setDate(new Date().toLocaleDateString())
  }
  

  useEffect(() => {
    console.log("You´ve loaded the component!! or you chaanged something in the component")
  }, []) //this [] means that the function works just one time and its when the component load

  useEffect(() => {
    console.log("You've change the user")
  }, [user]) 

  return (
    <div>
      <h2> The effect - Hook useEffect</h2>
      <strong className="label">{user}</strong>
      <strong className="label">{date}</strong>
      <p>
        <input
          type="text"
          onChange={modUser}
          placeholder="Change your name"
        ></input>
        <button onClick={modDate}>Change date</button>
      </p>
    </div>
  );
};

export default TestComponent;
