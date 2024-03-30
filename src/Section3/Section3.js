import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Basket2, Eye } from 'react-bootstrap-icons';
import { addToCart } from '../action/cartAction';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Section3.css';

function Section3({breakpoints}) {
  const dispatch = useDispatch();
  const courses1 = useSelector(state => state.courses1);
  return (
    <Container>
      <Row className='popularc columns-4 d-flex justify-content-between'>
        {courses1?.map(course => (
          <Col key={course.id} md={breakpoints} sm={3}  data-wow-delay='0.1s' style={{ animationDelay: '0.1s', animationName: 'fadeInUp', visibility: 'visible' }}>
            <Card className='sec4-cards text-center'>
              <span className='Tooltip' tabIndex="0" data-toggle="tooltip" title="Quick View">
                <Eye className='Card-icons-eye' />
              </span> 
              <Link to="/CartFunction">
              <div className="popular-course overflow-hidden">
               <img target="_blank" src={course.image} alt={course.name}  className="course-img position-relative img-fluid w-100" />
              </div>    
              </Link>
              <span className="course-name">{course.name}</span><br />
              <span className="Cardname">{course.product}</span><br />
              <h3 className='course-price mt-0' style={{ fontWeight: "2", fontSize: "17px" }}>${course.price}</h3>
              <div className="course-details">
                <Link to='/Cart' className='add-to-cart-link' onClick={() => dispatch(addToCart(course))}>
                  <Basket2 className='Card-icons-basket' />
                </Link>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Section3;


 







// import Card from 'react-bootstrap/Card';
// import './Section3.css';
// import CardGroup from 'react-bootstrap/CardGroup';
// import BLRSofa from '../Section3/living-room-brown-sofa-300x300.png';
// import EgyptianVase from '../Section3/egyptian-brown-vase.png';
// import GLRSofa from '../Section3/living-room-green-sof.png';
// import FabricChair from '../Section3/furniture-green-fabric-chair.png'
// import { Basket2, Eye, Truck } from 'react-bootstrap-icons';
// import { useDispatch, useSelector } from 'react-redux';
// import { addToCart } from '../action/cartAction';
// import { Link } from 'react-router-dom';
// function Section3() {
//   const dispatch = useDispatch();
// const courses1 = useSelector(state => state.courses1);
//   return (
//     <div className='Cards'>
//     <CardGroup>
      
//       <Card>
//       <span className='Tooltip' tabindex="0" data-toggle="tooltip" title="Add to cart">
//       <Link to='/Cart'> <Basket2 className='Card-icons-basket' 
//          onClick={() => dispatch(addToCart(course))}/></Link> </span>
//       <span className='Tooltip' tabindex="0" data-toggle="tooltip" title="Quick View">
//       <Eye className='Card-icons-eye'/></span>
//         <Card.Img variant="top" src={BLRSofa} alt='sofa'/>
//         <Card.Body>
//           <Card.Title className='Title'>Living Room</Card.Title>
//           <Card.Text className='Cardname'>
//           Brown Living Room Sofa
//           </Card.Text>
//           <Card.Text className='Price'>
//           $1,200.00
//           </Card.Text>
//         </Card.Body>
//       </Card>
      
//       <Card>
//       <span className='Tooltip' tabindex="0" data-toggle="tooltip" title="Add to cart">
//       <Basket2 className='Card-icons-basket' /></span>
//       <span className='Tooltip' tabindex="0" data-toggle="tooltip" title="Quick View">
//       <Eye className='Card-icons-eye'/></span>
//         <Card.Img variant="top" src={EgyptianVase} alt='sofa'/>
//         <Card.Body>
//           <Card.Title className='Title'>Home Office</Card.Title>
//           <Card.Text className='Cardname'>
//           Egyptian Vase
//           </Card.Text>
//           <Card.Text className='Price'>
//           $400.00
//           </Card.Text>
//         </Card.Body>
//       </Card>     
//        <Card>
//        <span className='Tooltip' tabindex="0" data-toggle="tooltip" title="Add to cart">
//       <Basket2 className='Card-icons-basket' /></span>
//       <span className='Tooltip' tabindex="0" data-toggle="tooltip" title="Quick View">
//       <Eye className='Card-icons-eye'/></span>
//         {/* <p className='sale'>sale</p> */}
//         <Card.Img variant="top" src={GLRSofa} alt='sofa'/>
//         <Card.Body>
//           <Card.Title className='Title'>Living Room</Card.Title>
//           <Card.Text className='Cardname'>
//           Modern Emerald Fabric Chair
//           </Card.Text>
//           <Card.Text className='Price'>
//         $1,200.00
//           </Card.Text>
//         </Card.Body>
//       </Card>      
//       <Card>
//       <span className='Tooltip' tabindex="0" data-toggle="tooltip" title="Add to cart">
//       <Basket2 className='Card-icons-basket' /></span>
//       <span className='Tooltip' tabindex="0" data-toggle="tooltip" title="Quick View">
//       <Eye className='Card-icons-eye'/></span>
//         <Card.Img variant="top" src={FabricChair} alt='sofa'/>
//         <Card.Body>
//           <Card.Title className='Title'>Chair</Card.Title>
//           <Card.Text className='Cardname'>
//           Brown Living Room Sofa
//           </Card.Text>
//           <Card.Text className='Price'>
//           $860.00
//           </Card.Text>
//         </Card.Body>
//       </Card>
      
//     </CardGroup>
//     </div>
//   );
// }

// export default Section3;

