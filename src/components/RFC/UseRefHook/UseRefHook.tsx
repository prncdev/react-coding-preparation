import { FC, useEffect, useRef } from 'react';

const UseRefHook: FC = function() {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  return (
    <div>
      <input ref={inputRef} type="text" />
    </div>
  )
}

export default UseRefHook;