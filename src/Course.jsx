import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from './action/cartAction';
function Course(){
  const dispatch = useDispatch();
  const courses1 = useSelector(state => state.courses1);
  return(
                          
  <div className='section-4 w-100'>

    <Link to='/Cart'>Cart</Link>
  <Container className='sec4-con w-100'>
<div className='sec4-title wow fadeInUp text-center' data-wow-delay="0.1s" style={{animationDelay:'0.1s', animationName:'fadeInUp', visibility:'visible'}}>
      <div className='d-inline position-relative'><div className='course-line3 position-absolute'></div><div className='course-line4 position-absolute'></div><h6 className='sec4-h6 mb-0'>COURSES</h6><div className='course-line1 position-absolute'></div><div className='course-line2 position-absolute'></div></div>
      <h1 className='sec4-h1 mt-1'>Popular Courses</h1>  </div>
      <ul className="course-list mx-0 px-0">

        {courses1.map(course => (
          <li key={course.id} className="course-card">
  <Row g={4} className='popularc'>
<Col lg={4} md={6} className='cards-col wow fadeInUp mx-2 ' data-wow-delay="0.1s" style={{animationDelay:'0.1s', animationName:'fadeInUp', visibility:'visible', width:'100%'}}>
    <Card className='sec4-cards text-center'>
    <div className="popular-course overflow-hidden">
    <img src={course.image} alt={course.name} className="course-img position-reletive img-fluid w-100" /></div>
      <div className='btn-sec w-100 position-absolute justify-content-center mb-4'>
     
   </div>
        <h3 className='course-price mt-2' style={{fontWeight:"bold"}}>₹{course.price}</h3>
          <div className='star mb-3'><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
            <span className='rate'> (4.5)</span></div>
            <div className="course-details ">
                <span className="course-name ">{course.name}</span><br />
                <button className='addtocart-btn mt-3 mb-3'style={{width:"70%"}} 
                onClick={() => dispatch(addToCart(course))}>Add to Cart</button> </div>
   
     </Card>
  </Col>
  </Row>

      </li>
        ))}
      </ul>
</Container>
</div>
  
                                                
  
    )
}

export default Course;