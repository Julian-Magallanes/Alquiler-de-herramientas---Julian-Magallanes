import { useState } from 'react';

const styles = {
    h3Styles: {
        font: '20px',
        padding: '20px',
    },
}
const ItemCount = ({stock}) => {
    const [numero, setNumero] = useState(0);
    const [carrito, setCarrito] = useState(0);
    const sumar = () => {
        if(numero < stock ){setNumero (numero + 1);}
    }
    const restar = () => {
        if(numero > 0 ){setNumero (numero - 1);}   
    }
    const onAdd = () => {
        if(carrito < 4 ){setCarrito(carrito+numero)}  
    }
    return (
        <div>
            <div>
                <div className="container-card">
                    <div className="botonera btn btn-dark" >
                    <h4>AGREGAR: {numero}</h4>
                <button className="btn btn-secondary operacion" onClick={restar}>-</button>
                <button className="btn btn-secondary operacion" onClick={sumar}>+</button>
                </div>
                    <button className="botonera btn btn-dark" onClick={onAdd}>Agregar al carrito</button>
                </div>
            </div>
        </div>
    )
}
export default ItemCount ;