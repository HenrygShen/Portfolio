import cx from 'classnames'
import { COPYFILE_EXCL } from 'constants'
import React from 'react'

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
      <div className="snapshot-container">
        <h3>{this.props.project.name}</h3>
        <div className="bottom-project-wrapper">
          <img 
            id="picture"
            alt="thumbnail" 
            src={require(`../assets/thumbnails/${this.state.imgsrc}`)} 
            className={cx({
              "project-picture hover": true,
              "portrait": this.props.project.portrait
            })}
            onMouseEnter={() => this.setState({timerInterval: setInterval(this.carousel, 1000)})}
            onMouseLeave={() => this.resetImage()}
          />
          <div className="project-text">
            {
              this.props.project.descriptions.map((description: string) => (
                <span>{description}</span>
              ))
            }
          </div>
          
        </div>
      </div>
    )
  }
}

export default ProjectSnapshot