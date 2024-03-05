import React, { useReducer } from 'react';
import code from './useReducer.png';

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw Error(`unknown action + ${action.type}`);
  }
}

function UseReducer() {
  // this is for spread syntax only
  // const numberOne = [1, 2, 3];
  // const numberTwo = [4, 5, 6];
  // const spreadSyn = [...numberOne, ...numberTwo];
  // const nonSpread = [numberOne, numberTwo];

  // console.log('spread syn');
  // console.log(spreadSyn);
  // console.log('non spread syn');
  // console.log(nonSpread);
  // end

  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <p>Code:</p>
      <img src={code} alt="this-code" />
      <div>
        <button
          onClick={() => {
            dispatch({ type: 'decrement' });
          }}
        >
          -
        </button>
        <span>&nbsp;{state.count}&nbsp;</span>
        <button
          onClick={() => {
            dispatch({ type: 'increment' });
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default UseReducer;
