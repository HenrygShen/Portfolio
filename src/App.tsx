import React from 'react';
import NavBar from './components/NavBar';
import SkillsSection from './containers/SkillsSection/SkillsSection';
import './styles/App.scss';

class App extends React.Component<any, any> {
  
  render() {
    return (
      <div className="app-container">
        <h1>Henry Shen</h1>
        <p>An aspiring software developer and casual baker.</p>
        <NavBar/>
        <SkillsSection/>
      </div>
    )
  }
}

export default App
