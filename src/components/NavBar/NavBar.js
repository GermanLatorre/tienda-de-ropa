
import './style.css';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
  return (
    <div className="navBar">
    <div>logo</div>
    <div>
      <ul className="options">
        <li><NavLink to="/" className={({ isActive }) => isActive ? "active": "inactive"}>INICIO</NavLink></li>
        <li><NavLink to="/category/electronics" className={({ isActive }) => isActive ? "active": "inactive"}>ELECTRONICA</NavLink></li>
        <li>Remeras</li>
        <li>Pantalones</li>
        <li>Bermudas</li>
        <li>Zapatillas</li>
      </ul>
    </div>
    <div>
      <CartWidget/>
    </div>
    </div>
  );
};

export default NavBar;

