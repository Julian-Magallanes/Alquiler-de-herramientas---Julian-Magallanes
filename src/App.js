import { useState } from 'react';
import logo from './neutro-06.png';
import './App.css';
import Buscador from './components/navbar/searcher';
import Menu from './components/navbar/navbar';
import Carrito from './components/navbar/cardWidget';
import ItemListContainer from './components/itemListContainer/itemListContainer';
import ItemCount from './components/itemListContainer/itemConunt';

function App() {
  const [numero, setNumero] = useState(0);
  const incrementar = () => {
      setNumero (numero + 1);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Menu className="App-menu"/>
        <div className="App-header__search">
          <Buscador/>
          <Carrito/>
        </div>
      </header>
      <main>

        {numero < 4 ? <ItemCount numero={numero}/> : (<h5>ya no hay stock</h5>)}
        <button onClick={incrementar}>Cuantos Necesitas</button>
      </main>
    </div>
  );
}

export default App;
