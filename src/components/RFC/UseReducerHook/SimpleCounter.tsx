import { FC, useReducer } from 'react';

// Always define the reducer function at the top of the component, and the initial state as well.
const initialState = 0;

const reducer = function (currentState: number, action: 'increment' | 'decrement' | 'reset') {
  // Switch case conditional usually prefer for managing actions.
  switch (action) {
    case 'increment':
      var newState = currentState + 1;
      return newState;
    case 'decrement':
      var newState = currentState - 1
      return newState;
    case 'reset':
      return initialState;
    default:
      return currentState;
  }
}

const SimpleCounter: FC = function () {
  // The dispatch function returned by userReducer is only accepts the action parameter.
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count - {count}</p>
      <button onClick={() => dispatch('increment')}>Increment</button>
      <button onClick={() => dispatch('decrement')}>Decrement</button>
      <button onClick={() => dispatch('reset')}>Reset</button>
    </div>
  )
}

export default SimpleCounter;