import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./pages/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./pages/ItemDetailContainer/ItemDetailContainer";
import Detail from "./pages/Detail/Detail";
import ItemCount from "./components/ItemCount/ItemCount";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/"elemnt={<ItemListContainer /> } />
      <Route path="item"elemnt={<ItemDetailContainer/>}/>
      <Route path="detail"elemnt={<Detail/>}/>
    </Routes>
    </BrowserRouter>

      /*<div>
      <NavBar/>
      <ItemListContainer greeting='Tienda de Ropa'/>
      
      </div>*/

  );
}

export default App;
