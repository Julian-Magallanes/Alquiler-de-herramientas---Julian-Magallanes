import { FaChevronLeft } from 'react-icons/fa';
import ItemCount from "../itemCount/itemCount";
import { Link } from 'react-router-dom';
import { useState } from 'react';

const ItemDetail = ({ item }) => {
    
    const {name, price, stock, img, description} = item || {};

    const [numero, setNumero] = useState(0);
    const [carrito, setCarrito] = useState(0);
    const [priceTotal, setPriceTotal] = useState(0);
    const sumar = () => {
        if(numero < stock ){setNumero (numero + 1);}
    }
    const restar = () => {
        if(numero > 0 ){setNumero (numero - 1);}   
    }
    const onAdd = () => {
        if(carrito < 4 ){setCarrito(carrito+numero)} 
        setPriceTotal(price*numero) 
    }

    return (
        <>
        <Link to={"/catalogo"} ><button className="btn btn-ligth finish"><p><FaChevronLeft/>Volver al catalogo</p></button></Link>
        <div className="card text-center">
            <h2 className="card-text">{name}</h2>
            <img src={img} className="imgProducts"/>
            <p className="card-text">{description}</p>
            <div>
                <h4 className="card-text">Precio: ${price}</h4>
                <h5 className="card-text">Stock: {stock}</h5>
            </div>
            <ItemCount numero={numero} sumar={sumar} restar={restar} onAdd={onAdd}/>
                
                <button className="botonera btn btn-dark" onClick={onAdd}>Agregar al carrito</button>
                <h4 className="card-text">Precio Total: ${priceTotal}</h4>
            <Link to={"/cart"} ><button className="botonera btn btn-dark">Finalizar compra</button></Link>
        </div>
        </>
    )
}
export default ItemDetail;