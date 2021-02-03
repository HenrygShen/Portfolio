import React from 'react';
import ExperienceBar from '../../components/ExperienceBar';
import skills from './skills';

class SkillsSection extends React.Component<any, any> {

  render() {
    return (
      <div className="skills-page-container hidden" ref={this.props.myRef}>
        <div className="skills-wrapper">
          <div>
            <h1>Work Experience</h1>
            <div className="experience-content">
              <span>Enghouse Interactive: 2018 - 2019</span>
              <span>Internship: 3 months</span>
              <span>Worked on a project which would track callers and frequency of calls </span>
              <span>that would be used in the company.</span>
              <span>Also was tasked with migrating the existing legacy documentation build </span>
              <span>to a virtual machine, while also fixing any of the errors and bugs that </span>
              <span>occurred in the process.</span>

              <span style={{ paddingTop: "2rem" }}>Perpetual Guardian: 2019 - 2020</span>
              <span>Internship: 6 months</span>
              <span>Worked as a junior programmer, helping with tasks related to the data</span>
              <span>and websites which were being developed and maintained by the company.</span>
              <span>During my time here, I was introduced to Selenium testing and Azure </span>
              <span>DevOps and spent most of my time working on various backend tasks.</span>
            </div>
          </div>
          <div>
            <h1>Skills</h1>
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