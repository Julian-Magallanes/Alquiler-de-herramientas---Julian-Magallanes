import { FaChevronLeft } from 'react-icons/fa';
import React, {useContext} from 'react';
import { CartContext } from '../../context/cartContext';
import { Link } from 'react-router-dom';
import CartItem from './cartItem';
import {addDoc, collection, doc, updateDoc, getFirestore } from 'firebase/firestore'
import {useState } from 'react';
const Cart = () => {
    const {cart, deleteAll} = useContext(CartContext);
    const [orderId, setOrderId] = useState('');
    const createOrder = async (e) => {
        e.preventDefault();
        const db = getFirestore();
        const orderCollectionQuery = collection(db, 'orders');
        const order = {
            buyer: {name: 'Julia',phone: '1122334245',email: 'jui@gmail.com' },
            items: cart.map((item) => ({
                title: item.name,
                price: item.price,
            })),
            total: cart.reduce(
                (acc, item) => acc + item.price * item.carrito,
                0
            ),
        };
        await addDoc(orderCollectionQuery, order)
        .then((response) => {
            console.log(response.id);
            setOrderId(response.id);
            return response.id;
        })
        .catch((error) => {
            console.log(error);
        });
    };

    
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
                <button onClick={createOrder} className="botonera btn btn-dark ">Crear orden</button>
                
            </div>
        </>
    );
}
export default Cart;
