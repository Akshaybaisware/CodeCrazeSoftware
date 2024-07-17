import React, { useEffect, useState } from 'react';

const Counter = ({ target }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(target);
    if (start === end) return;

    let totalMilSecDur = 0.1; 
    let incrementTime = (totalMilSecDur / end);

    let timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <h4 className="fs-1 text-danger fw-bold">
      {count}+
    </h4>
  );
};

export default Counter;
