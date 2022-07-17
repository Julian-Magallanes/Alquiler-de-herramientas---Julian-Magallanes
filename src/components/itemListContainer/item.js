import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ item }) => {
    return(
        <div className="col-sm-3 card">
            <h2 className="card-text">{item.name}</h2>
            <img src={item.img} className="imgProducts"/>
            <Link to={`/item/${item.id}`}><button className="botonera btn btn-dark">Mas detalles</button></Link>
        </div>
    );
};

export default Item;