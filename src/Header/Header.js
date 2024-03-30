import React from 'react';
import './Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import {  Basket } from 'react-bootstrap-icons';
import { Bank } from 'react-bootstrap-icons'; 

function Header() {
  return (
  <div className='Headersection'>
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
        <Navbar.Brand href="#home">  
        <Bank className='Bank'/>KAYUU</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/" className='Home'>Home</Link>
            <Link to="/Product" className='Home'>Product</Link>
            <Link to="/Room" className='Home'>Room</Link>
            <Link to="/Aboutus" className='Home'>About Us</Link>
            <Link to="/Contactus" className='Home'>Contact Us</Link>
        <Link to="/Cart">    <Basket  className='Basket'/></Link>
          </Nav>    
        </Navbar.Collapse>     
      </Container>
    </Navbar>
   </div>
  );
}
export default Header;