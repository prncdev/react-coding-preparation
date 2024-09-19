import { Component } from 'react';

class RegComp extends Component<{name: string}> {
  render() {
    console.log('Regular child component');
    return (
      <div>
        {this.props.name}
      </div>
    )
  }
}
export default RegComp;