import { Component, ReactNode } from 'react';
import ReactDOM from 'react-dom';

// function PortalComponent() {
//   const portalRoot = document.querySelector('#portal-root');

//   if (!portalRoot) {
//     // Handle the null case, e.g., by rendering nothing or showing an error.
//     console.error('Portal root element not found');
//     return null;
//   }

//   return ReactDOM.createPortal(
//     <div>
//       <h2>This is the demonstration of createPortal of ReactDOM function.</h2>
//       <p>
//         <strong>Description</strong> {' '}
//         This element is rendering outside of root element of app component.
//       </p>
//     </div>,
//     portalRoot
//   );
// }
class PortalComponent extends Component {
  private portalRoot = document.querySelector('#portal-root');

  render(): ReactNode {
    if (!this.portalRoot) {
      // Handle the null case, e.g., by rendering nothing or showing an error.
      console.error('Portal root element not found');
      return null;
    }
    return ReactDOM.createPortal(
      <>
        <h2>This is the demonstration of createPortal of ReactDOM function.</h2>
        <p>
          <strong>Description</strong> {' '}
          This element is rendering outside of root element of app component.
        </p>
      </>,
      this.portalRoot
    );
  }
}

export default PortalComponent;