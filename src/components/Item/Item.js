import ItemCount from "../ItemCount/ItemCount";
import "./style.css";


const Item = ({producto}) => {
  console.log(producto);
  return (
    <li className="card">
        <div>
          <img src= {producto.image} alt={producto.title} />
            <h1>{producto.title}</h1>
        </div>
        <ItemCount/>
    </li>
  )
};

export default Item;