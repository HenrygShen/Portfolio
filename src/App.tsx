import React from 'react';
import Header from './components/Header';
import AboutSection from './containers/AboutSection/AboutSection';
import SkillsSection from './containers/SkillsSection/SkillsSection';
import './styles/App.scss';

class App extends React.Component<any, any> {
  
  render() {
    return (
      <div className="app-container">
        <Header />
        <AboutSection />
        {/* <SkillsSection /> */}
      </div>
    )
  }
}

export default App
