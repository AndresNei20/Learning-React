import React, { useState } from 'react'

const FormComponent = () => {

  const [user, setUser] = useState({});

  const getDataForm = e => {
    e.preventDefault(); //this dont reload the page

    let data = e.target;
    console.log(data.name.value)
    let user = {
      name:data.name.value,
      last:data.last.value,
      gender:data.gender.value,
      bio: data.bio.value
    }

    console.log(user)

    setUser(user)
  }


  return (
    <div className='form-component'>
      <h1>Form</h1>
      
       {user.bio && user.bio.lenght >= 1 &&
       
          <div className='user-info-label'>
            {user.name} {user.last} is a {user.gender} and this is its bio: <p> {user.bio}</p>
          </div>
      }
      <form onSubmit={getDataForm}>
            <input type='text' placeholder='name' name="name"></input>
            <input type='text' placeholder='last' name="last"></input>
            <select name='gender'>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
            <textarea placeholder='Bio' name='bio'></textarea>
            <input type='submit' value="Send"></input>

      </form>
    </div>
  )
}

export default FormComponent
