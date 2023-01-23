const Item = ({producto}) => {
  return (
  <li key ={producto.id}>
    <img alt={producto.title} src={producto.image}/>
    <h2>{producto.title}</h2>
    <h3>{producto.category}</h3>
    <h3>{producto.description}</h3>
  </li>
  );
};

export default Item