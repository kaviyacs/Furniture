import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <span className='card-function'>
      
      <button onClick={increment} className='card-increment'>+</button>
      <input
        type="text"
        value={count}
        className='card-value'
      />
      <button onClick={decrement} className='card-decrement'>-</button>
      <button className='add-to-cart'>ADD TO CART</button>
    </span>
  );
};

export default Counter;
