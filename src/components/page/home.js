import React from 'react';
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div className='home'>
            <div className='home-content'>
            <h2>TENEMOS TODO PARA TU OBRA!</h2>
            <Link to={"/catalogo"}><button className="botonera btn btn-dark">catalogo</button></Link>
            </div>
        </div>

    )
}
export default Home;
