import React, { Component } from 'react'

class FallBackUI extends Component<{children?: React.ReactNode}> {
  state = {
    hasError: false
  }

  // We can use either of them.

  
  // static getDerivedStateFromError(error: Error) {
  //   // We can also display error message in here.
  //   console.log(error);
  //   return { hasError: true };
  // }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.log(error);
    console.log(errorInfo);
    this.setState({hasError: true });
  }

  render(): React.ReactNode {
    if(this.state.hasError) {
      return <h2>Something fucked up. here is your Fallback UI</h2>
    }
    return (
      this.props.children
    )
  }
}

export default FallBackUI