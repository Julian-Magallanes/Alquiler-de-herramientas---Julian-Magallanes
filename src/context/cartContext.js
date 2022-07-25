import { createContext, useEffect, useState } from "react";

export const CartContext = createContext()

const Provider = (props) =>{
    const [cart, setCart] = useState([])

    useEffect (() => {
        console.log(cart)
    }, [cart]);
    const addToCard = (item, carrito) => {
        if(inCart(item.id)){

        }else {
            setCart([...cart,{...item,carrito}]);
        }
    };
    const inCart = (id) => {
        return cart.some((item) => item.id == id);

    };
    return (
        <CartContext.Provider value={{cart,addToCard}}>
            {props.children}       
        </CartContext.Provider>
    )
}
export default Provider