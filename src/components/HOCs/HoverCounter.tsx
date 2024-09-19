import { Component, ReactNode } from "react";
import withCounter from "./withCounter";

class HoverCounter extends Component<{ counter: number, incrementCount: () => void }> {
  render(): ReactNode {
    const { counter, incrementCount } = this.props;

    return (
      <h1 onMouseOver={incrementCount}>Clicked {counter} times</h1>
    )
  }
}

export default withCounter(HoverCounter);