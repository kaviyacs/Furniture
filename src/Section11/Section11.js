import Container from 'react-bootstrap/Container';
import './Section11.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Coin, CreditCard, Truck ,GeoFill} from 'react-bootstrap-icons';


function Section11() {
  return (
    <Container className='Section11'>
      <Row md={4}>
        <Col xs={12}><Coin className='Icons11'/>
        <div><h6 className='IconTitle'>Big Discounts</h6>
          <p>Integer euismod blandit nunc sit amet sollicitudin.
             Fusce quis orci viverra, cursus justo.</p>
        </div>
        </Col>
        <Col xs={12}><Truck className='Icons11'/>
        <div><h6 className='IconTitle'>Free Shipping</h6>
          <p>Integer euismod blandit nunc sit amet sollicitudin.
             Fusce quis orci viverra, cursus justo.</p>
        </div></Col>
        <Col xs={12}><CreditCard className='Icons11'/>
        <div><h6 className='IconTitle'>Secure Payments</h6>
          <p>Integer euismod blandit nunc sit amet sollicitudin.
             Fusce quis orci viverra, cursus justo.</p>
        </div></Col>
        <Col xs={12}><GeoFill className='Icons11'/>
        <div><h6 className='IconTitle'>Order Tracking</h6>
          <p>Integer euismod blandit nunc sit amet sollicitudin.
             Fusce quis orci viverra, cursus justo.</p>
        </div></Col>
      </Row>
    </Container>
  );
}

export default Section11;