import './App.css';
import ItemListContainer from './components/itemListContainer/itemListContainer';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from './components/navbar/navbar';
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer';
import Home from './components/page/home';
import Contactanos from './components/page/contactanos';
import Cart from './components/cart/cart';
import Provider from './context/cartContext';

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/catalogo' element={<ItemListContainer/>}/>
          <Route path='/contactanos' element={<Contactanos/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/item/:id' element={<ItemDetailContainer/>}/>
          <Route path='*' element={<h1>404 not found</h1>}/>
        </Routes>
      </BrowserRouter>
    </Provider>
    

  );
}

export default App;
