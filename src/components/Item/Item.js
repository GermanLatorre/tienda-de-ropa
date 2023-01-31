import ItemCount from "../ItemCount/ItemCount";
import "./style.css";
import { Link } from "react-router-dom";


const Item = ({producto}) => {
  console.log(producto);
  return (
    <li className="card">
        <Link to= {`/item/${producto.id}`}>
          <img src= {producto.image} alt={producto.title} />
            <h1>{producto.title}</h1>
        </Link>
        <ItemCount/>
    </li>
  )
};

export default Item;