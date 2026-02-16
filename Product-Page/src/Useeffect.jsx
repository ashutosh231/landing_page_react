import React from 'react';
import { useState,useEffect } from 'react';

const Useeffect = () => {
    const [count, setCount] = useState(0);
    const [mount, setMount] = useState(0);
    useEffect(() => {
        console.log("useEffect called");
        // document.title = `Count: ${count}`;
    },[count]);
  return (
    <div>
        <h1>UseEffect</h1>
        <p>Count: {count}</p>
        <br />
        <p>Mount: {mount}</p>
        <button onClick={() => setMount(mount + 1)}>Increment Mount</button>
        <br />
        <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Useeffect;