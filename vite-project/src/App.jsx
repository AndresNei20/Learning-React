import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Mycomponent from './MyComponent'
import SecondComponent from './SecondComponent'
import ThirdComponent from './ThirdComponent'
import EventsComponent from './EventsComponents'

function App() {

  const user_card = {
    height: "179cm",
    weight: "70kg",
    blood: "O+",
    state: "Healthy"
  }
  
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

    <div className='component-container'>

      <Mycomponent></Mycomponent>
      <hr/>
      <SecondComponent></SecondComponent>
      <hr/>
      <ThirdComponent 
        name = "Andres" 
        last = "Nei"
        userCard = {user_card}
      >
      </ThirdComponent>
      <hr/>
      <EventsComponent></EventsComponent>

    </div>
      <h1>Vite + React</h1>
      
    </>
  )
}

export default App
