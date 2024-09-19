import React, { ChangeEvent, Component } from "react";

// Every time a state pr prop change will cause the component to re-render.

class UpdatePageTitle extends Component<{}, {counter: number; name: string}> {
  constructor(props: any) {
    super(props);

    this.state = {
      counter: 0,
      name: ''
    }

    this.handleCount = this.handleCount.bind(this);
    this.handleNameUpdate = this.handleNameUpdate.bind(this);
  }

  handleNameUpdate(event: ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;

    this.setState({ name: value });
  }

  handleCount() {
    this.setState(prevState => ({
      counter: prevState.counter +1
    }));
  }

  componentDidMount(): void {
    document.title = `Click ${this.state.counter as any}`;
  }

  componentDidUpdate(prevProps: any, prevState: { counter: number; name: string; }, snapshot?: any): void {
    // Prevent unnecessary computation.
    if(prevState.counter !== this.state.counter) {
      console.log('updating title')
      document.title = `Click ${this.state.counter as any}`;
    }
  }

  render(): React.ReactNode {
    return (
      <div>
        <input type="text" value={this.state.name} onChange={this.handleNameUpdate} />
        <button onClick={this.handleCount}>Click {this.state.counter}</button>
      </div>
    )
  }
}

export default UpdatePageTitle