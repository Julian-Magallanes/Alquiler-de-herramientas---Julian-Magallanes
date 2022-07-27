import { FaShoppingCart } from 'react-icons/fa';
import React, {useContext} from 'react';
import { CartContext } from '../../context/cartContext';
import { Link } from 'react-router-dom';

const Carrito = () => {
    const {cart} = useContext(CartContext);
    if(cart.length===0){
        return(<Link to={"/cart"}>
                    <button type="button" className="btn btn-secondary">
                        <FaShoppingCart /> <span className="badge badge-light"></span>
                    </button>
        </Link>
        )
    }
    
    return (
        <div>
                <Link to={"/cart"}>
                    <button type="button" className="btn btn-secondary">
                        <FaShoppingCart /> <span className="badge badge-light">{cart.length}</span>
                    </button>
                </Link>
        </div>
    )
}
export default Carrito;