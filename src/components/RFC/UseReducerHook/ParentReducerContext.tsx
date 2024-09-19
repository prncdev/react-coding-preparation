import { useReducer, createContext, FC } from "react";
import ComponentB from "./ComponentB";
import ComponentC from "./ComponentC";

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

export const CounterContext = createContext<any>(null);
CounterContext.displayName = 'ParentReducerContext';


const ParentReducerContext: FC = function () {
  const [count, dispatch] = useReducer(reducer, initialState);
  const { Provider } = CounterContext;

  return (
    <div>
      <Provider value={{ count, dispatch }}>
        <ComponentC />
        <ComponentB />
      </Provider>
    </div>
  )
}
export default ParentReducerContext;