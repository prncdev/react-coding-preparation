import React, { Component, createRef } from 'react'
import Input from './Input';

class FocusInput extends Component {
  protected componentRef = createRef<any>();

  handleFocusInput = () => {
    console.log(this.componentRef);
    this.componentRef.current?.focusInput();
  }

  render() {
    return (
      <div>
        <Input type='text'/> <br />
        <Input
          type='password'
          ref={this.componentRef}
        />
        <button onClick={this.handleFocusInput}>Show Password</button>

      </div>
    )
  }
}

export default FocusInput