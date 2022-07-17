import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import ItemDetail from './itemDetail';
import products from "../itemListContainer/products";

const ItemDetailContainer = () => {
    const [item, setItem] = useState({})
    const {id} = useParams()

    const getItemId = () => {
        return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products.find(obj => obj.id == id))
        }, 500)
    })
}
    useEffect(()=>{
        getItemId().then(res=>{
            setItem(res)
        }
        )
    },[])

    return (
            <ItemDetail item={item}/>
    )
}
export default ItemDetailContainer;