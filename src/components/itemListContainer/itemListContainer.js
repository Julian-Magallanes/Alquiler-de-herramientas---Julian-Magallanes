import React from 'react';
import { useEffect, useState } from "react";
import ItemList from './itemList';
import  products  from "./products";
import Spinner from 'react-bootstrap/Spinner';
const ItemListContainer = () => {
    const [items, setItems] = useState([])
    const [load, setLoad] = useState(true)
    useEffect(() => {
        const getProducts = new Promise ((resolve) => {
            setLoad(true)
            setTimeout(() => {
                resolve(products)
            }, 2000);
        });
        getProducts
        .then((data) => {
            setItems(data);
            setLoad(false)
        })
        .catch((error) => {
            console.log(error);
        })
    }, [])
    return (<> {load ? 
            <div className="home">
                <div className="home-content">
                    <Spinner animation="border" role="status" >
                        <span className="visually-hidden"></span>
                    </Spinner>
                </div>
            </div> :
            <div className='row '>
                <ItemList items={items}/>
            </div>
            }</>
    )
}
export default ItemListContainer ;