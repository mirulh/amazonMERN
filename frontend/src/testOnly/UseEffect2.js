import React, { useState, useEffect } from 'react';
import code from './useEffect2.png';

function UseEffect2() {
  const [resourceType, setResourceType] = useState('post'); //initialize default state

  // a simple example of every time a change take place, it will log out 'render'
  console.log('render');

  useEffect(() => {
    console.log('resource type changed');
    //
  }, [resourceType]); // <- this is the second parameter where we defined our array values. The hook responds to the effect to the array

  return (
    <div>
      <p>
        useEffect also takes on a second parameter of an array.<br></br>
        <br></br>
        Whatever you passed into this array is going to be a value of whenever
        it changed, your hook (useEffect) is going to run <br></br>(observed the
        console, 'resource type change' whenever the button is clicked - the
        side effects) <br></br>
        <br></br>Code:<br></br>
        <img src={code} alt="this-code" />
      </p>
      <div>
        <button onClick={() => setResourceType('posts')}>Post</button>
        <button onClick={() => setResourceType('comments')}>Comment</button>
        <button onClick={() => setResourceType('likes')}>Like</button>
      </div>
      <p>{resourceType}</p>
    </div>
  );
}

export default UseEffect2;
