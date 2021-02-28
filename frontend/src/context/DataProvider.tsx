import React, { createContext, useEffect, useState } from 'react';
import { store } from 'react-notifications-component';

// AXIOS
import api from '../services/api';

// INTERFACES
import { IProducts, ICart } from '../interfaces';

type DataContextType = {
  products: IProducts[];
  cart: ICart[];
  loadingData: boolean;
  addCart: (name: string) => void;
  removeProduct: (name: string) => void;
  increase: (name: string) => void;
  reduction: (name: string) => void;
};

export const DataContext = createContext<DataContextType>({} as DataContextType);

export const DataProvider: React.FC = ({ children }) => {
  const [products, setProducts] = useState<IProducts[]>([]);
  const [cart, setCart] = useState<ICart[]>([]);
  const [loadingData, setLoadingData] = useState(true);

  const increase = (name: string) => {
    cart.forEach((item: ICart) => {
      if (item.name === name) {
        item.count += 1;
      }
    });
    setCart([...cart]);
  };

  const reduction = (name: string) => {
    cart.forEach((item: ICart) => {
      if (item.name === name) {
        item.count === 1 ? (item.count = 1) : (item.count -= 1);
      }
    });
    setCart([...cart]);
  };

  const addCart = (name: string) => {
    const check = cart.every((item: ICart) => {
      return item.name !== name;
    });
    if (check) {
      const data = products.filter((product: IProducts) => {
        return product.name === name;
      });
      data[0].count = 1;
      setCart([...cart, ...data as ICart[]]);
    } else {
      increase(name);
    }
    store.addNotification({
      title: 'Produto adicionado!',
      message: name,
      type: 'default',
      insert: 'top',
      container: 'top-right',
      animationIn: ['animate__animated', 'animate__fadeIn'],
      animationOut: ['animate__animated', 'animate__fadeOut'],
      dismiss: {
        duration: 750,
        onScreen: true,
      },
    });
  };

  const removeProduct = (name: string) => {
    cart.forEach((item: ICart, index: number) => {
      if (item.name === name) {
        cart.splice(index, 1);
      }
    });
    setCart([...cart]);
  };

  useEffect(() => {
    async function fetchData() {
      const response = await api.get('/stock');
      const { products } = response.data;

      setProducts(products);
      // Simulando um delay maior para requisição da API
      setTimeout(() => setLoadingData(false), 750);
    }
    fetchData();
  }, []);

  useEffect(() => {
    const dataCart = localStorage.getItem('dataCart');
    if (dataCart) setCart(JSON.parse(dataCart));
  }, []);

  useEffect(() => {
    localStorage.setItem('dataCart', JSON.stringify(cart));
  }, [cart]);

  const value = {
    products,
    cart,
    loadingData,
    addCart,
    removeProduct,
    increase,
    reduction,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
