import { FaList } from 'react-icons/fa';
const Menu = () => {
    return (
        <nav class="navbar navbar-expand-md">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler"><FaList/></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul class="nav__menu navbar-nav">
                <li class=" nav-item">
                    <a class="nav__menuLink nav-link active" aria-current="page" href="">CATALOGO</a>
                </li>
                <li class="nav-item">
                    <a class="nav__menuLink nav-link active" aria-current="page" href="">CONTACTANOS</a>
                </li>
                <li class="nav-item">
                    <a class="nav__menuLink nav-link active" aria-current="page" href="">DONDE ESTAMOS</a>
                </li>
                <li class="nav-item">
                    <a class="nav__menuLink nav-link active" aria-current="page" href="">QUIENES SOMOS</a>
                </li>
            </ul>
            </div>
        </div>
    </nav>
    )
}
export default Menu;