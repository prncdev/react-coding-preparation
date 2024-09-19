import { FC }  from 'react';

type Props = {
  counter: number;
  incrementFn: () => void;
}

const IncrementOnHover: FC<Props> = function ({counter, incrementFn}) {
  console.log('Render IncrementOnHover component');
  return <h1 onMouseEnter={incrementFn}>Click {counter} times</h1>
};

export default IncrementOnHover;