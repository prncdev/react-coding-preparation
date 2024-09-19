import React, { Component } from 'react'
import ForwardRefInput from './ForwardRefInput';

class ForwardRefParent extends Component {
  private inputRef: React.RefObject<HTMLInputElement> = React.createRef();

  handleFocus = () => {
    this.inputRef.current?.focus();
  }
  render() {
    return (
      <div>
        <ForwardRefInput ref={this.inputRef}/>
        <button onClick={this.handleFocus}>Focus to Forwarded Input Ref</button>
      </div>
    )
  }
}

export default ForwardRefParent;