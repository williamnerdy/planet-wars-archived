import React, { Component } from 'react';
import './Loading.css';

class Loading extends Component {
  render() {
    return (
      <div className="Centralizer">
        <img src="/logo.png" alt="Planet Wars"/>
        <div className="Loading"></div>
      </div>
    );
  }
}

export default Loading;
