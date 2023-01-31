import ItemCount from "../ItemCount/ItemCount";
import "./style.css";


const ItemDetail = ({producto}) => {
  return (
    <div className="cardDetail">
      <img src={producto.image} alt={producto.name} />
      <h1>{producto.name}</h1>
      <p>{producto.description}</p>
      <h3>$ {producto.price} </h3>
      <ItemCount detalle={producto}/>
    </div>
  )
}

export default ItemDetail