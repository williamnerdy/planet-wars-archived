import React, { Component } from 'react';
import './App.css';
import Loading from '../Loading/Loading';
import AppContainer from '../AppContainer/AppContainer';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      isLoaded: false,
      count: null,
      playing: true
    };

    // This binding is necessary to make `this` work in the callback
    this.togglePlay = this.togglePlay.bind(this);
  }

  componentDidMount() {
    fetch("https://swapi.co/api/planets")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            count: result.count
          });
        },

        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  togglePlay() {
    if (this.audioTag.paused) {
      this.audioTag.play();
    } else {
      this.audioTag.pause();
    }

    this.setState({
      playing: !this.audioTag.paused
    });
  }

  render() {
    const { error, isLoaded, count, playing } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <Loading />;
    } else {
      var togglePlayClass = playing ? 'Playing' : 'Paused';

      return (
        <div className="App">
          <AppContainer count={count} />
          <audio ref={(audioTag) => { this.audioTag = audioTag; }} src="/imperial-march.mp3" loop autoPlay="true" />
          <button className={`Toggle-play ${togglePlayClass}`} onClick={this.togglePlay}></button>
        </div>
      );
    }
  }
}

export default App;