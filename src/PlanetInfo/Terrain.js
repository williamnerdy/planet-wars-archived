import React, { Component } from 'react';
import './Terrain.css';

class Terrain extends Component {
  render() {
    return (
      <div className="App-info">Terrain: {this.props.name}</div>
    );
  }
}

export default Terrain;
