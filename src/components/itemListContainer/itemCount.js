const styles = {
    h1Styles: {
        font: '40px',
    },
}
const ItemCount = ({numero,stock}) => {
    
    return (
        <div>
        <h1 styles={styles.h1Styles}>Stock = {stock}</h1>
        <h2 styles={styles.h1Styles}>{numero}</h2>
        </div>
    )
}
export default ItemCount ;