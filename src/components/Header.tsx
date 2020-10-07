import React from 'react';
import Button from './Button';

class Header extends React.Component<any, any> {

  render() {
    return (
      <div className="header-container">
        <Button>
          About me
        </Button>
        <Button>
          Education
        </Button>
        <Button>
          Experience
        </Button>
        <Button>
          Projects
        </Button>
      </div>
    )
  }
}

export default Header