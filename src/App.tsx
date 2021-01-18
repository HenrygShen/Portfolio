import React, { useRef } from 'react';
import Header from './components/Header';
import AboutSection from './containers/AboutSection/AboutSection';
import SkillsSection from './containers/SkillsSection/SkillsSection';
import './styles/App.scss';

class App extends React.Component<any, any> {
  private myRef: any;

  constructor(props: any) {
    super(props);
    this.myRef = React.createRef()
  }

  executeScroll = () => {
    this.myRef.current.scrollIntoView();
  }

  render() {
    return (
      <div className="app-container">
        <Header />
        <AboutSection executeScroll={this.executeScroll}/>
        <SkillsSection myRef={this.myRef}/>
      </div>
    )
  }
}

export default App
