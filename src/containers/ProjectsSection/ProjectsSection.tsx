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

  updateHrefOnClick = (ref: any, isAdd: boolean) => {
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

    ref.current?.setAttribute("href", `#${projects[index].id}`)
  }

  render() {
    return (
      <div className="projects-container hidden">
        <div ref={this.props.myRef}>
          <h1>Projects</h1>
        </div>
        <div className="slider">
          <div className="slides">
            {projects.map((project) => (
              <ProjectSnapshot project={project} />
            ))}
          </div>
        </div>
        <div className="carousel-button-container">
          {
            <a ref={this.state.prevButtonRef} href="#hash">
              <Button 
                hover 
                bordered 
                onClick={() => this.updateHrefOnClick(this.state.prevButtonRef, false)}
                overrideStyles={{ padding: "1rem", fontSize: "18px", margin:"0 1rem 0 0" }}
              >
                Back
              </Button>
            </a>
          }
          {
            <a ref={this.state.nextButtonRef} href="#hash">
              <Button 
                hover 
                bordered 
                onClick={() => this.updateHrefOnClick(this.state.nextButtonRef, true)}
                overrideStyles={{ padding: "1rem", fontSize: "18px", margin:"0 0 0 1rem" }}
              >
                Next
              </Button>
            </a>
          }
        </div>
      </div>
    )
  }
}

export default ProjectsSection