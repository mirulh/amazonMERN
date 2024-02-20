import React, { useState } from 'react';
import code from './useState.png';

function UseState() {
  // Declare a state variable named "count" with an initial value of 0
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Code:</p>
      <img src={code} alt="this-code" />
      <p>You clicked {count} times</p>
      {/* On button click, update the count state using setCount */}
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default UseState;
