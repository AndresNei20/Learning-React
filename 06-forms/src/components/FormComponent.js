import React from 'react'

const FormComponent = () => {
  return (
    <div className='form-component'>
      <h1>Form</h1>

      <form>
            <input type='text' placeholder='name'></input>
            <input type='text' placeholder='last'></input>
            <select>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
            <textarea placeholder='Bio'></textarea>
            <input type='submit' value="Send"></input>

      </form>
    </div>
  )
}

export default FormComponent
