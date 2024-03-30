import React from "react";
import './Section5.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Section5(){
    return(
<div className="">
<Container className="Section5">
<Row >
    <Col sm={5}>
        <div className="horizontal-line1">
            <span className="line1"></span> {/* Horizontal Line Text */}
            <span className="Right-text1"> BEST SELLER</span>
        </div>
    </Col>
        <h1  className="Section5-content">Discover Our <br></br>Most Selling Products</h1>
        </Row><br></br> <br></br><br></br>
    <button className="Section5-button">VIEW ALL BEST SELLERS</button>
  
</Container>
</div>
);
}
export default Section5;