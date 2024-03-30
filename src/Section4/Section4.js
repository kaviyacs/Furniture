import Container from 'react-bootstrap/Container';
import './Section4.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Pathmodel from '../Section4/LivingRoom.jpg';
import Pathmodel1 from './BedRoom.jpg';
import Pathmodel2 from './Kitchen.jpg';
import Pathmodel3 from '../Section4/BedRoom.jpg';
import { ArrowRight } from 'react-bootstrap-icons';
function Section4() {
  return (
    <Container fluid className='Section4rooms'>
      <Row md={4}>
    
        <Col md={3} xs={12} className='image'><img src={Pathmodel} alt="src" className="Section4"></img>
       <div className='h1'><ArrowRight /> Living Room</div> </Col>
        <Col md={3} xs={12} className='image'><img src={Pathmodel1} alt="src" className="Section4"></img>
        <h1 className='h1'><ArrowRight /> BedRoom</h1></Col>
        <Col md={3} xs={12} className='image'><img src={Pathmodel2} alt="src" className="Section4"></img>
        <h1 className='h1'><ArrowRight /> Kitchen</h1></Col>
        <Col md={3} xs={12} className='image lastImg'><img src={Pathmodel3} alt="src" className="Section4"></img>
        <h1 className='h1'><ArrowRight /> Bath Room</h1></Col>
      </Row>
    </Container>
  );
}

export default Section4;