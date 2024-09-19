import { Component, ComponentType, ReactNode } from 'react';


// Naming conventions is also important.
const withCounter = (WrappedComponent: ComponentType<any>, incrementNumber = 1) => {
  class WithCounter extends Component<{ [key: string]: any }, { counter: number }> {
    state = {
      counter: 0,
    }

    incrementCount = () => {
      this.setState(prevState => {
        return { counter: prevState.counter + incrementNumber }
      })
    }

    render(): ReactNode {
      return (
        <WrappedComponent
          // expend all props that is passed to the original component.
          {...this.props}

          // Injecting additional props for component enhancement.
          counter={ this.state.counter }
          incrementCount={ this.incrementCount }
        />
      )
    }
  }

  return WithCounter;
}

export default withCounter;
