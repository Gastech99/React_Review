import './App.css';
import Buttons from './components/Buttons';
import Counter from './components/Counter';

function App() {
  let number = 0
  return (
    <div className="App">
      <h1>Ceci est une révision de React JS</h1>
      <p>Compteur</p>
      <Counter>{number}</Counter>
      <Buttons content="-"/>
      <Buttons content="+"/>
    </div>
  );
}

export default App;
