import { Component, MouseEvent } from 'react';

interface StateDef {
  counter: number;
}

interface PropsDef {
  name: string;
}

class BindingEvent extends Component<{}, StateDef> {
  constructor(props: PropsDef) {
    super(props);

    this.state = {
      counter: 1
    };

    // This is how we bind the methods in constructor function.
    this.increamental = this.increamental.bind(this);
  }

  increamental(event: MouseEvent) {
    console.log(event);
    this.setState(prevState => {
      return { counter: prevState.counter + 1 };
    });
  }

  componentDidMount(): void {
    console.log('I run once');
  }

  render(): JSX.Element {
    return (
      <>
        <h1>{this.state.counter}</h1>
        <button onClick={this.increamental}>Add Value</button>
      </>
    )
  }
};

export default BindingEvent;