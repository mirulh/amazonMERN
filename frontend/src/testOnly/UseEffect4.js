import React, { useEffect, useState } from 'react';

function UseEffect4() {
  // Declare a state variable named "count" with an initial value of 0
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  function resizeWidth() {
    setWindowSize(window.innerWidth);
  }
  console.log('render'); //render every time

  useEffect(() => {
    window.addEventListener('resize', resizeWidth);
    console.log('component mounted'); // render once at the beginning cuz of empty array

    return () => {
      window.removeEventListener('resize', resizeWidth);
      console.log('component unmounted'); // render after the first mount
    };
  }, []);

  return <div>{windowSize}</div>;
}

export default UseEffect4;

// note:
/* In the provided code snippet, even though the useEffect hook has an empty dependency array [], which means it should only run once after the initial render, the event listener for window resize (window.addEventListener('resize', resizeWidth)) is triggered every time the window is resized.

This behavior occurs because the event listener function (resizeWidth) captures the state variable windowSize from the component's closure. Since windowSize is a state variable, each time it changes (due to a resize event updating it via setWindowSize), it causes a re-render of the component. Consequently, the event listener function (resizeWidth) is recreated on each render, causing it to be registered again with window.addEventListener('resize', resizeWidth). */
