import { useEffect, useState } from "react"

const UseEffectCleanUp  = function() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = (event: MouseEvent) => {
    console.log('Mouse event');
    setX(event.clientX);
    setY(event.clientY);
  }

  useEffect(() => {
    console.log('useEffect called!');

    // Keep this in mind, once a event listener is set we don't need to set it on every re-render
    document.addEventListener('mousemove', logMousePosition);

    // Mimic the componentWillUnmount.
    return () => {
      console.log('Component unmounting code!');
      document.removeEventListener('mousemove', logMousePosition);
    }
  }, []);

  return (
    <div>
      x-axis - {x} <br />
      y-axis - {y}
    </div>
  )
}

export default UseEffectCleanUp;