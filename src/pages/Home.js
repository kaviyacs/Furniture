import React from 'react'
import Header from '../Header/Header'
import Section1 from '../Section1/Section1'
import Section2 from '../Section2/Section2'
import Section3 from '../Section3/Section3'
import Section4 from '../Section4/Section4'
import Section5 from '../Section5/Section5'
import Section6 from '../Section6/Section6-cart'
import Section7 from '../Section7/Section7'
import Section8 from '../Section8/Section8'
import Section9 from '../Section9/Section9'
import Section10 from '../Section10/Section10'
import Section11 from '../Section11/Section11'
import Section12 from '../Section12/Section12'
import Section13 from '../Section13/Section13'
import Register from '../Register'
import Login from '../components/Login'

function Home() {
  return (
    <>
        <Header />
        <Section1 />  
        <Section2 />
        <Section3 breakpoints={3}/>
        <Section4 />
        <Section5 />
        <Section3 breakpoints={3} />
        <Section7 />
        <Section8 />
        <Section9 />
        <Section10 />
        <Section11 />
        <Section12 />
        <Section13 />  
        <Login />
        {/* <Register /> */}
      </>  )
}
export default Home;
