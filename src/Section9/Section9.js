import Container from 'react-bootstrap/Container';
import './Section9.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Pathmodel from './woman-with-black-jacket-avatar.jpg';
import Pathmodels from './man-wearing-glasses-avatar.jpg';
import { Quote } from 'react-bootstrap-icons';
function Section9() {
  return (
    <Container>
      <Row md={4}>
        <Col xs={6} ><img src={Pathmodel} alt="src" className="Section9"></img></Col>
        <Col xs={6} className='content'><Quote className='icon' /><br></br>Enim,interdum vulputate netus quis sapien malesuada neque, 
            nec enim at urna gravida accumsan nunc, mi eu id ullamcorper amet 
            commodo pulvinar tortor, augue donec placerat.
            <h3 >Anna Cynthia</h3></Col>

            <Col xs={6} ><img src={Pathmodels} alt="src" className="Section9"></img></Col>
        <Col xs={6} className='content'><Quote className='icon' /><br></br>Porttitor diam porta eu,
         id et vestibulum quam vestibulum facilisis nulla ornare eu pretium dictum quam pharetra,
         nisl maecenas pretium sed eget interdum auctor et, aliquam sem lectus.
            <h3 >Jim Taylor</h3></Col>
      </Row>
    </Container>
  );
}

export default Section9;