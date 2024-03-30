import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/esm/CardGroup';
import CardText from 'react-bootstrap/esm/CardText';
import CardTitle from 'react-bootstrap/esm/CardTitle';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import './Description.css';
import { TiTick } from "react-icons/ti";


function TextExample() {
  return (
    <>
    <Row className="description-row">
        <CardGroup>
            <Col className='description-column'>
            <Card className='card-description'>
                <CardText >
                </CardText>
            </Card>
            </Col>
            <Col className='description-col'>
            <Card className='card-descriptions'>
                <CardTitle className='description-title'>Features</CardTitle>
                <Card.Text className='card-content'>
                Ut at ante diam. Vestibulum tincidunt lacus quis odio iaculis, nec iaculis ipsum hendrerit. Curabitur nec fringilla sem. Nullam at diam et ligula tincidunt luctus. Ut fringilla vitae orci eget suscipit. Etiam ultricies justo ac feugiat dignissim.
                </Card.Text>
                <Card.Text className='features-details' >
                                   
                    <div  className='card-icons'>                    
                    <span ><TiTick /></span>
                    <span className='description-list'>Etiam eu tortor tempor, malesuada</span>
                    </div>              
                     <div className="feature-list">
                    <span><TiTick /></span>
                    <span className='description-list'>Nunc vitae erat sit amet neque varius consequat</span>
                    </div>
                   <div className='card-list'>
                    <span><TiTick /></span>
                    <span className='description-list'>Lorem ipsum dolor sit amet</span>
                </div>
                </Card.Text>
            </Card>
            </Col>
        </CardGroup>
    </Row>
    <Row className="description-row">
        <CardGroup>
            <Col className='description-col'>
            <Card className='card-descriptions'>
                <CardTitle className='description-title'>
                    Care Instructions
                </CardTitle>
                <Card.Text className='card-content'>
                Ut at ante diam. Vestibulum tincidunt lacus quis odio iaculis, nec iaculis ipsum hendrerit.
                </Card.Text>
                <Card.Text className='features-detail'>
                    <div className='tab-icons'>
                    <span><TiTick /></span>
                    <span className='description-list'>Etiam eu tortor tempor, malesuada</span>
                    </div>
                    <div className='feature-lists'>
                        <span><TiTick /></span>
                        <span className='description-list'>Nunc vitae erat sit amet neque varius consequat</span>
                        </div>
                        <div className='instruction-list'>
                            <span><TiTick /></span>
                            <span className='description-list'>Vivamus lobortis posuere ante</span>
                        </div>
                            <div className='card-instruction-list'>
                                <span><TiTick /></span>
                                <span className='description-list'>Morbi nisi diam, cursus non ultricies</span>
                                </div>
                                <div className='card-instruction-point'>
                                    <span><TiTick /></span>
                                    <span className='description-list'>Lorem ipsum dolor sit amet</span>
                            </div>
                        </Card.Text>
            </Card>
            </Col>
            <Col className='description-column'>
            <Card className='card-description'>

            </Card>
            </Col>
        </CardGroup>
    </Row>
    </>
  );
}

export default TextExample;