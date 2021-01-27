import React from 'react';
import Header from './components/Header';
import AboutSection from './containers/AboutSection/AboutSection';
import HomeSection from './containers/HomeSection/HomeSection';
import ProjectsSection from './containers/ProjectsSection/ProjectsSection';
import SkillsSection from './containers/SkillsSection/SkillsSection';
import './styles/App.scss';

class App extends React.Component<any, any> {
  private aboutRef: any
  private skillsRef: any
  private projectsRef: any

  constructor(props: any) {
    super(props)
    this.aboutRef = React.createRef()
    this.skillsRef = React.createRef()
    this.projectsRef = React.createRef()
  }

  executeScroll = (ref: any) => {
    ref.current.scrollIntoView();
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
        var positionFromTop = elements[i].getBoundingClientRect().top;
  
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
    this.animateHTML().init();
  }

  render() {
    return (
      <body className="app-container">
        <Header executeScroll={this.executeScroll} aboutRef={this.aboutRef} skillsRef={this.skillsRef} projectsRef={this.projectsRef} />
        <HomeSection executeScroll={this.executeScroll} refToScrollTo={this.aboutRef} />
        <AboutSection myRef={this.aboutRef} />
        <SkillsSection myRef={this.skillsRef} />
        <ProjectsSection myRef={this.projectsRef} />
      </body>
    )
  }
}

export default App
