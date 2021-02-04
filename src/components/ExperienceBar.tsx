import React from 'react'
import { IExperienceBarProps } from './IExperienceBarProps'

class ExperienceBar extends React.Component<IExperienceBarProps, any> {

  render() {
    return (
      <div className="experience-bar-container">
        <div className="skill-name">{this.props.skillName}</div>
        <div className="bar">
          <div className="filled-bar" style={{width: `${this.props.skillPercentage}%`}}/>
          <div className="unfilled-bar" style={{width: `${100 - this.props.skillPercentage}%`}}/>
        </div>
      </div>
    )
  }
}

export default ExperienceBar