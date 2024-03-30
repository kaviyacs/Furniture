import React from "react";
import './Section12.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Pathmodel from '../Section12/images.jpeg';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
function Section12(){
    return(
<div className="">
<Container className="Section12">
<Row >
        <Col sm={6}><img src={Pathmodel} alt="src" className="Section12-img"></img></Col>
        <Col sm={5}>
        <div className="horizontal-line1">
<span className="line1"></span> {/* Horizontal Line Text */}
<span className="Right-text1">SUBSCRIBE TO OUR NEWSLETTER</span>
</div>
        <h1 className="Section2-content">See The Latest Collection & Get Special Offer</h1>
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Button variant="primary" type="submit" className="Submit">
      SUBSCRIBE
      </Button>
        <Form.Control type="email" placeholder="Email address" className="Email"/>
        
        <Form.Text className="text">Cras interdum lectus velit nibh senectus fringilla ut.
        </Form.Text>
      </Form.Group>
  

      </Form>

</Col>

   </Row>
   </Container>
</div>
    );
}
export default Section12;