import React from 'react';
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import ItemDetail from './itemDetail';
//import products from "../itemListContainer/products";
import Spinner from 'react-bootstrap/Spinner';
import {doc, getDoc, getFirestore } from 'firebase/firestore'
const ItemDetailContainer = () => {
    const [item, setItem] = useState()
    const {id} = useParams()
    const [load, setLoad] = useState(true)
    /*
    const {id} = useParams()
    const getItemId = () => {
        return new Promise((resolve)=>{
            setLoad(true)
            setTimeout(()=>{
                resolve(products.find(obj => obj.id == id))
        }, 500)
    })
}
    useEffect(()=>{
        getItemId().then(res=>{
            setItem(res)
            setLoad(false)
        }
        )
    },[])
    

*/
    const getProducts = async () => {
        const db = getFirestore();
        
        const itemConfig =  doc (db, 'items', id);
        getDoc(itemConfig).then((snapshot) => {
            setItem(snapshot.data());
            setLoad(false)
        });
    };
    useEffect(()=> {
        getProducts();
    },[])
    return (
        <>{load ? 
            <div className="home">
                <div className="home-content">
                    <Spinner animation="border" role="status" >
                        <span className="visually-hidden"></span>
                    </Spinner>
                </div> 
            </div>:
        <ItemDetail item={item} id={id}/> }
        </>
    )
}
export default ItemDetailContainer;