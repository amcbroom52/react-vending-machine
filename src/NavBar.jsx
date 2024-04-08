import { NavLink } from "react-router-dom";
import "./NavBar.css"

function NavBar() {
  return (
    <nav>
      <NavLink className="Nav-Link" to="/chips">Chips</NavLink>
      <NavLink className="Nav-Link" to="/soda">Soda</NavLink>
      <NavLink className="Nav-Link" to="/sardines">Sardines</NavLink>
      <NavLink className="Nav-Link" to="/">Vending Machine</NavLink>
    </nav>
  );
}

export default NavBar;