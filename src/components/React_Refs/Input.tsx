import { ChangeEvent, Component, createRef, LegacyRef, RefObject } from 'react';

interface IProps {
  type?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

class Input extends Component<IProps> {
  private inputRef = createRef<HTMLInputElement>();

  focusInput = () => {
    this.inputRef.current?.focus();
  }

  // All methods defined inside this class component will be accessible. though refs
  doSomeCalc = (): number => {
    console.log(5+ 5);
    return 5+ 5
  } 

  render() {
    return (
      <input
        type={this.props.type || 'text'}
        ref={this.inputRef}
        value={this.props.value}
        onChange={this.props.onChange}
      />
    );
  }
}

export default Input