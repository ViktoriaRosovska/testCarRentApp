import { NavLink } from "react-router-dom";
import { Menu } from "./Nav.styled";

export const Nav = () => {
  return (
    <Menu>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/catalog">Catalog</NavLink>
      <NavLink to="/favorites">Favorites</NavLink>
    </Menu>
  );
};
