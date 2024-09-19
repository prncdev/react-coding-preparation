import { PureComponent } from 'react';

class PureComp extends PureComponent<{name: string}> {
  render() {
    console.log('Pure child component');
    return (
      <div>
        {this.props.name}
      </div>
    )
  }
}
export default PureComp;