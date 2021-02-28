import styled from "styled-components";

export const ProductsContainer = styled.div`
  /* width: 100vw; */
  min-height: 100vh;
  padding: 12rem calc((100vw - 1400px) / 2);

  @media screen and (max-width: 480px) {
    padding: 7rem calc((100vw - 1400px) / 2);
  }
`;

export const ProductsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`;

export const ProductCard = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background: #fff;
  margin-left: 2rem;
  margin-bottom: 2rem;
  line-height: 2;
  width: 250px;
  /* height: 285px; */
  border-radius: 8px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);

  @media screen and (max-width: 480px) {
    margin-left: 0;
  }
`;

export const ProductImg = styled.img`
  height: 150px;
  /* min-width: 150px; */
  max-width: 100%;
  margin-top: 1rem;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5rem 1rem;
`;

export const InfoTop = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

export const ProductTitle = styled.h2`
  width: 50%;
  margin: 0;
  font-weight: 400;
  font-size: 1rem;
  line-height: 19px;
  color: #2c2c2c;
`;

export const ProductDesc = styled.p`
  margin-bottom: 1rem;
  font-weight: 300;
  font-size: 10px;
  line-height: 12px;
  /* or 120% */

  color: #2c2c2c;
`;

export const ProductPrice = styled.div`
  width: 68px;
  height: 26px;
  background: #373737;
  border-radius: 5px;
  font-weight: bold;
  font-size: 0.8rem;
  text-align: center;
  color: #ffff00;
`;

export const ProductButton = styled.button`
  position: absolute;
  left: 0;
  bottom: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 30px;

  background: #ff0;
  border-radius: 0px 0px 8px 8px;
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  border: none;
  color: #000;
  transition: 0.2s ease-out;
  cursor: pointer;
`;

export const ButtonImage = styled.img`
  padding: 0 0.5rem;
`;
