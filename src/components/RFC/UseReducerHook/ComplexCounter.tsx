import { FC, useReducer } from 'react';

interface IState {
  counterOne: number;
  counterTwo: number;
}

interface IAction {
  type: string;
  value?: number;
}
// Initiate a initial state
const initialState: IState = {
  counterOne: 0,
  counterTwo: 5,
}

const reducer = function (currentState: IState, action: IAction): IState {
  // Using action as object enables handling additional data.
  switch (action.type) {
    case 'increment':
      return {
        ...currentState,
        counterOne: currentState.counterOne + (action.value ? action.value : 1),
        // counterTwo: currentState.counterTwo + (action.value ? action.value : 1)
      };

    case 'decrement':
      return {
        ...currentState,
        counterOne: currentState.counterOne - (action.value ? action.value : 1),
        // counterTwo: currentState.counterTwo - (action.value ? action.value : 1)
      };

    // Update another state independently.
    case 'increment2':
      return {
        ...currentState,
        counterTwo: currentState.counterTwo + (action.value ? action.value : 1)
      };

    case 'decrement2':
      return {
        ...currentState,
        counterTwo: currentState.counterTwo - (action.value ? action.value : 1)
      };

    case 'reset':
      return initialState;

    default:
      return currentState;
  }
}

const ComplexCounter: FC = function () {
  // Making State and Action as an object gives lots of ease and able to more than one things at once.
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>Counter One: {count.counterOne}</h1>
      <h1>Counter Two: {count.counterTwo}</h1>
      <div>
        <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
        <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
      </div>

      {/* 
      <div>
        <button onClick={() => dispatch({ type: 'increment', value: 5 })}>Increment 5</button>
        <button onClick={() => dispatch({ type: 'decrement', value: 5 })}>Decrement 5</button>
      </div>
      */}

      <div>
        <button onClick={() => dispatch({ type: 'increment2', value: 5 })}>Increment 5</button>
        <button onClick={() => dispatch({ type: 'decrement2', value: 5 })}>Decrement 5</button>
      </div>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  );
}

export default ComplexCounter;