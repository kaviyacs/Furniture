import React from 'react'
import Header from '../Header/Header'
import RoomSec1 from '../Room/RoomSec1';
import Section3 from '../Section3/Section3';
import RoomSec2 from '../Room/RoomSec2';
import Section6 from '../Section6/Section6-cart';
import RoomSec3 from '../Room/RoomSec3';
import RoomSec4 from '../Room/RoomSec4';
import RoomSec5 from '../Room/RoomSec5';
import Section12 from '../Section12/Section12';
import Section13 from '../Section13/Section13';

function Room1() {
  return (
    <>
    <Header />
       <RoomSec1 />
       <Section3 />
       <RoomSec2 />
       <Section6 />
       <RoomSec3 />
       <Section3 />
       <RoomSec4 />
       <Section3 />
       <RoomSec5 />
       <Section3 />
       <Section12 />
       <Section13 />
          </>
  )
}
export default Room1;