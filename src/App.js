import { useState } from 'react';
import './App.css';
import Buttons from './components/Buttons';
import Counter from './components/Counter';

function App() {
  // initialisation de la variable
  const [number, setNumber] = useState(90)

  // Création des fonctions add et substract
  function add (){
    setNumber(number + 1)
    console.log(number)
  }

  function substract (){
    setNumber(number - 1)
    console.log(number)
  }

  return (
    <div className="App">
      <h1>Ceci est une révision de React JS</h1>
      <p>Compteur</p>
      <Counter>{number}</Counter>
      <Buttons click={substract} content="-"/>
      <Buttons click={add} content="+"/>
    </div>
  );
}

export default App;
