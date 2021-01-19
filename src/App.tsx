import React from 'react';
import Header from './components/Header';
import AboutSection from './containers/AboutSection/AboutSection';
import SkillsSection from './containers/SkillsSection/SkillsSection';
import './styles/App.scss';

class App extends React.Component<any, any> {
  private myRef: any

  constructor(props: any) {
    super(props)
    this.myRef = React.createRef()
  }

  executeScroll = () => {
    this.myRef.current.scrollIntoView();
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
        <Header />
        <AboutSection executeScroll={this.executeScroll}/>
        <SkillsSection myRef={this.myRef}/>
        <SkillsSection />
      </body>
    )
  }
}

export default App
