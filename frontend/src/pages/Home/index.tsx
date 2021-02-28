import React, { useState } from 'react';

// STYLED COMPONENTS
import { HomeContainer } from './HomeElements';

// COMPONENTS
import Navbar from "../../components/Navbar";
import Sidebar from '../../components/Sidebar';
import Products from '../../components/Products';
import Footer from '../../components/Footer';
import LoadingScreen from '../../components/LoadingScreen';

const Home: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HomeContainer>
      <LoadingScreen />
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Products />
      <Footer />
    </HomeContainer>
  );
};

export default Home;
