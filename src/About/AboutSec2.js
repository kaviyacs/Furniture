import React from 'react';
import './AboutSec2.css';
import Container from 'react-bootstrap/Container';
import Pathmodel from './furniture-store-about-product-img.jpg';
import Pathmodels from './furniture-store-photo-of-founder.jpg';
import { Col,Row } from 'react-bootstrap';
function AboutSec2() {
  return (
    <Container fluid>
    <Row className='AboutSec2'>
             <Col sm={6}><img src={Pathmodel} alt="src" className="Furniture-Product"></img></Col>
             <Col sm={6}><img src={Pathmodels} alt="src" className="Founder-img"></img>
<p className="AboutSection2-content"><p>Eu egestas felis et viverra amet dictum ornare 
turpis gravida orci bibendum odio sit volutpat proin at enim ultrices dolor nullam 
tortor ornare cursus nibh sit adipiscing adipiscing enim erat nunc donec tellus, 
egestas commodo netus adipiscing ultrices at phasellus ut vitae nunc malesuada id 
nec suspen disse sit turpis mauris biben dum amet dignissim in 
sit duis pharetra vehicula eget suspen disse at vitae integer gravida sagittis.</p>
<h4 className='Author'>HARVEY D. GEORGE</h4>
<h6 className="AboutSection2-content-Founder" >Founder of KAYUU</h6></p>
</Col></Row>
</Container>   
  )
}
export default AboutSec2;
