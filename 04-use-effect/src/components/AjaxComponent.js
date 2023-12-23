import React, { useEffect, useState } from "react";

const AjaxComponent = () => {
    
    const [users, setUsers] = useState([]);
    
    //generic function
    const getStaticUsers = () => {
      setUsers([
        {
          id: 1,
          email: "andres.nei@reqres.in",
          first_name: "Andres",
          last_name: "Nei",
          avatar: "https://reqres.in/img/faces/7-image.jpg",
        },
        {
          id: 2,
          email: "Pao.vel@reqres.in",
          first_name: "Pao",
          last_name: "Vel",
          avatar: "https://reqres.in/img/faces/8-image.jpg",
        },
        {
          id: 3,
          email: "john.doe@reqres.in",
          first_name: "John",
          last_name: "Doe",
          avatar: "https://reqres.in/img/faces/9-image.jpg",
        },
      ]);
    };
    
    useEffect(() => {
        getStaticUsers();
    }, [])
    
    
    
  return (
    <div>
      <h2>List of user from Ajax</h2>
      <ol className="users">
        {
            users.map(user =>{
                console.log(user)
                return <li key={user.id}>{user.first_name}{user.last_name}</li>
            })
        }
      </ol>
    </div>
  );
};

export default AjaxComponent;
