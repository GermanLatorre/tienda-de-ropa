import Item from "../Item/Item";


const ItemList = ({productos}) => {
  return (
      <ul>
        {productos.map((prod)=>(<Item producto={prod} key={prod.title}/> ))}
      
    </ul>
  );
};

export default ItemList