import React from 'react';
import Button from '../../components/Button';
import ProjectSnapshot from '../../components/ProjectSnapshot'
import projects from './projectList'

class ProjectsSection extends React.Component<any, any> {
  state =  {
    nextButtonRef: React.createRef<HTMLAnchorElement>(),
    prevButtonRef: React.createRef<HTMLAnchorElement>(),
    carouselIndex: 0
  }

  componentDidMount () {
    this.removeHash()
  }

  removeHash () {
    const loc = window.location
    const hist = window.history

    if (hist && 'pushState' in hist) {
      hist.replaceState('', document.title, loc.pathname + loc.search)
    } 
  }

  executeScroll = (isAdd: boolean) => {
    let index = 0
    
    if (isAdd){
      if (this.state.carouselIndex + 1 >= projects.length) {
        index = 0
      }
      else {
        index = this.state.carouselIndex + 1
      }
    }
    else{
      if (this.state.carouselIndex - 1 < 0) {
        index = projects.length - 1
      }
      else {
        index = this.state.carouselIndex - 1
      }
    }

    this.setState ({
      carouselIndex: index
    })

    var elementToScrollTo = document.getElementById(projects[index].id)
    var carouselElement = document.getElementById("slides")

    if (elementToScrollTo && carouselElement) {
      var elementPosition = elementToScrollTo.offsetLeft
      carouselElement.scrollLeft = elementPosition
    }
  }

  render() {
    return (
      <div className="projects-container hidden">
        <div ref={this.props.myRef}>
          <h1>Projects</h1>
        </div>
        <div className="slider">
          <div id="slides" className="slides">
            {projects.map((project, index) => (
              <ProjectSnapshot key={index} project={project} />
            ))}
          </div>
        </div>
        <div className="carousel-button-container">
          {
              <Button 
                highlight 
                bordered 
                onClick={() => this.executeScroll(false)}
                overrideStyles={{ padding: "1rem", fontSize: "18px", margin:"0 1rem 0 0" }}
              >
                Back
              </Button>
          }
          {
              <Button 
                highlight
                bordered 
                onClick={() => this.executeScroll(true)}
                overrideStyles={{ padding: "1rem", fontSize: "18px", margin:"0 0 0 1rem" }}
              >
                Next
              </Button>
          }
        </div>
      </div>
    )
  }
}

export default ProjectsSection