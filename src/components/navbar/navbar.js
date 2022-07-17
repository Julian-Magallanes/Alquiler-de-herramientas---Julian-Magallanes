import { FaList } from 'react-icons/fa';
import logo from '../../neutro-06.png';
import Browser from './browser';
import Carrito from './cardWidget';
import { Link, NavLink } from 'react-router-dom';
const Navbar = () => {
    return (
        <nav className="App-header">
            <Link to={"/"}>
            <img src={logo} className="App-logo" alt="logo" />
            </Link>
        <div className="navbar navbar-expand-md">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler"><FaList/></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul className="nav__menu navbar-nav">
                    <li className=" nav-item">
                        <NavLink to={"/catalogo"} className="nav__menuLink nav-link active" aria-current="page" >CATALOGO</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={"/contactanos"} className="nav__menuLink nav-link active" aria-current="page" >CONTACTANOS</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={"/contactanos"} className="nav__menuLink nav-link active" aria-current="page" >DONDE ESTAMOS</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={"/contactanos"} className="nav__menuLink nav-link active" aria-current="page" >QUIENES SOMOS</NavLink>
                    </li>
                </ul>
                </div>
            </div>
        </div>
        <div className="App-header__search">
            <Browser/>
            <Carrito />
        </div>
        </nav>
    )
}
export default Navbar;
