
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import React, { useEffect, useState} from 'react';
import { useAppContext } from './AppContext';

function StockForm() {
    //const [data, setData] = useState([])
    const { stores, fetchStores } = useAppContext();
    const { products, fetchProducts } = useAppContext();
    const { addStock } = useAppContext();
    
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
      fetchProducts();
    }, []);
    
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
      console.log(json);
      console.log("enviando", object);
      addStock(object);
      //send post request
      //axios.post('http://localhost:8080/products', object)
      //   .then(response => console.log("Success:", response.data))
      //   .catch(error => console.error('Error:', error));
    };

  return (
    <>
    <Form onSubmit={handleSubmit}>
      <Form.Label><b>Asignar Productos a Local</b></Form.Label>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Local</Form.Label>
        <Form.Select aria-label="Default select example" name="storeId">
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
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Producto</Form.Label>
        <Form.Select aria-label="Default select example" name="productId">
        <option>Seleccione una opción</option>
        {products.map((item, i) => {
            return (
              <option key={i} value={item.id}>
                {item?.name}
              </option>
            );
          })}

        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
          <Form.Label>Cantidad</Form.Label>
          <Form.Control type="text" name="quantity"/>
      </Form.Group>
      <Button variant="primary" type="submit">Submit</Button>
    </Form>
    </>
  )
}

export default StockForm;
