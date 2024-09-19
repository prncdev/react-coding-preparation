import { useState, useEffect, FC } from "react";

// Every time a state or prop change will cause the component to re-render.
const UpdatePageTitleEffect: FC = function () {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState('');

  useEffect(() => {
    console.log('Updating the title');
    document.title = `Clicked ${counter as unknown as string} times`;
  }, [counter]); // when there is no dependency array it mimics the componentDidMount and componentDidUpdate lifecycle method.
  // If there is dependency array it known as conditional effect run. And if the array is empty `[]` it mimics componentDidMount lifecycle method.

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <button
        onClick={event => setCounter(prevCounter => prevCounter + 1)}>
        Clicked {counter} times
      </button>
    </div>
  )
}

export default UpdatePageTitleEffect;