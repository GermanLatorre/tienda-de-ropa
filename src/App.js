import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./pages/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting='Hola'/>
      </div>

  );
}

export default App;
