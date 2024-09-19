import { FC, useEffect, useRef, useState } from 'react';

const TimerHook: FC = function() {
  const [tick, setTick] = useState(0);

  const intervalRef = useRef<any>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => setTick(prevTick => prevTick + 1), 1000);

    // It's necessary to have this otherwise we'll incorrect results and also can't able to stop the clear the interval
    return function() {
      clearInterval(intervalRef.current);
    }
  }, []);
  return (
    <div>
      Timer - {tick} <br />
      <button onClick={() => clearInterval(intervalRef.current)}>Stop Tick</button>
    </div>
  )
}

export default TimerHook;