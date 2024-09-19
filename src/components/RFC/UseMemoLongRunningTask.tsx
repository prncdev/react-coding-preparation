import { useState, useEffect, useMemo, FC } from 'react';

const UseMemoLongRunningTask: FC = function () {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const increaseCounterOne = function () {
    setCounterOne(prevCounter => prevCounter + 1);
  }

  const increaseCounterTwo = function () {
    setCounterTwo(prevCounter => prevCounter + 1);
  }

  // Even though the isEvent function's value is used in for the counterOne state, but it has also affect the counterTwo button click as well, if I, now understand how and when react updates the UI based on the current state value, here because implementing `useMemo` hook solution, every time the component re-renders it calls the isEvent function to check whether to display `Even` or `Odd` string.

  // const isEvent = function () {
  //   for(let i = 0; i < 2000000000; i++) {};
  //   return counterOne % 2 === 0;
  // }

  // useMemo memorizes the computed value if hasn't changed, and returns a value rather than a function.
  const isEvent = useMemo(function () {
    for (let i = 0; i < 2000000000; i++) { };
    return counterOne % 2 === 0;
  }, [counterOne]);

  return (
    <div>
      <p>Counter - {counterOne} is: {isEvent ? 'Even' : 'Odd'}</p>
      <button onClick={increaseCounterOne}>Increase Counter One</button>

      <p>Counter - {counterTwo}</p>
      <button onClick={increaseCounterTwo}>Increase Counter Two</button>
    </div>
  )
}

export default UseMemoLongRunningTask;