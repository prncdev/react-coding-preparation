import { useEffect, useState } from "react"

const IntervalHookCounter = function() {
  const [count, setCount] = useState(0);
  const [display, setDisplay] = useState(true);

  const tick = function() {
    // Since our setCount state updater function keeps track of the count state value react knowns to schedule a update on the view, therefor we don't need to specify `count` state in dependency array.
    
    // However if we just overriding the `count` state the updater function don't track the count state variable and hence it didn't known to schedule re-render we have to forcefully schedule a re-render for that.
    setCount((prevCount) => prevCount +1);
  }

  // If we are reading a prop from a function and calling that function only when there is a change in the prop. We do that in `useEffect` but this time we have to tell react that only call the when prop value changes by specifying the prop in dependency array.

  useEffect(() => {
    const interval = setInterval(tick, 1000);
    return () => {
      clearInterval(interval);
    }
  }, []);

  return (
    <div>
      {count}
    </div>
  )
};

export default IntervalHookCounter;