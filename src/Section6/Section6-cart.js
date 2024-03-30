import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Basket2, Eye } from 'react-bootstrap-icons';
import { addToCart } from '../action/cartAction';
import { Reducer } from '../reducer/cartReducer2';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Section6.css';

function Section6({breakpoints}) {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);
  return (
    <Container>
      <Row className='popularc columns-4 d-flex justify-content-between'>
        {products?.map(product => (
          <Col key={product.id} md={breakpoints} sm={3}  data-wow-delay='0.1s' style={{ animationDelay: '0.1s', animationName: 'fadeInUp', visibility: 'visible' }}>
            <Card className='sec4-cards text-center'>
              <span className='Tooltip' tabIndex="0" data-toggle="tooltip" title="Quick View">
                <Eye className='Card-icons-eye' />
              </span>
              <div className="popular-product overflow-hidden">
                <img src={product.image} alt={product.name} className="product-img position-relative img-fluid w-100" />
              </div>
              <span className="product-name">{product.name}</span><br />
              <span className="Cardname">{product.product}</span><br />
              <h3 className='product-price mt-0' style={{ fontWeight: "2", fontSize: "17px" }}>${product.price}</h3>
              <div className="product-details">
                <Link to='/Cart' className='add-to-cart-link' onClick={() => dispatch(addToCart(product))}>
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

export default Section6;


 