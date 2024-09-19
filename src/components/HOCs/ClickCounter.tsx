import { Component, ReactNode } from "react";
import withCounter from "./withCounter";

class ClickCounter extends Component<{[key: string]: any }> {
  render(): ReactNode {
    const { counter, incrementCount } = this.props;
    
    return (
      <button onClick={incrementCount}>Clicked by  {this.props.name} {counter} times</button>
    )
  }
}

export default withCounter(ClickCounter, 5);