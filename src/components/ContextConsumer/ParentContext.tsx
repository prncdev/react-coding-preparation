import { Component, ReactNode } from "react";
import ComponentC from "./ComponentC";
import { Provider } from "../Context/userContext";

class ParentContext extends Component {
  render(): ReactNode {
    const userData = {
      name: 'Anjali',
      age: 25,
      email: 'anjali@gmail.com'
    }

    return (
      <Provider value={userData}>
        <ComponentC />
      </Provider>
    )
  }
}

export default ParentContext;