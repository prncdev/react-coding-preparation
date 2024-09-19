import { useContext } from "react";
import { CounterContext } from "./ParentReducerContext";


const ComponentD = function () {
  const { dispatch } = useContext<{ dispatch: (action: string) => void }>(CounterContext);
  return (
    <div>
      ComponentD
      <div>
        <button onClick={() => dispatch('increment')}>Increment</button>
        <button onClick={() => dispatch('decrement')}>Decrement</button>
        <button onClick={() => dispatch('reset')}>Reset</button>
      </div>
    </div>
  )
}

export default ComponentD;