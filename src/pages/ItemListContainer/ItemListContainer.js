import ItemCount from "../../components/ItemCount/ItemCount"
import { useEffect, useState } from "react";
import ItemList from "../../components/ItemList/ItemList"
const arreglo =[
       'producto1',
       'producto2',
       'producto3',
       'producto4',
       'producto5',
       'producto6',
       'producto7',
    ]
const ItemListContainer = ({greeting}) => {
  const [ products, setProducts ] = useState([]);
  const [singleProduct, setSingleProduct] = useState({});
 getProducts= new Promise((resolve, reject) => {
 
    setTimeout(() => {
    resolve(arreglo);
    }, 2000);
  });

  const getProducts = fetch ('https://fakestoreapi.com/products', {
    method:'GET',
    headers: {
      'content-type':'json',

    },
  })
  const getProduct = fetch ('https://fakestoreapi.com/products/1', {
    method:'GET',
  });

  useEffect(() => {
    getProducts
    .then((res) => {
      return res.json();
      })
    .then((response) => {
      setProducts(response);
    })
    .catch((error) => console.log(error));
  },[])

  useEffect(() => {
    getProduct
    .then((resp) => {
      return resp.json();
    })
    .catch((error) => {console.log(error)})
  }, [])
  return (
  <div>
    {greeting}
    <ItemCount/>
    <ItemList productos={products}/>
    <h1>
      Este es un producto especifico
    </h1>
    </div>
  );
};

export default ItemListContainer