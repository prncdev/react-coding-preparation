import React, { ChangeEventHandler, Component } from 'react';

interface RefTypes {
  // current: HTMLElement | null;
  ref: HTMLElement | null;
}

class RefDemo extends Component {
  // protected divTag: React.RefObject<HTMLDivElement> = React.createRef();
  // protected divTag: RefTypes = { current: null }; // working expectedly.
  private divTag: HTMLDivElement | null = null;
  private inputRef: React.RefObject<HTMLInputElement> = React.createRef();

  // Using callback refs.
  private sectionRef: HTMLSelectElement | null = null;

  state = {
    name: ''
  }

  handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    this.setState({name: event?.target.value});
    console.log(this.inputRef.current?.value);
  }

  assignRefToSection = (ref: HTMLSelectElement) => {
    this.sectionRef = ref;
  }
  
  componentDidMount(): void {
    // console.log('div\'s Ref',this.divTag);
    // console.log('input\'s Ref',this.inputRef);
    this.inputRef.current?.focus();
    console.log(this.divTag?.parentElement);
    console.log(this.sectionRef?.textContent);
  }

  render(): React.ReactNode {
    return (
      <>
      <input type="text" ref={this.inputRef} value={this.state.name} onChange={this.handleChange} />
        <div ref={(ref) => this.divTag = ref /* This returns DOM actual Node*/}>
        {/* <div ref={console.log}> */}
          hello
        </div>
        <section ref={this.assignRefToSection}>
          Section Element
        </section>
      </>
    )
  }
}

export default RefDemo;