import './App.css';
import ItemListContainer from './components/itemListContainer/itemListContainer';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from './components/navbar/navbar';
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer';
import Home from './components/page/home';
import Contactanos from './components/page/contactanos';

function App() {
  /* const [numero, setNumero] = useState(0);
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
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Navbar/>
        <div className="App-header__search">
          <Browser/>
          <Carrito carrito={carrito}/>
        </div>
      </header>
      <main>
      <div className="col-4 card container">
        <div className="container-card">
          <ItemCount numero={numero} stock={stock}/>
          <div className="botonera btn btn-dark" >
            <button className="btn btn-secondary" onClick={restar}>-</button>
            <button className="btn btn-secondary" onClick={sumar}>+</button>
          </div>
          <button className="botonera btn btn-dark" onClick={onAdd}>Agregar al carrito</button>
        </div>
        </div>
        <ItemListContainer/>
      </main>
    </div>
    */
  return (
    <BrowserRouter>
        <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/catalogo' element={<ItemListContainer/>}/>
      <Route path='/contactanos' element={<Contactanos/>}/>
      <Route path='/item/:id' element={<ItemDetailContainer/>}/>
      <Route path='*' element={<h1>404 not found</h1>}/>
    </Routes>
    </BrowserRouter>
    

  );
}

export default App;
