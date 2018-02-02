import React, { Component } from 'react';
import './Climate.css';

class Climate extends Component {
  render() {
    return (
      <div className="App-info">Climate: {this.props.name}</div>
    );
  }
}

export default Climate;
