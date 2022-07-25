import { FaShoppingCart } from 'react-icons/fa';
import React, {useContext} from 'react';
import { CartContext } from '../../context/cartContext';

const Carrito = () => {
    const producto = useContext(CartContext);
    
    return (
        
        <button type="button" className="btn btn-secondary">
            <FaShoppingCart /> <span className="badge badge-light">{producto.carrito}</span>
        </button>
    )
}
export default Carrito;