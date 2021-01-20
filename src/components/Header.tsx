import React from 'react';
import Button from './Button';

class Header extends React.Component<any, any> {

  render() {
    return (
      <header className="site-header">
        <div className="header-wrapper">
          <h1>Henry Shen</h1>
          <div className="header-navbar">
            <Button 
              hover
              onClick={() => this.props.executeScroll(this.props.aboutRef)}
            >
              <b>ABOUT</b>
            </Button>
            <Button 
              hover
              onClick={() => this.props.executeScroll(this.props.skillsRef)}
            >
              <b>SKILLS &amp; EXPERIENCE</b>
            </Button>
            <Button hover>
              <b>PROJECTS</b>
            </Button>
          </div>
        </div>
      </header>

    )
  }
}

export default Header