import React from 'react';

class AboutSection extends React.Component<any, any> {

  render() {
    return (
      <div className="about-container hidden" ref={this.props.myRef}>
        <h1>About Me</h1>
        <div className="about-text-wrapper">
          <span className="about-text-spacing">I studied Computer Systems Engineering at the University of Auckland and I am scheduled to graduate in the June of 2021.</span>
          <span className="about-text-spacing">I have an interest in all aspects of software development and love to learn new things. However, most recently I have been into web development which is what I did as an intern at Perpetual Guardian.</span>
          <span className="about-text-spacing">In my free time, I will often be pursuing a new personal project or baking a new recipe which caught my interest. When I am not doing that, I like to relax while playing video games with my friends.</span>
        </div>

      </div>
    )
  }
}

export default AboutSection