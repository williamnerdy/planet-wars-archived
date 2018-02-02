import React, { Component } from 'react';
import './Featured.css';

class Featured extends Component {
  render() {
    return (
      <div className="App-info">Featured in {this.props.quantity} film{this.props.quantity !== 1 ? 's' : ''}</div>
    );
  }
}

export default Featured;
