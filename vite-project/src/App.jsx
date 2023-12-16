import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Mycomponent from './MyComponent'
import SecondComponent from './SecondComponent'

function App() {
  
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
      </div>
      <h1>Vite + React</h1>
      
    </>
  )
}

export default App
