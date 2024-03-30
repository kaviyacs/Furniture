import Container from 'react-bootstrap/Container';
import './Section7.css';
import Pathmodel from './ct-storage.jpg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Section7() {
  return (
    <Container className='Section7'>
      <Row>
        <Col sm={4}><div className='Section7-content'><h1 className="Section7-c">Sales up to 50% OFF</h1>
<p className="Section7-content-parah">Molestie amet tempor, diam id magna ridiculus tincidunt 
cursus curabitur non ipsum
 mattis in vel venenatis nam enim facilisis mi, egestas metus, nunc at..</p>
<button className="Section7-button">SHOP NOW</button></div></Col>
        <Col sm={8}><img src={Pathmodel} alt="src" className="Section7-img"></img></Col>
      </Row>
 
    </Container>
  );
}

export default Section7;