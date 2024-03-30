import React from "react";
import './Section1.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Facebook, Instagram, Twitter, Youtube } from "react-bootstrap-icons";

function Section1() {
    return (
<div className='Backgroundimg1'>
<Container>
  <Row >
  <div className="col-md-6 col-sm-12">
 <Col>
<div className='Content'><h1><h3 className='Kayu'>
<div className="horizontal-line">
<span className="line"></span>
<span className="Right-text"> KAYUU FURNITURE STORE</span>
</div></h3><h1 className="col2">Make Yourself At Home</h1></h1>

<div className="Paragraph">
<p>Vestibulum, diam vulputate amet cras in diam quis turpis curabitur 
tellus aliquet tellus iaculis tempus,sollicitudin massa duis eleifend egestas
turpis sit etiam ommodo viverra lacinia ipsum convallis sed augue purus scelerisque
non vestibulum elementum mi, pellentesque leo tincidunt integer.
</p>

</div >
<Button  className="Shop">SHOP NOW</Button></div></Col>
</div>
</Row>
<div className="Icons">SCROLL DOWN
      <Instagram className="Icon"></Instagram>
      <Youtube className="Icon"></Youtube>
      <Twitter className="Icon"></Twitter>
      <Facebook className="Icon"></Facebook>
</div>
</Container>

</div>

);
}
export default Section1;