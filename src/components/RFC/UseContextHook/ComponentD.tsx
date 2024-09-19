import { useContext } from "react";
import { Love, Profile } from "./ParentContextHook";

const ComponentD = function () {
  const user = useContext(Profile)
  const bandi = useContext(Love);
  return (
    <div>
      ComponentD
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>Personal Info</p>
      
      <p>GirlFriend's Name: {bandi.name}</p>
      <p>GirlFriend's Age: {bandi.age}</p>
    </div>
  )
}

export default ComponentD;