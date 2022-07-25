

const styles = {
    h3Styles: {
        font: '20px',
        padding: '20px',
    },
}
const ItemCount = ({numero, restar, sumar}) => {

    return (
        <div>
            <div>
                <div className="container-card">
                    <div className="botonera btn btn-dark" >
                    <h4>AGREGAR: {numero}</h4>
                <button className="btn btn-secondary operacion" onClick={restar}>-</button>
                <button className="btn btn-secondary operacion" onClick={sumar}>+</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ItemCount ;