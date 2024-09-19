// Why are lifecycle methods important in React?

// In React, a class component goes through several stages like: mounting, updating, unmounting, and error handling. 
// Lifecycle methods are built-in functions that allow us to run code at these specific stages. 
// They help us initialize the component, handle updates, manage errors, and clean up resources when the component is being removed from the DOM. 
// So the proper use of these methods are crucial to ensures the component works correctly and efficiently.

// When or how the lifecycle methods are called? lifecycle methods are called when instance of a class component is being created and inserted into the DOM.
import { Component, ReactNode } from "react";

export class LifecycleB extends Component {
  // This run only once before getDerivedStateFromProps.
  constructor(props: any) {
    super(props);

    this.triggerError = this.triggerError.bind(this);

    console.log('LifecycleB Constructor only run once throughout the component\'s lifecycle');
  }

  // On initial render, this runs before render method, and on subsequent updates this runs before shouldComponentUpdate.
  static getDerivedStateFromProps() {
    console.log('LifecycleB static getDerivedStateFromProps run on subsequent updates');
  }

  // This runs before the render method on subsequent updates, by default it returns true.
  // Improves performance
  shouldComponentUpdate() {
    // return false;
    console.log('LifecycleB Should Component Update');
    return true;
  }

  // This runs on initial render only.
  componentDidMount(): void {
    console.log('LifecycleB Component did mount run once when the component all it\'s child component has rendered');
  }

  // This runs before componentDidUpdate method on every subsequent updates.
  getSnapshotBeforeUpdate(): any {
    console.log('LifecycleB get Snapshot before update');
    return null;
  }

  // This runs on every subsequent updates, if shouldComponentUpdate returns true.
  componentDidUpdate(): void {
    console.log("LifecycleB Component did update");
  }

  // Don't call setState method because it used to cleanups only.
  componentWillUnmount(): void {
    console.log("LifecycleB Component will unmount");
    // Clean up resources like event listeners, timers, etc.
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show a fallback UI
    console.log("LifecycleB getDerivedStateFromError called");
  }

  componentDidCatch() {
    console.log("LifecycleB Component did catch an error");
  }

  triggerError() {
    throw new Error("This is a simulated error for testing purposes");
  };

  // On initial render this runs before componentDidMount. And on subsequent updates before getSnapshotBeforeUpdate method
  render(): ReactNode {
    console.log('LifecycleB Render method run');
    return (
      <div>
        LifecycleB
      </div>
    );
  }
}