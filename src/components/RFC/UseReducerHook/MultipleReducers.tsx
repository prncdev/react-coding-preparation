import { FC, useReducer } from 'react';

const initialState = 0;

const reducer = function (currentState: number, action: 'increment' | 'decrement' | 'reset') {
  switch (action) {
    case 'increment':
      return currentState + 1;
    case 'decrement':
      return currentState - 1;
    case 'reset':
      return initialState;
    default:
      return currentState;
  }
}

const MultipleReducers: FC = function () {
  // If the state transitions are same using multiple useReducer hook is a good idea since it helps to avoid duplicating the code which creates complexity.
  const [countOne, dispatchOne] = useReducer(reducer, initialState);
  const [countTwo, dispatchTwo] = useReducer(reducer, initialState);

  return (
    <div>
      <div>
        <h1>Count One - {countOne}</h1>
        <button onClick={() => dispatchOne('increment')}>Increment</button>
        <button onClick={() => dispatchOne('decrement')}>Decrement</button>
        <button onClick={() => dispatchOne('reset')}>Reset</button>

      </div>

      <div>
        <h1>Count Two - {countTwo}</h1>
        <button onClick={() => dispatchTwo('increment')}>Increment</button>
        <button onClick={() => dispatchTwo('decrement')}>Decrement</button>
        <button onClick={() => dispatchTwo('reset')}>Reset</button>
      </div>
    </div>
  )
}

export default MultipleReducers;