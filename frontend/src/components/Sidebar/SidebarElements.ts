import styled from "styled-components";
import { Link } from "react-router-dom";

interface SidebarContainerProps {
  isOpen: boolean;
}

export const SidebarContainer = styled.aside<SidebarContainerProps>`
  position: fixed;
  z-index: 999;
  width: 486px;
  height: 100%;
  background: #ff0;
  display: grid;
  align-items: center;
  top: 0;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  transition: 0.4s ease-in-out;
  right: ${({ isOpen }) => (isOpen ? '0' : '-1000px')};
  box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);

  @media screen and (max-width: 480px) {
    width: 330px;
  }

  @media screen and (max-width: 330px) {
    width: 100%;
  }
`;

export const SidebarTop = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: absolute;
  top: 36px;
  padding: 0 2rem;
  font-size: 2rem;
  outline: none;

  @media screen and (max-width: 480px) {
    padding: 0 1.5rem;
  }

  @media screen and (max-width: 330px) {
    padding: 0 1rem;
  }
`;

export const SidebarH2 = styled.h2`
  font-weight: bold;
  font-size: clamp(1.8rem, 2vw, 2.8rem);
  line-height: 33px;
`;

export const CloseButton = styled.button`
  background-color: #000;
  border: none;
  outline: none;
  border-radius: 50%;
  width: 38px;
  height: 38px;
  font-size: 28px;
  color: #ff0;
  cursor: pointer;
`;

export const ProductsWrapper = styled.div`
  display: flex;
  flex-direction: column;

  overflow-y: auto;
  height: 55%;

  padding-left: 2rem;
  padding-right: 5rem;

  text-align: center;
`;

export const SidebarProduct = styled.div`
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  min-width: 379px;
  min-height: 95px;
  background-color: #fff;
  box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);
  border-radius: 8px;

  margin-top: 5px;
  margin-bottom: 1rem;
  padding-left: 12px;

  img {
    width: 60px;
  }

  p {
    font-weight: 400;
    color: #2c2c2c;
    font-size: clamp(0.8rem, 1vw, 2rem);
    width: 40%;
  }

  h3 {
    width: 20%;
    font-size: clamp(0.8rem, 1vw, 2rem);
  }

  @media screen and (max-width: 480px) {
    min-width: 250px;
    min-height: 200px;
    flex-direction: column;
    padding: 1.2rem 0;

    img {
      min-width: 50px;
    }

    p {
      width: 100%;
    }

    h3 {
      background-color: #373737;
      color: #ff0;
      min-width: 35%;
      font-size: clamp(0.8rem, 1vw, 2rem);
      border-radius: 5px;
      padding: 0.5rem;
    }
  }
`;

export const MobileWrap = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`;

export const ProductQuantity = styled.div`
  display: flex;
  flex-direction: column;
  font-size: clamp(0.8rem, 1vw, 2rem);
  font-weight: 400;
  color: #2c2c2c;
  width: 20%;

  span {
    font-size: 10px;
    text-align: left;
    margin-bottom: 0.2rem;
  }

  @media screen and (max-width: 480px) {
    span {
      display: none;
    }
  }
`;

export const ButtonsQuantity = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 140%;
  border: 0.3px solid #bfbfbf;
  border-radius: 4px;
`;

export const ButtonDI = styled.button`
  width: 100%;
  font-size: 1.2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: 0.1s ease-in;

  &:hover {
    background: #eaeaea;
  }
`;

export const DeleteProductBtn = styled.button`
  position: absolute;
  top: -5px;
  right: -5px;
  background-color: #000;
  border: none;
  outline: none;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  font-size: 14px;
  color: #ff0;
  cursor: pointer;

  @media screen and (max-width: 480px) {
    top: 9px;
    right: 14px;
    background-color: transparent;
    color: #000;
    font-size: 21px;
  }
`;

export const SidebarTotal = styled.h2`
  display: flex;
  justify-content: space-between;

  width: 100%;
  padding-left: 2rem;
  padding-right: 4.5rem;
  position: absolute;
  bottom: 6.5rem;

  @media screen and (max-width: 480px) {
    bottom: 6rem;
  }
  @media screen and (min-height: 1024px) {
    bottom: 8rem;
  }
  @media screen and (min-height: 1366px) {
    bottom: 10rem;
  }
`;

export const SideBtnWrap = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000;
  text-align: center;
`;

export const SidebarRoute = styled(Link)`
  width: 100%;

  white-space: nowrap;
  color: #ff0;
  font-size: 28px;
  font-weight: 700;
  outline: none;
  border: none;

  cursor: pointer;
  transition: 0.2s ease-in-out;
  text-decoration: none;
`;
