import React from 'react';
import Header from './components/Header';
import AboutSection from './containers/AboutSection/AboutSection';
import HomeSection from './containers/HomeSection/HomeSection';
import ProjectsSection from './containers/ProjectsSection/ProjectsSection';
import SkillsSection from './containers/SkillsSection/SkillsSection';
import './styles/App.scss';

class App extends React.Component<any, any> {
  state = {
    aboutRef: React.createRef(),
    skillsRef: React.createRef(),
    projectsRef: React.createRef()
  }

  executeScroll = (ref: any) => {
    var elementPosition = ref.current.getBoundingClientRect().top
    var offsetPosition = elementPosition + window.pageYOffset - 75

    window.scrollTo({
         top: offsetPosition,
         behavior: "smooth"
    });
  }

  animateHTML() {
    var elements: any
    var windowHeight: number

    function init() {
      elements = document.querySelectorAll('.hidden')
      windowHeight = window.innerHeight
      addEventHandlers()
      checkPosition()
    }

    function addEventHandlers() {
      window.addEventListener('scroll', checkPosition)
      window.addEventListener('resize', init)
    }
  
    function checkPosition() {
      for (var i = 0; i < elements.length; i++) {
        var positionFromTop = elements[i].getBoundingClientRect().top
  
        if (positionFromTop - windowHeight <= 0) {
          elements[i].className = elements[i].className.replace('hidden', 'fade-in-element')
        }
      }
    }

    return{
      init: init
    }
  }

  componentDidMount() {
    this.animateHTML().init()
  }

  render() {
    let { aboutRef, skillsRef, projectsRef } = this.state

    return (
      <div className="app-container">
        <Header executeScroll={this.executeScroll} aboutRef={aboutRef} skillsRef={skillsRef} projectsRef={projectsRef} />
        <HomeSection executeScroll={this.executeScroll} refToScrollTo={aboutRef} />
        <AboutSection myRef={aboutRef} />
        <SkillsSection myRef={skillsRef} />
        <ProjectsSection myRef={projectsRef} />
      </div>
    )
  }
}

export default App
