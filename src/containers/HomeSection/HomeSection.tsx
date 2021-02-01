import React from 'react';
import Button from '../../components/Button';

class HomeSection extends React.Component<any, any> {

  render() {
    return (
      <div className="home-container">
        <span>I'm Henry.</span>
        <span>Situated in New Zealand.</span>
        <span>Software developer &amp; casual baker.</span>
        <div className="home-link-wrapper">
          <Button
            bordered
            hover
            overrideStyles={{ padding: "1rem", fontSize: "25px"}}
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