import React from 'react';
import { useState } from 'react';

const PrevKey = () => {
    const [count,setCount] = useState(0);
    function counter(){
        setCount(prev => prev + 1);
        setCount(prev => prev + 1);
    }


  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={counter}>Increment</button>
   
    </div>
  );
};

export default PrevKey;