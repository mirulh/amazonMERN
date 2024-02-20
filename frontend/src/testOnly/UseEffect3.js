import React, { useState, useEffect } from 'react';
import code from './useEffect3.png';

function UseEffect3() {
  const [resourceType, setResourceType] = useState('posts'); //initialize default state

  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [resourceType]); // without the second parameter the useEffect cannot be triggered

  return (
    <div>
      <p>Code: </p>
      <img src={code} alt="this-code" />
      <div>
        <button onClick={() => setResourceType('posts')}>Post</button>
        <button onClick={() => setResourceType('users')}>Users</button>
        <button onClick={() => setResourceType('comments')}>Comments</button>
      </div>
      <h1>{resourceType}</h1>
      {items.map((item) => {
        return <pre>{JSON.stringify(item)}</pre>;
      })}
    </div>
  );
}

export default UseEffect3;
