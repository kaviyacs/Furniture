import React from "react";
import './AboutSec4.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function AboutSec4(){
return(
<Container className="Section2">
<Row className="Row1">
        Faucibus etiam lacus sollicitudin sed amet, sit vitae lorem ornare egestas nisi,
        diam cursus non mattis etiam sodales vestibulum arcu a, aliquam at leo condimentum etiam dui
        eget arcu nunc, vivamus vel facilisi auctor aliquet eu mollis accumsan fermentum ipsum ornare
        viverra proin eleifend ultricies est, aliquet felis vivamus praesent.</Row>
<Row>
        <Col  sm={6}>
            <p className="Row2">Sit ipsum elit nisl commodo cursus diam massa 
            nunc,commodo amet, viverra lobortis aliquam leo vitae in dictum sagittis, dui est
            pellentesque non est nunc aliquet magna malesuada diam nunc quis duis id nunc id 
            ultrices cursus lorem consequat tincidunt pharetra, risus quam facilisis lectus 
            ipsum ut mattis pretium eros tincidunt neque</p>   
        </Col>
        <Col sm={6}>   
            <p className="Row2">Aliquet magna malesuada diam nunc quis duis id nunc 
            id ultrices cursus lorem consequat tincidunt pharetra, risus quam facilisis lectus ipsum 
            ut mattis pretium eros tincidunt neque, faucibus volutpat accumsan pretium arcu in donec et, 
            rhoncus in sed eleifend odio gravida vitae quam donec faucibus molestie bibendum.</p>
        </Col>
</Row>
 </Container>

);
}
export default AboutSec4;