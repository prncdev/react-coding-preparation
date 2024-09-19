import { useState } from "react"
import UseEffectCleanUp from "./UseEffectCleanUp";

const UseEffectCleanUpWrapper = function() {
  const [displayElement, setDisplayElement] = useState(true);


  return (
    <div>
      <button onClick={() => setDisplayElement(!displayElement)}>Toggle Display</button>
      {displayElement && <UseEffectCleanUp />}
    </div>
  )
}

export default UseEffectCleanUpWrapper;