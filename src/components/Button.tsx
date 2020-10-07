import React from 'react';

class Button extends React.Component<{ children : any }, any> {

  render() {
    return (
      <div className="button-container">
        {this.props.children}
      </div>
    )
  }
}

export default Button