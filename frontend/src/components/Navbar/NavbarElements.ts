import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ffff00;
  width: 100%;
  height: 9vh;

  padding: 4rem 5rem;

  z-index: 1;

  font-weight: 700;

  @media screen and (max-width: 480px) {
    padding: 1rem 1rem;
  }
`;

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
`;

export const NavBtnCart = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90px;
  height: 45px;
  padding: 1.2rem;
  color: #ffff00;
  background: #000000;
  border-radius: 8px;
  cursor: pointer;

  p {
    font-weight: bold;
  }
`;

export const CartIcon = styled.img`
`;
