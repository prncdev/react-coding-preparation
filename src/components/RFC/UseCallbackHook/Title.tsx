import { FC, memo } from "react";

const Title: FC = function() {
  console.log('Title Component');
  return (
    <h2>
      Use Callback Hook
    </h2>
  )
}

export default memo(Title);