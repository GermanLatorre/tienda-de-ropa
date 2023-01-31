import { useState, useEffect, useContext } from "react"
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail/ItemDetail";



const ItemDetailContainer = () => {
  const {producto, setProducto} = useState({})
  const {id} =useParams(); 
  const getProducts = fetch (`https://fakestoreapi.com/products/${id}`, {
    method:'GET',
    headers: {
      'content-type':'json',

    },
   }[id])
  return (
    <div>
      <ItemDetail prod={producto}/>
    </div>
  )
};

export default ItemDetailContainer

