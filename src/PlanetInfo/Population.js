import React, { Component } from 'react';
import './Population.css';

class Featured extends Component {
  render() {
    return (
      <div className="App-info">Population: {this.props.quantity}</div>
    );
  }
}

export default Featured;
