import './App.css';
import Buttons from './components/Buttons';

function App() {
  return (
    <div className="App">
      <h1>Ceci est une révision de React JS</h1>
      <p>Compteur</p>
      <Buttons content="-"/>
      <Buttons content="+"/>
    </div>
  );
}

export default App;
