import { FC, memo } from "react";

type IProps = {
  text: string;
  count: number
}
const Count: FC<IProps> = function({ text, count }) {
  console.log('Count ' + text);
  return (
    <p>{text} - {count}</p>
  )
}

export default memo(Count);