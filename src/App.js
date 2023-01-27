import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./pages/ItemListContainer/ItemListContainer";

import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/" element={<ItemListContainer/>}/>
      <Route path="category/:category" element={<ItemListContainer/>}/>
    </Routes>
    </BrowserRouter>

      /*<div>
      <NavBar/>
      <ItemListContainer greeting='Tienda de Ropa'/>
      
      </div>*/

  );
}

export default App;