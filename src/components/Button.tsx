import cx from 'classnames'
import React from 'react';

class Button extends React.Component<{ children : any }, any> {

  render() {
    return (
      <div className={cx({
        "button-container": true,
        "hover": true
      })}>
        {this.props.children}
      </div>
    )
  }
}

export default Button