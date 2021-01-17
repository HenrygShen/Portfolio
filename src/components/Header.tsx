import React from 'react';
import Button from './Button';

class Header extends React.Component<any, any> {

  render() {
    return (
      <header className="site-header">
        <div className="header-wrapper">
          <h2>Henry Shen</h2>
          <div className="header-navbar">
            <Button>
              <b>ABOUT</b>
            </Button>
            <Button>
              <b>SKILLS &amp; EXPERIENCE</b>
            </Button>
            <Button>
              <b>PROJECTS</b>
            </Button>
          </div>
        </div>
      </header>

    )
  }
}

export default Header