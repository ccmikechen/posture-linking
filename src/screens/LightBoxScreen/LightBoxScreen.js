import React from 'react';
import LightBox from '../../containers/LightBox';

class LightBoxScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <LightBox navigator={this.props.title} onClose={this.props.onClose} />
    );
  }
}

export default LightBoxScreen;