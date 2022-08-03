import React from 'react';
import Item from './item';
const ItemList = ({ items, setFilterValue}) => {
    return(
        <>  <div className="btn-group">
                <button className="botonera btn btn-outline-secondary " onClick={(event) => setFilterValue (event)} value="hormigon">Hormigon</button>
                <button className="botonera btn btn-outline-secondary " onClick={(event) => setFilterValue (event)} value="asfalto">Asfalto</button>
                <button className="botonera btn btn-outline-secondary " onClick={(event) => setFilterValue (event)} value="electricidad">Electricidad</button>
            </div>
            <div className='row '>
            {items.map((item, id) => 
                <Item item={item} key={id}/>
            )}
            </div>
        </>
    );
};

export default ItemList;