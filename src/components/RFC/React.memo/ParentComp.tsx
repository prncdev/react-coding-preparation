import { Component } from 'react'
import RegularFuncComp from './RegularFuncComp';
import MemoFuncComp from './MemoFuncComp';

export default class ParentComp extends Component {
  state = {
    name: 'Prince'
  }

  updateName = () => {
    setInterval(() => {
      this.setState({name: 'Prince'});
    }, 2000);
  }

  componentDidMount(): void {
    // this.updateName();
  }

  render() {
    console.log('*******************Parent Component*******************');
    return (
      <div>
        <RegularFuncComp name={this.state.name} />
        <MemoFuncComp name={this.state.name} />
      </div>
    )
  }
}
