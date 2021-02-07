import React from 'react';
import Button from '../../components/Button';
import EmailLogo from '../../components/svgs/EmailLogo';
import GithubLogo from '../../components/svgs/GithubLogo';
import LinkedinLogo from '../../components/svgs/LinkedinLogo';

class HomeSection extends React.Component<any, any> {

  render() {
    return (
      <div className="home-container">
        <span>I'm Henry.</span>
        <span>Situated in New Zealand.</span>
        <span>Software developer &amp; casual baker.</span>
        <div className="logo-links">
          <div className="logo">
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/henry-shen-868a4b174/">
              <LinkedinLogo />
            </a>
          </div>
          <div className="logo">
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/HenrygShen">
              <GithubLogo />
            </a>
          </div>
          <div className="logo">
            <a href="mailto:hgshen@outlook.com">
              <EmailLogo />
            </a>
          </div>
        </div>
        
        <div className="home-link-wrapper">
          <Button
            bordered
            highlight
            overrideStyles={{ padding: "1rem", fontSize: "18px" }}
            onClick={() => this.props.executeScroll(this.props.refToScrollTo)}
          >
            More about me
          </Button>
        </div>
      </div>
    )
  }
}

export default HomeSection