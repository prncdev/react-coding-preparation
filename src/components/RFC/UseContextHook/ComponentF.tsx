import { useContext } from "react";
import { Profile } from "./ParentContextHook";

const ComponentF = function() {
  const user = useContext(Profile);
  return (
    <div>
      ComponentF
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
    </div>
  )
}

export default ComponentF;