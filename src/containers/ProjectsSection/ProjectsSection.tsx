import React from 'react';
import ProjectSnapshot from '../../components/ProjectSnapshot'
import projects from './projectList'

class ProjectsSection extends React.Component<any, any> {

  render() {
    return (
      <div className="projects-container hidden">
        <div ref={this.props.myRef}>
          <h1>Projects</h1>
        </div>
        
        {projects.map((project) => (
          <ProjectSnapshot project={project} />
        ))}
      </div>
    )
  }
}

export default ProjectsSection