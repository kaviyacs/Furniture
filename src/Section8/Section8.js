import React from "react";
import './Section8.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Section8(){
    return(
<div className="sec8">
<Container className="Section8">
<Row sm={8}>
   
        <div className="horizontal-line1">
            <span className="line1"></span> {/* Horizontal Line Text */}
            <span className="Right-text1"> TESTIMONIALS</span>
        </div>
  <div className="butt">
        <h1  className="Section8-content">What People Say</h1>
       
        <button className="Section8-button">VIEW ALL TESTIMONIAL</button> 
        </div>
    </Row>
</Container>
</div>
);
}
export default Section8;