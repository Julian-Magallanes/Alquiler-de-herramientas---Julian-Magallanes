import { FaShoppingCart } from 'react-icons/fa';
const Carrito = ({carrito}) => {
    return (
        <button type="button" class="btn btn-secondary">
            <FaShoppingCart /> <span class="badge badge-light">{carrito}</span>
        </button>
    )
}
export default Carrito;