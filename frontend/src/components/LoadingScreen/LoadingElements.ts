import styled, { keyframes } from 'styled-components';

interface LoadingProps {
  loadingData: boolean;
}

const loader = keyframes`
  0% {
    transform: rotate(0deg);
  }
  
  25% {
    transform: rotate(180deg);
  }
  
  50% {
    transform: rotate(180deg);
  }
  
  75% {
    transform: rotate(360deg);
  }
  
  100% {
    transform: rotate(360deg);
  }
`;

const loaderinner = keyframes`
  0% {
    height: 0%;
  }
  
  25% {
    height: 0%;
  }
  
  50% {
    height: 100%;
  }
  
  75% {
    height: 100%;
  }
  
  100% {
    height: 0%;
  }
`;

export const LoadingContainer = styled.div<LoadingProps>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: 100%;
  text-align: center;
  background-color: #ff0;
  transition: all 0.3s ease-out;
`;

export const Loader = styled.span`
  display: inline-block;
  width: 50px;
  height: 50px;
  position: relative;
  border: 4px solid #000;
  top: 45%;
  animation: ${loader} 2s infinite ease;
`;

export const LoaderInner = styled.span`
  vertical-align: top;
  display: inline-block;
  width: 100%;
  background-color: #000;
  animation: ${loaderinner} 2s infinite ease-in;
`;