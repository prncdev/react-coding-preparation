import React, { Component } from 'react'

export class HeroName extends Component<{homeName: string}> {
  render() {
    if(this.props.homeName.toLocaleLowerCase() === 'joker' || this.props.homeName.toLocaleLowerCase() === 'badman') {
      throw new Error('Not a Hero');
    }
    
    return (
      <div>
        {this.props.homeName}
      </div>
    )
  }
}

export default HeroName;