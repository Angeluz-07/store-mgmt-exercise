
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import React, { useEffect, useState} from 'react';
import { useAppContext } from './AppContext';

function SalesForm() {
    const [ stocks, setStocks] = useState([])
    const { stores, fetchStores} = useAppContext();
    
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
      fetchStores();
    }, []);
    
    const updateTable = (event) => {
      var storeIdSelected = event.target.value;
      console.log(storeIdSelected);
      const fetchData = async () => {
        try {
          const { data: response } = await axios.get(`http://localhost:8080/stocks?storeId=${storeIdSelected}`);
          setStocks(response);// this seems to set the data
        } catch (error) {
          console.error(error)
        }
      };
  
      fetchData();
      
    }; 
    
  return (
    <>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Locales</Form.Label>
        <Form.Select aria-label="Default select example" name="" onChange={updateTable}>
        <option>Seleccione una opción</option>
        {stores.map((item, i) => {
            return (
              <option key={i} value={item.id}>
                {item?.name}
              </option>
            );
          })}

        </Form.Select>
      </Form.Group>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>        
          <th>Producto</th>
          <th>Cantidad</th>
          <th>Precio</th>
          <th>Cantidad a vender</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
          <tr>
            <td>0</td>
            <td>Example item</td>
            <td>..</td>
            <td>..</td>            
            <td>..</td>
            <td>..</td>
          </tr>
        {stocks.map((item, i) => {
            return (
              <tr key={i}>
                <td>{i+1}</td>
                <td>{item?.product.name}</td>
                <td>{item?.quantity}</td>
                <td>{item?.product.price}</td>
                <td></td>
                <td></td>
              </tr>
            );
          })}
      </tbody>
    </Table>
    </>
  )
}

export default SalesForm;
