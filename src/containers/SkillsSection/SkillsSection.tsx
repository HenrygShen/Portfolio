import React from 'react';
import skills from './skills';

class SkillsSection extends React.Component<any, any> {

  render() {
    return (
      <div className="skills-container hidden" ref={this.props.myRef}>
        <h2>Skills</h2>
        <p>This is where I would put my Skills</p>
        <h3>Programming Languages</h3>
        <div className="languages-list-wrapper">
          <ul className="languages-list">
            <li>Python</li>
            <li>C++</li>
            <li>C#</li>
            <li>Java</li>
            <li>JavaScript</li>
          </ul>
          <ul className="languages-list">
            <li className="bar"><div className="filled-bar" /><div className="unfilled-bar" /></li>
            <li className="bar"><div className="filled-bar" /><div className="unfilled-bar" /></li>
            <li className="bar"><div className="filled-bar" /><div className="unfilled-bar" /></li>
            <li className="bar"><div className="filled-bar" /><div className="unfilled-bar" /></li>
            <li className="bar"><div className="filled-bar" /><div className="unfilled-bar" /></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default SkillsSection