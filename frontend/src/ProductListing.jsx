
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import React, { useEffect, useState} from 'react';
import { useProducts } from './ProductContext';

function ProductListing() {
    //const [data, setData] = useState([])
    const { products, fetchProducts } = useProducts();
    
    // todo: read HIW
    useEffect(() => {
      // const fetchData = async () => {
      //   try {
      //     const { data: response } = await axios.get('http://localhost:8080/products');
      //     setData(response);// this seems to set the data
      //   } catch (error) {
      //     console.error(error)
      //   }
      // };
  
      // fetchData();
      fetchProducts();
    }, []);
    
    
  return (
    <>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre del Producto</th>
          <th>Precio</th>
        </tr>
      </thead>
      <tbody>
          <tr>
            <td>0</td>
            <td>Example item</td>
            <td>0.0</td>
          </tr>
        {products.map((item, i) => {
            return (
              <tr key={i}>
                <td>{i+1}</td>
                <td>{item?.name}</td>
                <td>{item?.price}</td>
              </tr>
            );
          })}
      </tbody>
    </Table>
    </>
  )
}

export default ProductListing;
