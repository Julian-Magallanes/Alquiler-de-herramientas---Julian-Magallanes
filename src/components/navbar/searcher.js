import { FaSistrix } from 'react-icons/fa';
const Buscador = () => {
    return (
        <form className="form-inline">
            <input className="form-control mr-sm-2" type="search" placeholder="Que estas buscando" aria-label="Search"/>
            <button className="btn btn-outline-secondary my-2 my-sm-0" type="submit"><FaSistrix/></button>
        </form>
    )
}
export default Buscador;