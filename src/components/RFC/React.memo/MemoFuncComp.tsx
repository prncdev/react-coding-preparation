import React, { Component, memo } from 'react';

// const MemoFuncComp: React.FC<{name: string}> = function({ name }) {
//   console.log('Memo (HOC) functional component');
//   return (
//     <div>{name}</div>
//   )
// }

// The memo Higher-order component also be used with class components.
class MemoFuncComp extends Component<{name: string}> {
  state = {
    name: this.props.name,
    counter: 0,
  }

  componentDidMount(): void {
    // setInterval(() => {
    //   this.setState({counter: 0});
    // }, 2000)
  }
  
  render(): React.ReactNode {
    console.log('Memo (HOC) class component');
    return (
      <div>{this.state.name}</div>
    )
  }
}

export default memo(MemoFuncComp);