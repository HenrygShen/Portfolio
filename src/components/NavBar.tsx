import React from 'react';
import Button from './Button';

class NavBar extends React.Component<any, any> {

  render() {
    return (
      <div className="navbar-container">
        <Button>
          <b>ABOUT</b>
        </Button>
        <Button>
          <b>SKILLS</b>
        </Button>
        <Button>
          <b>EXPERIENCE</b>
        </Button>
        <Button>
          <b>PROJECTS</b>
        </Button>
      </div>
    )
  }
}

export default NavBar