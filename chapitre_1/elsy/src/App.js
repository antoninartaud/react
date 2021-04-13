import React from 'react';
import './App.css';
import './styles/global.css';
import Box from './components/Box.jsx';

const tempMin = -20;
const tempMax = 40;
const heartMin = 80;
const heartMax = 180;
const stepsMin = 0;
const stepsMax = 50000;

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      water: 0,
      heart: 120,
      temperature: -10,
      steps: 3000,
    };

    this.onHeartChange = this.onHeartChange.bind(this);
    this.onStepsChange = this.onStepsChange.bind(this);
    this.onTemperatureChange = this.onTemperatureChange.bind(this);
    this.calculateWater = this.calculateWater.bind(this);
  }

  onHeartChange(e) {
    e.preventDefault();
    // console.log(e.target);
    this.setState({
      heart: e.target.value,
    });
  }

  onStepsChange(e) {
    e.preventDefault();
    // console.log(e.target);
    this.setState({
      steps: e.target.value,
    });
  }

  onTemperatureChange(e) {
    // console.log(e);
    e.preventDefault();
    this.setState({
      temperature: e.target.value,
    });
    calculateWater();
  }

  calculateWater() {
    this.setState({
      water: 1.5,
    });

    let minWater = 1.5;
    let levelTemp = this.state.temperature;
    let levelHeartBeat = this.state.heart;
    let levelSteps = this.state.steps;

    if (levelTemp > 20) {
      let tempSpread = levelTemp - 20;
      let waterSupply = tempSpread * 0.02;
      let levelWater = minWater + waterSupply;
      this.setState({
        eau: levelWater,
      });
    }
  }

  render() {
    return (
      <div className='container-fluid'>
        <div className='row'>
          {/* Water */}
          <Box
            icon='local_drink'
            color='#3A85FF'
            value={this.state.water}
            unit='L'
            onChange={this.calculateWater}
          />

          {/* Steps*/}
          <Box
            icon='directions_walk'
            color='black'
            value={this.state.steps}
            unit='steps'
            min={stepsMin}
            max={stepsMax}
            onChange={this.onStepsChange}
          />

          {/* Heart*/}
          <Box
            icon='favorite'
            color='red'
            value={this.state.heart}
            unit='bpm'
            min={heartMin}
            max={heartMax}
            onChange={this.onHeartChange}
          />

          {/* Temperature*/}
          <Box
            icon='wb_sunny'
            color='yellow'
            value={this.state.temperature}
            unit='°C'
            min={tempMin}
            max={tempMax}
            onChange={this.onTemperatureChange}
          />

          <p>Heart : {heartMin}</p>
          <p>Temperature : {tempMin}</p>
          <p>Steps: {stepsMin}</p>
        </div>
      </div>
    );
  }
}

export default App;
