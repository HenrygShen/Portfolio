import React from 'react';
import Button from '../../components/Button';

class AboutSection extends React.Component<any, any> {

  render() {
    return (
      <div className="about-container">
        <span>I'm Henry.</span>
        <span>Proud New Zealander.</span>
        <span>Software developer &amp; casual baker.</span>
        <div className="about-link-wrapper">
          <Button
            bordered
            hover
            overrideStyles={{ padding: "1rem", fontSize: "25px"}}
          >
            More about me
          </Button>
        </div>
        
      </div>
    )
  }
}

export default AboutSection