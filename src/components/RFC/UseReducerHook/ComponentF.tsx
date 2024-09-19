import { useContext } from "react";
import { CounterContext } from "./ParentReducerContext";


const ComponentF = function () {
  const counterContext = useContext<{ dispatch: (action: string) => void }>(CounterContext);
  const { dispatch } = counterContext;
  return (
    <div>
      ComponentF
      <div>
        <button onClick={() => dispatch('increment')}>Increment</button>
        <button onClick={() => dispatch('decrement')}>Decrement</button>
        <button onClick={() => dispatch('reset')}>Reset</button>
      </div>
    </div>
  )
}

export default ComponentF;