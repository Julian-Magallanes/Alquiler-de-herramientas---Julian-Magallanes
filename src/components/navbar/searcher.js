import { FaSistrix } from 'react-icons/fa';
const Buscador = () => {
    return (
        <form class="form-inline">
            <input class="form-control mr-sm-2" type="search" placeholder="Que estas buscando" aria-label="Search"/>
            <button class="btn btn-outline-secondary my-2 my-sm-0" type="submit"><FaSistrix/></button>
        </form>
    )
}
export default Buscador;