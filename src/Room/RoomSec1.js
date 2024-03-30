import React from 'react';
import './RoomSec1.css';
import Container from 'react-bootstrap/Container';
import Room1 from '../pages/Room';
import {  DashLg} from 'react-bootstrap-icons';

 function RoomSec1() {
  return (
    <Container fluid>
          <h2 className="client">Rooms</h2>
          <h5 className="client1">Vestibulum, diam vulputate amet cras 
          in diam quis turpis curabitur tellus aliquet tellus iaculis<br></br> tempus,
          sollicitudin massa duis eleifend egestas turpis sit etiam.</h5>
          <div className='BImg'>
          <div className='LivingRoom'>
          <h1 className="Section2-content">Living Room</h1>
<p className="LivingRoom-content-parah">Massa cras egestas laoreet montes, 
dapibus eu sit etiam curabitur faucibus habitasse lectus vestibulum leo, 
odio dolor quis maecenas faucibus vulputate pharetra.</p>
<p><DashLg className='MinusIcon' /> Nulla placerat viverra</p>
<p><DashLg className='MinusIcon' /> Cursus viverra</p>
<p><DashLg className='MinusIcon' /> Vitae interdum eget</p>
<p><DashLg className='MinusIcon' /> Risus tempus elementum</p>
<p><DashLg className='MinusIcon' /> Aliquet dignissim</p>
<button className="LivingRoom-button">SHOP LIVING ROOM</button></div>
</div>
</Container>
   
          
  )
}
export default RoomSec1;
