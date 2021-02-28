import React, { useContext } from "react";

// STYLED COMPONENTS
import {
  ProductsContainer,
  ProductsWrapper,
  ProductCard,
  ProductImg,
  ProductInfo,
  InfoTop,
  ProductTitle,
  ProductDesc,
  ProductPrice,
  ProductButton,
  ButtonImage
} from "./ProductsElements";

// CONTEXT
import { DataContext } from '../../context/DataProvider';

// INTERFACES
import { IProducts } from '../../interfaces';

// ASSETS
import ShoppingBag from '../../assets/shopping-bag.svg';

const Products = () => {
  const contextValue = useContext(DataContext);
  const products = contextValue.products;
  const addCart = contextValue.addCart;
  
  return (
    <ProductsContainer>
      <ProductsWrapper>
        {products.map((product: IProducts) => (
          <ProductCard key={product.name}>
            <ProductImg src={product.image}></ProductImg>
            <ProductInfo>
              <InfoTop>
                <ProductTitle>{product.name}</ProductTitle>
                <ProductPrice>R${product.price}</ProductPrice>
              </InfoTop>
              <ProductDesc>{product.short_description}</ProductDesc>
              <ProductButton onClick={() => addCart(product.name)}>
                <ButtonImage src={ShoppingBag} />
                Comprar
              </ProductButton>
            </ProductInfo>
          </ProductCard>
        ))}
      </ProductsWrapper>
    </ProductsContainer>
  );
};

export default Products;
