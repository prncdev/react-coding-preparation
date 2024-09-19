import { createContext } from "react";
import ComponentB from "./ComponentB";
import ComponentC from "./ComponentC";

export const Profile = createContext<{ name: string; age: number }>({ name: '', age: 0 });
export const Love = createContext<{ name: string; age: number }>({ name: '', age: 0 });

const ParentContextHook = function () {
  // const user = useMemo(() => ({name: 'Prince', age: 27}), []);
  const user = { name: 'Prince', age: 27 }
  const gf = { name: 'Anjali Singh', age: 27 }

  return (
    <div>
      <Profile.Provider value={user}>
        <ComponentC />

        <Love.Provider value={gf}>
          <ComponentB />
        </Love.Provider>
      </Profile.Provider>
    </div>
  )
}

export default ParentContextHook;