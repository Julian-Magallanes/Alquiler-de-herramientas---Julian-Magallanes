import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import ItemDetail from './itemDetail';
import products from "../itemListContainer/products";
import Spinner from 'react-bootstrap/Spinner';


const ItemDetailContainer = () => {
    const [item, setItem] = useState({})
    const {id} = useParams()
    const [load, setLoad] = useState(true)

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

    return (
        <> {load ? 
        <div className="home">
            <div className="home-content">
                <Spinner animation="border" role="status" >
                    <span className="visually-hidden"></span>
                </Spinner>
            </div> 
        </div>:
        <ItemDetail item={item}/>} </>
    )
}
export default ItemDetailContainer;