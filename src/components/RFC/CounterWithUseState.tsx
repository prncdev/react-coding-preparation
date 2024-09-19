import { FC, useState } from 'react';

const CounterStateHook: FC = function() {
  const [ counter, setCounter ] = useState<number>(0);
  
  console.dir(useState<number>(0)[1])

  const countHandler = function() {
    setCounter(prevCount => prevCount +1);
  }

  return (
    <div>
      <button onClick={countHandler}>Click times {counter}</button>
    </div>
  )
}

export default CounterStateHook;