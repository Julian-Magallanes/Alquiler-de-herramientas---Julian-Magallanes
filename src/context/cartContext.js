import { createContext, useEffect, useState } from "react";

export const CartContext = createContext()
const Provider = (props) =>{
    const [cart, setCart] = useState([])

    useEffect (() => {
        console.log(cart)
    }, [cart]);
    const addToCard = (item, carrito, id) => {
        if(inCart(id)){
        }else {
            setCart([...cart,{...item,carrito,id}]);
        }
    };
    const inCart = (id) => {
        return cart.some((item) => item.id === id);

    };
    const deleteOne = (id) => {
        const filtrarProd = cart.filter((product) => product.id !==id);
        setCart(filtrarProd);
    };
    const deleteAll = () => {
        setCart([]);
    };
    return (
        <CartContext.Provider value={{cart,addToCard,deleteOne,deleteAll}}>
            {props.children}       
        </CartContext.Provider>
    )
}
export default Provider