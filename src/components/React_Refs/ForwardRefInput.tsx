import React, { Component } from 'react';

// const ForwardRefInput = React.forwardRef(function (props, ref: any) {
//   return (
//     <input type="text" ref={ref}/>
//   )
// });

class ForwardRefInput extends Component<{forwardedRef: any}> {
  
  rander(): React.ReactNode {
    return (
      <input type="text" ref={this.props?.forwardedRef} />
    )
  }
}

const ForwardedInput = React.forwardRef((props, ref) => <ForwardRefInput {...props} forwardedRef={ref} />);

export default ForwardedInput