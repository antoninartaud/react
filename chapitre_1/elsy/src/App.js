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
      water: 1.5,
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
    this.calculateWater();
  }

  onStepsChange(e) {
    e.preventDefault();
    // console.log(e.target);
    this.setState({
      steps: e.target.value,
    });
    this.calculateWater();
  }

  onTemperatureChange(e) {
    // console.log(e);
    e.preventDefault();
    this.setState({
      temperature: e.target.value,
    });
    this.calculateWater();
  }

  calculateWater() {
    let waterNeeds = 1.5;

    let { heart, temperature, steps } = this.state;

    if (temperature > 20) {
      waterNeeds += (temperature - 20) * 0.02;

      console.log(waterNeeds);
    }

    if (heart > 120) {
      waterNeeds += (heart - 120) * 0.0008;
    }

    if (steps > 10000) {
      waterNeeds += (steps - 10000) * 0.00002;
    }

    waterNeeds = parseFloat(waterNeeds.toFixed(2));

    this.setState({
      water: waterNeeds,
    });
  }

  render() {
    console.log('water', this.state.water);

    return (
      <div className='container-fluid'>
        <div className='row'>
          {/* Water */}
          <Box
            icon='local_drink'
            color='#3A85FF'
            // value={this.state.water}
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
