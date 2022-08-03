import React, {useContext} from 'react';
import { CartContext } from '../../context/cartContext';
const CartItem  = ({product}) => {
    const {deleteOne} = useContext(CartContext);
    return(
        <div className="cart ">
        <div>
            <h4>{product.name}</h4>
            <img src={product.image} className="imgProducts"/>
        </div>
        <div className="itemCart">
            <button className="botonera btn btn-dark" onClick={()=>deleteOne(product.id)}>Eliminar producto</button>
        </div>
        
        <div className="itemCart">
            <div className="detailCart">
                <h5 >Cantidad: {product.carrito}</h5>
                <h4 >Precio por producto: ${product.price*product.carrito}</h4>
            </div>
        </div>
    </div>
    )
}
export default CartItem;