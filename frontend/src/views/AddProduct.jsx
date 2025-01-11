
import ProductForm from '../productForm'
import ProductListing from '../ProductListing'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function AddProduct() {
   
  return (
    <>
        <Container>
        <Row>
          <Col>
          <ProductListing></ProductListing>
          </Col>
          <Col>          
          <ProductForm></ProductForm>
          </Col>
        </Row>
        </Container>
    </>
  )
}

export default AddProduct;
