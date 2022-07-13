import React from 'react';
import { useEffect, useState } from "react";
import ItemList from './itemList';
import { products } from "./products";
const ItemListContainer = ({stock}) => {
    const [items, setItems] = useState([])
    useEffect(() => {
        const getProducts = new Promise ((resolve, reject) => {
            setTimeout(() => {
                resolve(products)
            }, 2000);
        });
        getProducts
        .then((data) => {
            setItems(data);
        })
        .catch((error) => {
            console.log(error);
        })
    }, [])
    return (
        <div>
            <div className='row '>
                <ItemList items={items}/>
            </div>

        </div>
    )
}
export default ItemListContainer ;