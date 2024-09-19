import { FC, memo } from "react";

type IProps = {
  handleClick: () => void;
  children: any
}
const Button: FC<IProps> = function({ handleClick, children }) {
  console.log(children + ' Button');
  return (
    <button onClick={handleClick}>{children}</button>
  )
}

export default memo(Button);