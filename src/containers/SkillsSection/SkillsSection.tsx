import React from 'react';
import ExperienceBar from '../../components/ExperienceBar';
import skills from './skills';

class SkillsSection extends React.Component<any, any> {

  render() {
    return (
      <div className="skills-page-container hidden" ref={this.props.myRef}>
        <div className="skills-and-exp-wrapper">
          <div className="experience-wrapper">
            <h1>Work Experience</h1>
            <div className="experience-content">
              <span><span style={{ color: "#d43b3be1" }}>Enghouse Interactive:</span> 2018 - 2019</span>
              <span><span style={{ color: "#d43b3be1" }}>Internship:</span> 3 months</span>
              <span>Worked on a project which would track callers and frequency of calls that would be used in the company.</span>
              <span>Also was tasked with migrating the existing legacy documentation build to a virtual machine, while also fixing any of the errors and bugs that occurred in the process.</span>

              <span style={{ paddingTop: "2rem" }}><span style={{ color: "#d43b3be1" }}>Perpetual Guardian:</span> 2019 - 2020</span>
              <span><span style={{ color: "#d43b3be1" }}>Internship:</span> 6 months</span>
              <span>Worked as a junior programmer, helping with tasks related to the data and websites which were being developed and maintained by the company.</span>
              <span>During my time here, I was introduced to Selenium testing and Azure DevOps and spent most of my time working on various backend tasks.</span>
            </div>
          </div>
          <div>
            <h1>Skills</h1>
            {skills.map((skill, index) => (
                <ExperienceBar key={index} skillName={skill[0]} skillPercentage={skill[1]} />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default SkillsSection