import { Component } from 'react';
import PureComp from './PureComp';
import RegComp from './RegComp';

export default class ParentComp extends Component {
  state = {
    name: 'Anjali'
  };

  updateName = () => {
    setInterval(() => {
      this.setState({ name: 'Anjali' });
    }, 2000);
  };

  componentDidMount(): void {
    // this.updateName();
  }

  
  render() {
    console.log('***********************Regular Parent Component*******************');
    return (
      <div>
        <PureComp name={this.state.name} />
        <RegComp name={this.state.name}/>
      </div>
    )
  }
}