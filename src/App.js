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
  const [carrito, setCarrito] = useState(0)
  const [stock, setstock] = useState(4)
  const sumar = () => {
      if(numero < stock ){setNumero (numero + 1);}
  }
  const restar = () => {
    if(numero > 0 ){setNumero (numero - 1);}   
  }
  const onAdd = () => {
    if(carrito < 4 ){setCarrito(carrito+numero)}
    if(stock > 0 )setstock(stock-numero)  
  }
  
  return (
    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Menu className="App-menu"/>
        <div className="App-header__search">
          <Buscador/>
          <Carrito carrito={carrito}/>
        </div>
      </header>
      <main className="col-sm-4 card">
        <div className="card-text">
        <div className="stock">
        <ItemListContainer greeting="Stock ="/>
        <h1>{stock}</h1>
        </div>
        <div className="container-card">
          <ItemCount numero={numero}/>
          <div className="botonera btn btn-dark" >
            <button className="btn btn-secondary" onClick={restar}>-</button>
            <button className="btn btn-secondary" onClick={sumar}>+</button>
          </div>
          <button className="botonera btn btn-dark" onClick={onAdd}>Agregar al carrito</button>
        </div>
        </div>
      </main>
    </div>
  );
}

export default App;
