import React from 'react'

class ProjectSnapshot extends React.Component<any, any> {

  render() {
    return (
      <div className="snapshot-container">
        <h3>{this.props.project.name}</h3>
        <div className="bottom-project-wrapper">
          <img alt="thumbnail" src={require(`../assets/thumbnails/${this.props.project.thumbnail}`)} width="200" height="200"/>
          <span>{this.props.project.descriptions[0]}</span>
        </div>
        
        
      </div>
    )
  }
}

export default ProjectSnapshot