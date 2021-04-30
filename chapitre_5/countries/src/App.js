import React from 'react';
import './App.css';
import Button from './components/Button.jsx';
import Card from './components/Card.jsx';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      capital: '',
      flag: '',
      population: '',
      region: '',
    };
    this.getCountry = this.getCountry.bind(this);
  }

  componentDidMount() {
    // console.log('suis dans DidMount');

    fetch('http://localhost:8000/countries/France')
      .then((response) => response.json())

      .then((result) => {
        // console.log(result);
        this.setState({
          name: result.name,
          capital: result.capital,
          flag: result.flag,
          population: result.population,
          region: result.region,
        });
      });
  }

  getCountry(country) {
    // console.log("i'm in getCountry");
    // console.log('country dans getCountry:', country);

    fetch('http://localhost:8000/countries/' + country)
      .then((response) => response.json())

      .then((result) => {
        this.setState({
          name: result.name,
          capital: result.capital,
          flag: result.flag,
          population: result.population,
          region: result.region,
        });
      });
  }

  render() {
    // console.log('this.state.name dans render:', this.state.name);
    return (
      <div className='container'>
        <div className='row'>
          <div className='d-flex justify-content-evenly'>
            <Button onClick={this.getCountry}>France</Button>

            <Button onClick={this.getCountry}>Brazil</Button>

            <Button onClick={this.getCountry}>Croatia</Button>
          </div>
        </div>

        <div className='d-flex flex-column align-items-center'>
          <Card
            name={this.state.name}
            capital={this.state.capital}
            flag={this.state.flag}
            population={this.state.population}
            region={this.state.region}
          />
        </div>
      </div>
    );
  }
}

export default App;
