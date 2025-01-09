
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useAppContext } from './AppContext';


function ProductForm() {
    const { addProduct } = useAppContext();

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

        addProduct(object);
        //send post request
        //axios.post('http://localhost:8080/products', object)
        //   .then(response => console.log("Success:", response.data))
        //   .catch(error => console.error('Error:', error));
      };
  return (
    <>
    <Form onSubmit={handleSubmit}>
        <Form.Label><b>Agregar Productos</b></Form.Label>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Nombre del Producto</Form.Label>
            <Form.Control type="text" name="name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
            <Form.Label>Precio</Form.Label>
            <Form.Control type="text" name="price"/>
        </Form.Group>
        <Button variant="primary" type="submit">Submit</Button>
    </Form>
    </>
  )
}

export default ProductForm;
