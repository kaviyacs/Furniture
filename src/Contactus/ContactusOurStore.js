import React from 'react'
import { Container } from 'react-bootstrap'
import { GeoAltFill,Coin } from 'react-bootstrap-icons'
import './OurStore.css'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function ContactusOurStore() {
  return (
    <Container className="AboutSection5">
    <Row >
        <Col sm={5}>
    <h4 className='OurStore'>OUR STORE</h4>
                <h4 className="Section-content">3538 Torrance Blvd, Torrance, CA 90503, USA</h4>
                <p className="Section-content-parah">Posuere sagittis ultricies enim 
                massa nisi neque augue in condimentum lorem ipsum dolor sit amet,
                 consectetur adipiscing elit. Ut elit tellus,
                 luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                 <Row md={12}>
                    <div><GeoAltFill className='IconsAbout'/>
                        <h6 className='AboutIconTitle'>Huge Selection</h6>
                        <p className="Icon-Phara">Sagittis enim, auctor ultrices dui etiam viverra nulla.</p>
                    </div>
                 </Row>
        </Col>
    </Row>
        </Container>
  )
}

export default ContactusOurStore