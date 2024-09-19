import { Component } from 'react';


interface CounterType {
  counter: number;
}

class Counter extends Component<{}, CounterType> {
  constructor(props: any) {
    super(props);
    this.state = {
      counter: 0
    }
  }

  increamentCount = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  increamentCountByN = () => {

    // Accepts two arguments object or function form for updating the state. And a callback which returns avoid.
    this.setState((prevCount, props) => {
      // Function from accepts previous state as argument and the props.
      console.log(props);
      return { counter: prevCount.counter + 1 }
    });

    this.setState((prevCount) => {
      return { counter: prevCount.counter + 1 }
    });

    this.setState((prevCount) => {
      return { counter: prevCount.counter + 1 }
    });

    this.setState((prevCount) => {
      return { counter: prevCount.counter + 1 }
    });

    this.setState((prevCount) => {
      return { counter: prevCount.counter + 1 }
    });

    /************This below code doesn't give the desiger result because:***********/
    // When react sees this kind of pattern or function calls for the same value it grouped those calls into one and updates the state value. So if our result relies on the previous state of the value we have to use callbacks.


    // this.setState({ counter: this.state.counter +1 });
    // this.setState({ counter: this.state.counter +1 });
    // this.setState({ counter: this.state.counter +1 });
    // this.setState({ counter: this.state.counter +1 });
  };

  render() {
    return (
      <>
        <div>Counter {this.state.counter}</div>
        <button onClick={this.increamentCount}>Increament count</button> <br />
        <button onClick={this.increamentCountByN}>Increament count by 5</button>
      </>
    )
  }
}

export default Counter;