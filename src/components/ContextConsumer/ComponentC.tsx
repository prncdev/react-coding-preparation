import { Component, ReactNode } from "react";
import ComponentE from "./ComponentE";

class ComponentC extends Component {
  render(): ReactNode {
    return (
      <ComponentE />
    )
  }
}

export default ComponentC;