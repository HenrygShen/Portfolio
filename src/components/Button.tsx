import cx from 'classnames'
import React from 'react'
import { IButtonProps } from './IButtonProps'

class Button extends React.Component<IButtonProps, any> {

  render() {
    return (
      <div 
        className={cx({
          "button-container": true,
          "hover": this.props.hover,
          "bordered": this.props.bordered
        })}
        style={{ color: this.props.color, ...this.props.overrideStyles }}
        onClick={this.props.onClick}
      >
        {this.props.children}
      </div>
    )
  }
}

export default Button