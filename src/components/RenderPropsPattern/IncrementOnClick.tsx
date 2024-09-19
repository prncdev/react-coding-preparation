import { FC } from 'react';

type Props = {
  counter: number;
  incrementFn: () => void;
}

const IncrementOnClick: FC<Props> = function ({counter, incrementFn}) {
  console.log('Render IncrementOnClick component');
  return <button onClick={incrementFn}>Click {counter} times</button>
};

export default IncrementOnClick;