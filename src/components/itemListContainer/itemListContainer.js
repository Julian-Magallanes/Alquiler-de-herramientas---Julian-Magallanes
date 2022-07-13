import React from 'react';
import { useEffect, useState } from "react";
import ItemList from './itemList';
import { products } from "./products";

const styles = {
    h1Styles: {
        font: '40px',
    },
}
const ItemListContainer = ({greeting}) => {
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
            <h1 styles={styles.h1Styles}>{greeting}</h1>
            <ItemList items={items}/>
        </div>
    )
}
export default ItemListContainer ;