import React, { Component } from 'react';
import './AppContainer.css';
import Loading from '../Loading/Loading';
import PlanetName from '../PlanetName/PlanetName';
import Terrain from '../PlanetInfo/Terrain';
import Population from '../PlanetInfo/Population';
import Featured from '../PlanetInfo/Featured';
import Climate from '../PlanetInfo/Climate';
import AppContinue from '../AppContinue/AppContinue';

class AppContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      isLoaded: false,
      planet: null
    };

    // Planets to show
    this.planets = [];

    // CurrentPlanet
    this.current = 0;

    // Insert planets on list
    for (var p = 1; p <= this.props.count; p++) {
      this.planets.push(p);
    }

    // Shuffle array
    this.planets = this.planets.map(
      (a) => [Math.random(), a]).sort((a, b) => a[0] - b[0]).map((a) => a[1]
    );

    // Load frist planet
    this.loadData();

    // This binding is necessary to make `this` work in the callback
    this.gotoNext = this.gotoNext.bind(this);
  }

  loadData() {
    var currentNumber = this.planets[this.current];

    fetch(`https://swapi.co/api/planets/${currentNumber}`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            planet: result
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

  gotoNext() {
    this.current = Math.min(this.current + 1, this.props.count - 1);
    this.setState({ isLoaded: false });
    this.loadData();
  }

  render() {
    const { error, isLoaded, planet } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <Loading />;
    } else {
      return (
        <div className="Centralizer">
          <div className="App-container">
            <PlanetName name={planet.name} />
            <div className="App-body">
              <Population quantity={planet.population} />
              <Climate name={planet.climate} />
              <Terrain name={planet.terrain} />
              <Featured quantity={planet.films.length} />
            </div>
          </div>
          <AppContinue onClick={this.gotoNext} />
        </div>
      );
    }
  }
}

export default AppContainer;
