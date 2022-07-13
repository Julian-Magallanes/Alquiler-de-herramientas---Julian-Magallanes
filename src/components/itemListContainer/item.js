import React from 'react';

const Item = ({ item }) => {
    return(
        <div className="col-sm-3 card">
            <h2 className="card-text">{item.name}</h2>
            <img src={item.img} className="imgProducts"/>
            <p className="card-text">{item.description}</p>
            <div>
                <h4 className="card-text">Precio: ${item.price}</h4>
                <h5 className="card-text">Stock: {item.stock}</h5>
            </div>
        </div>
    );
};

export default Item;