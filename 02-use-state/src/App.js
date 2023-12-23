import logo from './logo.svg';
import './App.css';
import { MyFirstState } from './components/MyFirstState';
import { Exercise } from './components/exercise';

function App() {

  const date =  new Date()
  const actualYear = date.getFullYear();
  console.log(actualYear)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {/* <h1> States - Hook useState </h1>

        <MyFirstState></MyFirstState> */}

        <Exercise year= {actualYear} ></Exercise>
      </header>
    </div>
  );
}

export default App;
