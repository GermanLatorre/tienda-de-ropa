
import './style.css';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
  return(
  <div className="navBar">
    <NavLink to="/" ><img src="../images/logo.avif" alt="logo" /> </NavLink>
      <div>
        <ul className="options">
          <li><NavLink to="/" className={({ isActive }) => isActive ? "active" : "inactive"}>INICIO</NavLink></li>
          <li><NavLink to="/category/electronics" className={({ isActive }) => isActive ? "active" : "inactive"}>ELECTRONICA</NavLink></li>
          <li><NavLink to="/category/women's clothing" className={({ isActive }) => isActive ? "active" : "inactive"}>ROPA DE DAMA</NavLink></li>
          <li><NavLink to="/category/men's clothing" className={({ isActive }) => isActive ? "active" : "inactive"}>ROPA DE CABALLERO</NavLink></li>
          <li><NavLink to="/category/jewelery" className={({ isActive }) => isActive ? "active" : "inactive"}>JOYERIA</NavLink></li>
        </ul>
      </div>
      <div>
        <CartWidget />
      </div>
    </div>
    )
  }

    export default NavBar;


