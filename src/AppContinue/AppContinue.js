import React, { Component } from 'react';
import './AppContinue.css';

class AppContinue extends Component {
  render() {
    return (
      <button className="App-continue" onClick={() => this.props.onClick() }>NEXT</button>
    );
  }
}

export default AppContinue;
