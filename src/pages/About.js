import React from 'react'
import Header from '../Header/Header'
import AboutSec1 from '../About/AboutSec1';
import AboutSec2 from '../About/AboutSec2';
import AboutSec3 from '../About/AboutSec3';
import AboutSec4 from '../About/Aboutsec4/AboutSec4';
import AboutSec5 from '../About/AboutSec5/AboutSec5';
import Section12 from '../Section12/Section12'
import Section13 from '../Section13/Section13'
import Counter from '../About/Counter/Counter';
import Addfilecard from '../AddFillCart';
import CountSec from '../About/Counter/CountSec';

function Aboutus() {
  return (
    <>
    <Header />
    <AboutSec1 />
    <AboutSec2 />
    <AboutSec3 />
    <Counter />
    {/* <CountSec /> */}
    <AboutSec4 />
    <AboutSec5 />
    <Section12 />
    <Section13 />
{/* <Addfilecard /> */}
   </>
  )
}
export default Aboutus;