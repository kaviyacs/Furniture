import React from 'react';

const Counter = () => {
  const counters = [
    { limitInSeconds: 5 },
    { limitInSeconds: 10 },
    { limitInSeconds: 15 },
  ];

  return <Counter counters={counters} />;
};

export default Counter;
