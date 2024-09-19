import { ChangeEvent, ChangeEventHandler, Component, ReactNode } from "react";

interface IState {
  profile: {
    firstName: string;
    lastName: string;
  };
}

class NestedStateValue extends Component<{}, IState> {
  constructor(props: any) {
    super(props);

    // Maintaining state objects separately.
    // this.state = {
    //   firstName: '',
    //   lastName: ''
    // }

    // Maintaining nested state object.
    this.state = {
      profile: {
        firstName: '',
        lastName: ''
      }
    }

    // this.handleInput = this.handleInput.bind(this);
    this.handleLastName = this.handleLastName.bind(this);
    this.handleFirstName = this.handleFirstName.bind(this);
  }


  // Handling individual state variable.
  // handleFirstName(event: ChangeEvent<HTMLInputElement>) {
  //   this.setState({ firstName: event.target.value });
  // }

  // Handling individual state variable.
  // handleLastName(event: ChangeEvent<HTMLInputElement>) {
  //   this.setState({ lastName: event.target.value });
  // }

  // Handling grouped or nested state object value.
  handleFirstName(event: ChangeEvent<HTMLInputElement>) {
    this.setState((prevState) => ({
      ...prevState,

      profile: {
        ...prevState.profile,

        firstName: event.target.value
      }
    }));
  }

  // Handling grouped or nested state object value.
  handleLastName(event: ChangeEvent<HTMLInputElement>) {
    this.setState(prevState => ({
      // This below statement means extract everything from the current state object and put it here. Like keys andd their current value before updating.
      ...prevState,

      // This is another object in the state object.
      profile: {
        // We are now in the scope of the profile object.
        // Similarly here, there could more keys and their appropriate values would go here.
        ...prevState.profile,

        // Update the desire key's value.
        lastName: event.target.value,
      }
    }));
  }


  render(): ReactNode {
    return (
      <>
        <input
          type="text"
          onChange={this.handleFirstName}
          value={this.state.profile.firstName}
        />

        <input
          type="text"
          onChange={this.handleLastName}
          value={this.state.profile.lastName}
        />

        <h2>FirstName {this.state.profile.firstName}</h2>
        <h2>LastName {this.state.profile.lastName}</h2>
        {JSON.stringify(this.state)}
      </>
    )
  }
}

export default NestedStateValue;