import React from 'react';
import { useEffect, useState } from "react";
import ItemList from './itemList';
import  products  from "./products";
import Spinner from 'react-bootstrap/Spinner';

import {collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [filter, setFilter] = useState('');
    //const [load, setLoad] = useState(true)
        /*const getProducts = new Promise ((resolve) => {
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
            {load ? 
            <div className="home">
                <div className="home-content">
                    <Spinner animation="border" role="status" >
                        <span className="visually-hidden"></span>
                    </Spinner>
                </div>
            </div> :*/
        const getProducts = async () => {
            const db = getFirestore();
            let q;
            if(filter) {
                q = query(collection(db, 'items'), where ('category', '==', filter))
            }else{
                q= collection(db, 'items')
            }
            await getDocs (q).then((snapshot) => {
            const dataExtraida = snapshot.docs.map((datos)=> {
                return {...datos.data(),id:datos.id,};
            });
            setItems(dataExtraida)
            });
        };

        const setFilterValue = (e) => {
            const filter = e.target.value;
            setFilter(filter)
            getProducts();
        }
        useEffect(()=> {
            getProducts();
        },[filter]);
            
    return (<> 
            <div className='row '>
                <ItemList items={items} setFilterValue={setFilterValue}/>
            </div>
            </>
    )
}
export default ItemListContainer ;