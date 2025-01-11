
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import React, { useEffect, useState} from 'react';
import { useAppContext } from './AppContext';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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

    const updateTableWithStoreId = (storeIdSelected) => {
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



    const handleSubmit = (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);
      for (let [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
      }

      // build object
      var object = {};
      formData.forEach((value, key) => object[key] = value);
      var json = JSON.stringify(object);
      console.log("before decrease", json);

      //send post request
      axios.post(`http://localhost:8080/stocks/${object.stockId}/substract/${object.quantityToSell}`, object)
        .then(response => 
          {console.log("Success:", response.data)
            updateTableWithStoreId(object.storeId);
          }
          )
        .catch(error => console.error('Error:', error));
    };

    const handleIncreaseStock = (event) => {
      console.log("Entering increase")
      event.preventDefault();
      const formData = new FormData(event.target);
      for (let [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
      }

      // build object
      var object = {};
      formData.forEach((value, key) => object[key] = value);
      var json = JSON.stringify(object);
      console.log("before upd",json);

      //send post request
      axios.post(`http://localhost:8080/stocks/${object.stockId}/add/${object.quantityToAdd}`, object)
        .then(response => 
          {console.log("Success update:", response.data)
            updateTableWithStoreId(object.storeId);
          }
          )
        .catch(error => console.error('Error:', error));
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
      <Table striped bordered hover > 
      <thead>
        <tr>
          <th>#</th>        
          <th>Producto</th>
          <th>Cantidad</th>
          <th>Precio</th>
          <th className={'w-25'}>Cantidad a vender</th>
          <th className={'w-25'}>Cantidad a aumentar</th>
        </tr>
      </thead>
      <tbody>
        {stocks.map((item, i) => {
            return (
              <tr key={i}>
                  <td>{i+1}</td>
                  <td>{item?.product.name}</td>
                  <td>{item?.quantity}</td>
                  <td>{item?.product.price}</td>
                  <td>
                    <Form onSubmit={handleSubmit}>
                    <Row>
                      <Col>                                         
                        <input type="hidden" name="stockId" value={item.id} />
                        <input type="hidden" name="storeId" value={item.storeId} />
                        <Form.Group className="mb-3" >
                        <Form.Control type="text" name="quantityToSell" />
                        </Form.Group>
                      </Col>              
                      <Col>
                        <Button variant="primary" type="submit">Guardar</Button>                      
                      </Col>
                    </Row>
                    </Form>
                  </td>                  
                  <td>
                    <Form onSubmit={handleIncreaseStock}>
                    <Row>
                      <Col>                                         
                        <input type="hidden" name="stockId" value={item.id} />
                        <input type="hidden" name="storeId" value={item.storeId} />
                        <Form.Group className="mb-3" >
                        <Form.Control type="text" name="quantityToAdd" />
                        </Form.Group>
                      </Col>              
                      <Col>
                        <Button variant="primary" type="submit">Guardar</Button>                      
                      </Col>
                    </Row>
                    </Form>
                  </td>

              </tr>
            );
          })}
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>            
            <td></td>
            <td></td>            
          </tr>
      </tbody>
    </Table>
    </>
  )
}

export default SalesForm;
