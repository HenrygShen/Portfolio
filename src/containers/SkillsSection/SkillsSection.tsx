import React from 'react';
import ExperienceBar from '../../components/ExperienceBar';
import skills from './skills';

class SkillsSection extends React.Component<any, any> {

  render() {
    return (
      <div className="skills-container hidden" ref={this.props.myRef}>
        <div>
          <h2>Work Experience</h2>
          <div className="work-experience-container">
            <span>Enghouse Interactive: 2018 - 2019</span>
            <span>Internship: 3 months</span>
            <span>Worked on a project which would track callers and frequency of calls that would be used in</span>
            <span>the company.</span>
            <span>Also was tasked with migrating the existing legacy documentation build to a virtual machine,</span>
            <span>while also fixing any of the errors and bugs that occurred in the process.</span>

            <span style={{ paddingTop: "2rem" }}>Perpetual Guardian: 2019 - 2020</span>
            <span>Internship: 6 months</span>
            <span>Worked as a junior programmer, helping with tasks related to the data and websites which </span>
            <span>were being developed and maintained by the company. During my time here, I was introduced</span>
            <span>to Selenium testing and Azure DevOps and spent most of my time working on various</span>
            <span>backend tasks.</span>
          </div>
        </div>
        <div>
          <h2>Skills</h2>
          <div className="languages-list-wrapper">
            {skills.map(skill => (
                <ExperienceBar skillName={skill[0]} skillPercentage={skill[1]} />
            ))}
          </div>
        </div>
        
      </div>
    )
  }
}

export default SkillsSection