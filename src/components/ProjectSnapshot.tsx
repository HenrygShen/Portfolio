import cx from 'classnames'
import React from 'react'
import Button from './Button'

class ProjectSnapshot extends React.Component<any, any> {
  state = {
    imgsrc: this.props.project.thumbnail,
    pictureIndex: 0,
    timerInterval: 0
  }

  carousel = () => {
    let nextPicIndex = this.state.pictureIndex + 1

    if (nextPicIndex >= this.props.project.screenshots.length) {
      nextPicIndex = 0
    }

    this.setState({
      imgsrc: this.props.project.screenshots[nextPicIndex],
      pictureIndex: nextPicIndex
    })
  }

  resetImage = () => {
    clearInterval(this.state.timerInterval)
    this.setState({
      imgsrc: this.props.project.thumbnail,
      pictureIndex: 0
    })
  }  

  render() {
    return (
      <div id={this.props.project.id} className="snapshot-container">
        <div className="snapshot-wrapper">
          <h3>{this.props.project.name}</h3>
          <div className="bottom-project-wrapper">
            <div className={cx({
              "image-and-description": true,
              "landscape": !this.props.project.portrait
            })}>
              <img 
                id="picture"
                alt="thumbnail" 
                src={require(`../assets/thumbnails/${this.state.imgsrc}`)} 
                className={cx({
                  "project-picture hover": true,
                  "portrait": this.props.project.portrait,
                })}
                onMouseEnter={() => this.setState({timerInterval: setInterval(this.carousel, 1000)})}
                onMouseLeave={() => this.resetImage()}
              />
              <div className="project-description">
                <ul>
                  {
                    this.props.project.techStack.map((tech: string, index: number) => (
                      <li key={index}>{tech}</li>
                    ))
                  }
                </ul>
                
                {
                  this.props.project.descriptions.map((description: string, index: number) => (
                    <span key={index}>{description}</span>
                  ))
                }
              </div>
            </div>
            
            <div className="project-links">
            {
                this.props.project.links.map((link: any, index: number) => (
                  <Button 
                    key={index}
                    highlight
                    bordered
                    overrideStyles={{ padding: "1rem 1.5rem 1rem 1.5rem", fontSize: "18px"}}
                    onClick={() => window.open(link.url)}
                  >
                    {link.name}
                  </Button>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProjectSnapshot