import React, {useState} from 'react'
import PropTypes from "prop-types"

export const Exercise = ({year}) => {

    const [yearNow, setYearNow] = useState(year);

    const previousYear = e => {
        setYearNow(yearNow - 1)
    }

    const nextYear = e => {
        setYearNow(yearNow + 1)
    }

    const changeYear = e => {
        let data = parseInt(e.target.value);
        if(Number.isInteger(data)){
            setYearNow(data)
        }else{
            console.log("Its not a number")
            setYearNow(year)
        }        
    }

  return (
    <div>
      <h3> Exercise with events and useState</h3>

    <figure className='exercise-container'>
        <button onClick={previousYear}>Previous</button>
  
          <strong className='label-green'>
        {yearNow}
      </strong>

        <button onClick={nextYear}>Next</button>

        <p>
            <input onChange={changeYear} type='text' placeholder='Change the year'></input>
        </p>
    </figure>
    </div>
  )
}

Exercise.propTypes = {
    year: PropTypes.number.isRequired
}


