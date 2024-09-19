import { useContext } from "react";
import ComponentF from "./ComponentF";
import { CounterContext } from "./ParentReducerContext";

const ComponentE = function() {
  const { count } = useContext<{count: number}>(CounterContext);
  return (
    <div>
      ComponentE {' : '}
      Counter - { count }
      <ComponentF />
    </div>
  )
}

export default ComponentE;