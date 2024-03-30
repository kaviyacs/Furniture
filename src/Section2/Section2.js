import React from "react";
import './Section2.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Pathmodels from './Section2.jpg'
function Section2(){
    return(
<div className="">
<Container className="Section2">
<Row >
    <Col sm={6}><img src={Pathmodels} alt="src" className="Section2"></img>
    </Col>
    <Col sm={5}>
            <div className="horizontal-line1">
            <span className="line1"></span> {/* Horizontal Line Text */}
            <span className="Right-text1"> NEW COLLECTION</span>
            </div>
            <h1 className="Section2-content">A Perfect Set For Your Living Room</h1>
            <p className="Section2-content-parah">Massa cras egestas laoreet montes, dapibus eu sit etiam curabitur faucibus habitasse 
            lectus vestibulum leo, odio dolor quis maecenas faucibus vulputate pharetra nunc sed 
            maecenas diam quisque habitasse.</p>
            <button className="Section2-button">SHOP THIS COLLECTION</button>
    </Col>
</Row>
</Container>
</div>
    );
}
export default Section2;