// import React, { useState, useEffect } from 'react';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Row';
// import './Counter.css'
// const Counter = () => {
// const [count, setCount] = useState(0);

//   useEffect(() => {
//     // Use setInterval to increment count every second
//     const intervalId = setInterval(() => {
//       setCount(prevCount => prevCount + 1);
//     }, 100);
//     // Clear the interval when the component is unmounted
//     return () => clearInterval(intervalId);
//   }, []); 
//   return (
// <div className='AboutCount'>
//     <Row className='AboutCouting'>
//      <Col className='counter-col'>
//       <div className=' counter-col d-flex'>
//     <div  className='counter '>
//     {/* <p > {count}</p>
//     <h4 className='CounterCont0'>FOUNDED</h4> */}
//     </div>
// <div className='counter' >
//     {/* <p className='Counter2' > {count}</p>
//     <h4 className='CounterCont1'>EMPLOYEE</h4> */}
//     </div>

// <div className='counter'>  
//   {/* <p className='Counter3' > {count}+</p>
//     <h4 className='CounterCont2'>PRODUCTS</h4> */}

//     </div>
//     <div className='counter'>  
//     {/* <p className='Counter4' > {count}</p>
//     <h4 className='CounterCont3'>STORES</h4> */}
//     </div>
//     </div>
//     </Col>
//     </Row>
//     </div>
//   );
// };

// export default Counter;
import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Row';
import './Counter.css'
const Counter = () => {
const [count, setCount] = useState(0);

  useEffect(() => {
    // Use setInterval to increment count every second
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 100);
    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []); 
  return (
<div className='AboutCount'>
    <Row className='AboutCouting'>
     <Col>
    <div  className='Counter1'>
    <p > {count}</p>
    <h4 className='CounterCont0'>FOUNDED</h4>

    <p className='Counter2' > {count}</p>
    <h4 className='CounterCont1'>EMPLOYEE</h4>

    <p className='Counter3' > {count}+</p>
    <h4 className='CounterCont2'>PRODUCTS</h4>

    <p className='Counter4' > {count}</p>
    <h4 className='CounterCont3'>STORES</h4>
    </div>
    </Col>
    </Row>
    </div>
  );
};

export default Counter;
