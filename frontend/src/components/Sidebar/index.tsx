import React, { useContext, useEffect, useState } from "react";

// STYLED COMPONENTS
import {
  SidebarContainer,
  SidebarTop,
  SidebarH2,
  CloseButton,
  ProductsWrapper,
  SidebarProduct,
  MobileWrap,
  ProductQuantity,
  ButtonsQuantity,
  ButtonDI,
  DeleteProductBtn,
  SidebarTotal,
  SideBtnWrap,
  SidebarRoute,
} from "./SidebarElements";

// CONTEXT
import { DataContext } from '../../context/DataProvider';

// INTERFACES
import { ICart } from '../../interfaces';

interface PropsSidebar {
  toggle: () => void;
  isOpen: boolean;
}

const Sidebar: React.FC<PropsSidebar> = ({ toggle, isOpen }) => {
  const contextValue = useContext(DataContext);
  const cart = contextValue.cart;
  const removeProduct = contextValue.removeProduct;
  const increase = contextValue.increase;
  const reduction = contextValue.reduction;
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const getTotal = () => {
      const res = cart.reduce((prev: any, item: ICart) => {
        return prev + item.price * item.count;
      }, 0);
      setTotal(res);
    };
    getTotal();
  }, [cart]);

  const formataReal = (valor: number) => {
    return (
      'R$' +
      valor
        .toFixed(2)
        .replace('.', ',')
        .replace(/(\d)(?=(\d{3})+,)/g, '$1.')
    );
  };

  return (
    <SidebarContainer isOpen={isOpen}>
      <SidebarTop>
        <SidebarH2>
          Carrinho <br /> de compras
        </SidebarH2>
        <CloseButton onClick={toggle}>X</CloseButton>
      </SidebarTop>
      <ProductsWrapper>
        {cart.length ? (
          cart.map((product: ICart) => (
            <SidebarProduct>
              <img src={product.image} alt={product.short_description} />
              <p>{product.name}</p>
              <MobileWrap>
                <ProductQuantity>
                  <span>Qtd:</span>
                  <ButtonsQuantity>
                    <ButtonDI onClick={() => reduction(product.name)}>
                      -
                    </ButtonDI>
                    {product.count}
                    <ButtonDI onClick={() => increase(product.name)}>
                      +
                    </ButtonDI>
                  </ButtonsQuantity>
                </ProductQuantity>
                <h3>{formataReal(product.price * product.count)}</h3>
              </MobileWrap>
              <DeleteProductBtn onClick={() => removeProduct(product.name)}>
                X
              </DeleteProductBtn>
            </SidebarProduct>
          ))
        ) : (
          <p style={{ textAlign: 'center', fontSize: '1rem', fontWeight: 400 }}>
            O carrinho está vazio.
          </p>
        )}
      </ProductsWrapper>
      <SidebarTotal>
        <span>Total: </span>
        <span>{formataReal(total)}</span>
      </SidebarTotal>
      <SideBtnWrap>
        <SidebarRoute to="/">Finalizar Compra</SidebarRoute>
      </SideBtnWrap>
    </SidebarContainer>
  );
};

export default Sidebar;
