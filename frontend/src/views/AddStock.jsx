
import StockForm from '../StockForm'
import StockListing from '../StockListing'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function AssignProduct() {
   
  return (
    <>
        <Container>
        <Row>
          <Col>
            <StockListing></StockListing>
          </Col>
          <Col>          
            <StockForm></StockForm>
          </Col>
        </Row>
        </Container>
    </>
  )
}

export default AssignProduct;
