import './App.css';
import Buttons from './components/Buttons';
import Counter from './components/Counter';

function App() {
  // initialisation de la variable
  let number = 0

  // Création des fonctions add et substract
  function add (){
    number ++
    console.log(number)
  }

  function substract (){
    number --
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
