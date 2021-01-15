import React from 'react';

class SkillsSection extends React.Component<any, any> {

  render() {
    return (
      <div className="">
        <h2>Skills</h2>
        <p>This is where I would put my Skills</p>
        <h3>Programming Languages</h3>
        <div className="languages-list-wrapper">
          <ul className="languages-list">
            <li>C</li>
            <li>C++</li>
            <li>C#</li>
            <li>Java</li>
            <li>JavaScript</li>
          </ul>
          <ul className="languages-list">
            <li className="bar"><div className="filled-bar"></div></li>
            <li><div className="filled-bar"></div></li>
            <li><div className="filled-bar"></div></li>
            <li><div className="filled-bar"></div></li>
            <li><div className="filled-bar"></div></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default SkillsSection