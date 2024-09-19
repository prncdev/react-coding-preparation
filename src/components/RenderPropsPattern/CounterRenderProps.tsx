import { FC, useState } from 'react';

type Props = {
  render: (countValue: number, increamenter: () => void) => JSX.Element;
}

// This is our render prop pattern.
const CounterRenderProps: FC<Props> = function ({render}) {
  console.log('Render Counter component');
  const [counter, setCounter] = useState(0);

  const handleIncrement = function () {
    setCounter(counter + 1);
  }
  
  return render(counter, handleIncrement);
};

export default CounterRenderProps;