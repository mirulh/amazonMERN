import React, { useState, useEffect } from 'react';
import code from './useEffect.png';

function UseEffect() {
  const [count, setCount] = useState(0);

  console.log('render'); //will rerender on every changes

  // This useEffect hook will run after every render
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>Code:</p>
      <p>
        The Effect Hook lets you perform side effects in function components:{' '}
        <br></br>
        <br></br>
        Observed the document title changing when user click the button as of
        creating a side effects
      </p>
      <img src={code} alt="this-code" />
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default UseEffect;
