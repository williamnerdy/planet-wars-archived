import React, { Component } from 'react';
import './Loading.css';

class Loading extends Component {
  render() {
    return (
      <div className="Centralizer">
        <img src="/logo.png"/>
        <div className="Loading" alt="Planet Wars"></div>
      </div>
    );
  }
}

export default Loading;
