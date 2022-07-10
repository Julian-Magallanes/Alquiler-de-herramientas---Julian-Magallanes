
const styles = {
    h1Styles: {
        font: '40px',
    },
}
const ItemListContainer = ({greeting}) => {
    return (
        <h1 styles={styles.h1Styles}>{greeting}</h1>
    )
}
export default ItemListContainer ;