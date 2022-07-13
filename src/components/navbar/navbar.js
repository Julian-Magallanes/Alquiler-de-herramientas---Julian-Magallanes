import { FaList } from 'react-icons/fa';
const Menu = () => {
    return (
        <nav className="navbar navbar-expand-md">
        <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler"><FaList/></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul className="nav__menu navbar-nav">
                <li className=" nav-item">
                    <a className="nav__menuLink nav-link active" aria-current="page" href="">CATALOGO</a>
                </li>
                <li className="nav-item">
                    <a className="nav__menuLink nav-link active" aria-current="page" href="">CONTACTANOS</a>
                </li>
                <li className="nav-item">
                    <a className="nav__menuLink nav-link active" aria-current="page" href="">DONDE ESTAMOS</a>
                </li>
                <li className="nav-item">
                    <a className="nav__menuLink nav-link active" aria-current="page" href="">QUIENES SOMOS</a>
                </li>
            </ul>
            </div>
        </div>
    </nav>
    )
}
export default Menu;