import React from "react";
import './Section13.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ArrowRepeat, ArrowRight, Instagram, Send, Twitter, Whatsapp, Youtube ,Bank} from "react-bootstrap-icons";
function Section13(){
    return(
<div className="Section13">
      <Row>
        <Col sm><h2><Bank  className="Bankicon"/> KAYUU</h2>
        <p>3538 Torrance Blvd, Torrance, CA 90503, USA</p>
        <p>+1 123 456 7890</p>
        <p>info@example.com</p>
        <p>Visit Our Store</p>
        </Col>
        <Col sm><h2>Useful Links</h2>
        <p>Home</p>
        <p>Products</p>
        <p>Rooms</p>
        <p>About Us</p>
        <p>Contact</p>
        {/* <a href="https://www.w3schools.com/html/" className="Underline">hi</a> */}
        </Col>
        <Col sm><h2>Rooms</h2>
        <p>Living Room</p>
        <p>Bed Room</p>
        <p>Kitchen</p>
        <p>Bath Room</p>
        <p>Home Office</p>
        </Col>
        <Col sm><h2>Stay In Touch</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className="Border">
        <Instagram className="ICONS"/>
        <Twitter className="ICONS"/>
        <Whatsapp className="ICONS" />
        <Youtube className="ICONS"/>
        </div></Col>
        </Row>
        <div className="horizontal-line1">
            <span className="line2"></span> {/* Horizontal Line Text */}
        </div>
         <p>Copyright © 2023 Online Furniture Store
        <p className="p-cont">Powered by Online Furniture Store</p></p>
</div>
      );
}
export default Section13;