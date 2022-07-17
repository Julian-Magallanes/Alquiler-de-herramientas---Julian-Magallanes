import ItemCount from "../itemCount/itemCount";


const ItemDetail = ({ item }) => {
    
    const {name, price, stock, img, description} = item || {};
    return (
        <div className="card text-center">
        <h2 className="card-text">{name}</h2>
        <img src={img} className="imgProducts"/>
        <p className="card-text">{description}</p>
        <div>
            <h4 className="card-text">Precio: ${price}</h4>
            <h5 className="card-text">Stock: {stock}</h5>
        </div>
        <ItemCount stock={stock}/>
    </div>
    )
}
export default ItemDetail;