import React, { useEffect, useState } from "react";

const AjaxComponent = () => {
    
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true)
    const [errors, setErrors] = useState("")
    
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

    const getUsersAjaxPms = () => {
        fetch("https://reqres.in/api/users?page=1")
        .then(res => res.json())
        .then(final_res => {
            console.log(final_res)
            setUsers(final_res.data)
            console.log(users)
        },
        error => {
            console.log(error)
        })
    }

    const getUsersAsyncAwait = () =>{

        setTimeout(async() => {
            try{
                 const req = await fetch('https://reqres.in/api/users234?page=1');
            const {data} = await req.json();
            setUsers(data);
            setLoading(false);
            console.log(data); 
            }catch(error){
                console.log(error.message);
                setErrors(error.message);
            }
          
        }, 2000);
    }
    
    useEffect(() => {
        getUsersAsyncAwait();
        //getUsersAjaxPms();
        //getStaticUsers();
    }, [])

    if(errors !== ""){
        return(
            <div className="errors">
                {errors}
            </div>
        )
    }else if(loading == true){
        return(
        <div className="loading">
            <h2>Loading data...</h2>
        </div>
    )
    }else if(loading == false && errors === ""){
         return (
    <div>
      <h2>List of user from Ajax</h2>
      <ol className="users">
        {
            users.map(user =>{
                console.log(user)
                return <li key={user.id}>
                            <img src={user.avatar} width="20"/>
                            {user.first_name}{user.last_name}
                      </li>
            })
        }
      </ol>
    </div>
  );
};
    }
    
    
 

export default AjaxComponent;
