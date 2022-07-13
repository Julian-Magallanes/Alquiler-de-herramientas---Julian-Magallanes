import React from 'react';

const Item = ({ item }) => {
    return(
        <div>
            <h2>{item.name}</h2>
            <img src={item.img} className="imgProducts"/>
            <p>{item.description}</p>
            <div>
                <h4>Precio: ${item.price}</h4>
                <h5>Stock: {item.stock}</h5>
            </div>
        </div>
    );
};

export default Item;