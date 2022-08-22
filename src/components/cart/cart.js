import { FaChevronLeft } from 'react-icons/fa';
import React, {useContext} from 'react';
import { CartContext } from '../../context/cartContext';
import { Link } from 'react-router-dom';
import CartItem from './cartItem';
//import {addDoc, collection, getFirestore } from 'firebase/firestore'
//import {useState } from 'react';
const Cart = () => {
    const {cart, deleteAll} = useContext(CartContext);
    if (cart.length===0){
        return(
            <div className='card'>
                <h5 >El carrito esta vacio, muchos productos te estan esperando.</h5>
                <Link to={"/catalogo"} ><button className="btn btn-ligth"><h2><FaChevronLeft/> Volver al catalogo</h2></button></Link>
            </div>
        );
    }
    return (
        <>
        <div>
            <Link to={"/catalogo"} ><button className="btn btn-ligth finish"><p><FaChevronLeft/>Volver al catalogo</p></button></Link>
            
                    <>
                        {cart.map((product, id) =>(
                                <CartItem product={product} key={id}/>
                            )   
                        )}
                    </>
                
        </div>
        <div className="button-cart">
            <button className="botonera btn btn-dark " onClick={deleteAll} >Limpiar el carrito</button>
        </div>

            <div className="orders ">
            <Link to={"/orden"} className="botonera btn btn-dark ">Crear orden</Link>
                
            </div>
        </>
    );
}
export default Cart;
