import React, { useContext } from "react";

// STYLED COMPONENTS
import { Nav, NavLink, NavBtnCart, CartIcon } from "./NavbarElements";

// ASSETS
import SoloedStoreSVG from '../../assets/soloed_store-logo.svg'
import CartSVG from '../../assets/cart.svg';
import { DataContext } from "../../context/DataProvider";

interface PropsNavbar {
  toggle: () => void;
}

const Navbar: React.FC<PropsNavbar> = ({ toggle }) => {
  const value = useContext(DataContext);
  const cart = value.cart;

  return (
    <Nav>
      <NavLink to="/">
        <img src={SoloedStoreSVG} alt="" />
      </NavLink>
      <NavBtnCart onClick={toggle}>
        <CartIcon src={CartSVG} />
        <p>{cart.length}</p>
      </NavBtnCart>
    </Nav>
  );
};

export default Navbar;
