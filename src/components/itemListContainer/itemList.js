import React from 'react';
import Item from './item';
const ItemList = ({ items }) => {
    return(
        <>
            {items.map((item, id) => 
                <Item item={item} key={id}/>
            )}
        </>
    );
};

export default ItemList;