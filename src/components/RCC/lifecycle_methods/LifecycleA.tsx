// Why are lifecycle methods important in React?

// In React, a class component goes through several stages like: mounting, updating, unmounting, and error handling. 
// Lifecycle methods are built-in functions that allow us to run code at these specific stages. 
// They help us initialize the component, handle updates, manage errors, and clean up resources when the component is being removed from the DOM. 
// So the proper use of these methods are crucial to ensures the component works correctly and efficiently.

// When or how the lifecycle methods are called? lifecycle methods are called when instance of a class component is being created and inserted into the DOM.
import { Component, ReactNode } from "react";
import { LifecycleB } from "./LifecycleB";

interface IProps {
  id: string | number;
}

interface IState {
  hasError: boolean;
  userData: {
    name: string;
    email: number | string;
    id?: number | string;
  }
}

export class LifecycleA extends Component<IProps, IState> {
  // This run only once before getDerivedStateFromProps.
  constructor(props: IProps) {
    super(props);

    this.state = {
      hasError: false,
      userData: {
        name: '',
        email: '',
        id: props.id,
      }
    }

    this.triggerError = this.triggerError.bind(this);

    console.log('LifecycleA Constructor only run once throughout the component\'s lifecycle');
  }

  // On initial render, this runs before render method, and on subsequent updates this runs before shouldComponentUpdate.
  static getDerivedStateFromProps(newProps: IProps, currentState: IState): any {
    console.log('LifecycleA static getDerivedStateFromProps run on subsequent updates');
    if (newProps.id !== currentState.userData.id) {
      return {
        ...currentState.userData,
        name: '',
        email: '',
      }
    } else {
      return null;
    }
  }

  // This runs before the render method on subsequent updates, by default it returns true.
  // Improves performance
  shouldComponentUpdate(nextProps: Readonly<IProps>, nextState: Readonly<IState>, nextContext: any): boolean {
    // return false;
    if (nextProps.id !== this.props.id) {
      // if (nextState.userData.name !== this.state.userData.name) {
      console.log('LifecycleA Should Component Update? Yes because props is changed');
      return true;
    } else
      if (nextState.userData.name !== this.state.userData.name) {
        console.log('LifecycleA Should Component Update? Yes because state is change');
        return true;
      } else {
        console.log('LifecycleA Should Update isn\'t run');
        return false;
      }
  }

  // This runs on initial render only.
  componentDidMount(): void {
    console.log('LifecycleA Component did mount run once when the component all it\'s child component has rendered');
    this.fetchData(this.props.id);
  }

  // This runs before componentDidUpdate method on every subsequent updates.
  getSnapshotBeforeUpdate(prevProps: Readonly<IProps>, prevState: Readonly<IState>): any {
    // This method is invoked right before the most recently rendered output is committed to the DOM.
    // You can capture some information from the DOM before it is potentially changed.

    // if (prevProps.id !== this.props.id || prevState !== this.state) {
    if (prevState !== this.state) {
      console.log("LifecycleA Get Snapshot before update");
      return {
        prevProps,
        prevState
      }; // capturing the previous id before the DOM update
    }

    return null;
  }

  // This runs on every subsequent updates, if shouldComponentUpdate returns true.
  componentDidUpdate(prevProps: Readonly<IProps>, prevState: Readonly<IState>, snapshot?: any): void {
    // This is where you can handle the DOM updates or side effects
    if (prevProps.id !== this.props.id) {
      this.fetchData(this.props.id);
      console.log("LifecycleA Component did update due to prop change");
      console.log(snapshot);
      // Potentially fetch new data or update the state
    }

    if (prevState !== this.state) {
      console.log(snapshot);
      console.log("LifecycleA Component did update due to state change");
    }
  }


  // Don't call setState method because it used to cleanups only.
  componentWillUnmount(): void {
    console.log("LifecycleA Component will unmount");
    // Clean up resources like event listeners, timers, etc.
  }

  static getDerivedStateFromError(error: Error): Partial<IState> | null {
    // Update state so the next render will show a fallback UI
    console.log("LifecycleA getDerivedStateFromError called");
    console.log(error);
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: any): void {
    console.log("LifecycleA Component did catch an error");
    console.log('error', error, 'Into', info);
    // Log error to an error reporting service
  }

  fetchData(param: string | number) {
    fetch('http://localhost:5000/me', {
      headers: { Authorization: `Bearer ${param}` }
    }).then(response => response.json())
      .then(data => this.setState({ userData: data }))
      .catch((error) => {
        console.log(error);
      })
  }

  triggerError() {
    throw new Error("This is a simulated error for testing purposes");
  };

  // On initial render this runs before componentDidMount. And on subsequent updates before getSnapshotBeforeUpdate method
  render(): ReactNode {
    console.log('LifecycleA Render method run');
    if (this.state.hasError) {
      // Fallback UI when an error is detected
      return (
        <div>
          <h1>Oops! Something went wrong.</h1>
          <p>We apologize for the inconvenience. Please try again later.</p>
        </div>
      );
    }

    const { name, email } = this.state.userData;
    return (
      <div>
        <h1>User Data</h1>
        <p>ID: {this.props.id}</p>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <button onClick={this.triggerError}>Trigger Error</button>
        <LifecycleB />
      </div>
    );
  }
}