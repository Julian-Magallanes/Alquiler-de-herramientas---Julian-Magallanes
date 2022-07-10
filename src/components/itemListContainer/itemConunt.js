const styles = {
    h1Styles: {
        font: '40px',
    },
}
const ItemCount = ({numero}) => {
    
    return (
        <h2 styles={styles.h1Styles}>{numero}</h2>
    )
}
export default ItemCount ;