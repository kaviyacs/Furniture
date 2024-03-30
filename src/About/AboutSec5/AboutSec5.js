import React from "react";
import './AboutSec5.css';
import { Coin, CreditCard, Truck ,GeoFill} from 'react-bootstrap-icons';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Pathmodel from './furniture-store-about-store-img.jpg';
function AboutSec5(){
    return(

<Container className="AboutSection5">
<Row >
    <Col sm={5}>

            <h1 className="Section2-content">The Best Quality Furniture Store in Town</h1>
            <p className="Section2-content-parah">Sagittis enim, auctor ultrices dui etiam viverra 
            nulla scelerisque in semper porttitor pharetra, tortor amet lorem cursus velit posuere
             tristique tempus,tincidunt non velit quis congue lectus a ullamcorper iaculis.</p>
             <Row md={12}>
        <div><Coin className='IconsAbout'/>
            <h6 className='AboutIconTitle'>Huge Selection</h6>
            <p className="Icon-Phara">Sagittis enim, auctor ultrices dui etiam viverra nulla.</p>
        </div>
       
        <div><Truck className='IconsAbout'/>
        <h6 className='AboutIconTitle'>Low Price Everyday</h6>
          <p className="Icon-Phara">Tincidunt sed eget nunc tellus viverra sapien massa cursus.</p>
        </div>
        <div> <CreditCard className='IconsAbout'/>
        <h6 className='AboutIconTitle'>Same Day Delivery</h6>
          <p className="Icon-Phara">Pretium, tempus ultricies lacus eleifend scelerisque sem.</p>
          </div>
          </Row>
    </Col>
    <Col sm={6}><img src={Pathmodel} alt="src" className="AboutSection2-img"></img>
    </Col>
</Row>
</Container>

    );
}
export default AboutSec5;