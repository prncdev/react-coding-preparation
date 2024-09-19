import { Component, ReactNode } from "react";
import { Consumer } from "../Context/userContext";

class ComponentF extends Component {
  render(): ReactNode {
    return (
      <Consumer>
        {
          ({name, age, email}) => (
            <div>
              ComponentF
              {' '+ name + ' ' + email}
            </div>
          )
        }
      </Consumer>
    )
  }
}

export default ComponentF;