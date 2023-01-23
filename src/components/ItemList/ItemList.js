
import Item from "../Item/Item"
const ItemList = ({products}) => {
  return (
      <ul>
        {products.map((producto) => (
        <Item producto={producto}/>
        
    ))}
    </ul>
  );
};

export default ItemList