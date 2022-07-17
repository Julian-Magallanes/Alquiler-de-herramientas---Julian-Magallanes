import { FaShoppingCart } from 'react-icons/fa';

const Carrito = ({carrito}) => {

    return (
        <button type="button" className="btn btn-secondary">
            <FaShoppingCart /> <span className="badge badge-light">{carrito}</span>
        </button>
    )
}
export default Carrito;