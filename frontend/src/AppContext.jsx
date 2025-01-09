// ProductContext.jsx
import React, { createContext, useState, useContext } from 'react';
import axios from 'axios';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [stores, setStores] = useState([]);
  
  const addProduct = (newProduct) => {
    // Add new item logic here
    //send post request
    axios.post('http://localhost:8080/products', newProduct)
    .then(response => {
        console.log("Success:", response.data)
        setProducts([...products, newProduct]);

    })
    .catch(error => console.error('Error:', error));

  };

  const fetchProducts = () => {
    const fetchData = async () => {
        try {
          const { data: response } = await axios.get('http://localhost:8080/products');
          setProducts(response);// this seems to set the data
        } catch (error) {
          console.error(error)
        }
      };
  
      fetchData();
    // Fetch items logic here
    // This will update the state
  };
  const fetchStores = () => {
    const fetchData = async () => {
        try {
          const { data: response } = await axios.get('http://localhost:8080/stores');
          setStores(response);// this seems to set the data
        } catch (error) {
          console.error(error)
        }
      };
  
      fetchData();
    // Fetch items logic here
    // This will update the state
  };

  return (
    <AppContext.Provider value={{ products, addProduct, fetchProducts, stores, fetchStores }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);