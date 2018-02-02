import React, { Component } from 'react';
import './PlanetName.css';

class PlanetName extends Component {
  render() {
    return (
      <header className="App-header">{this.props.name}</header>
    );
  }
}

export default PlanetName;
