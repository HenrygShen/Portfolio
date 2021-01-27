import React from 'react';
import ProjectSnapshot from '../../components/ProjectSnapshot'
import projects from './projectList'

class ProjectsSection extends React.Component<any, any> {

  render() {
    return (
      <div className="projects-container hidden" ref={this.props.myRef}>
        <h2>Projects</h2>
        {projects.map((project) => (
          <ProjectSnapshot project={project} />
        ))}
      </div>
    )
  }
}

export default ProjectsSection