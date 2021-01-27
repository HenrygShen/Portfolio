import React from 'react'

class ProjectSnapshot extends React.Component<any, any> {
  state = {
    showDescription: false
  }

  toggleDescription() {
    this.setState({showDescription: !this.state.showDescription})
  }

  render() {
    return (
      <div className="snapshot-container">
        <h3>{this.props.project.name}</h3>
        <div className="bottom-project-wrapper">
          <img 
            alt="thumbnail" 
            src={require(`../assets/thumbnails/${this.props.project.thumbnail}`)} 
            className="project-picture"
            onClick={() => this.toggleDescription()}
          />
          <div className="project-text">
            {
              this.state.showDescription ? 
              this.props.project.descriptions.map((description: string) => (
                <span>{description}</span>
              )) :
              <span>{this.props.project.brief}</span>
            }
          </div>
          
        </div>
      </div>
    )
  }
}

export default ProjectSnapshot