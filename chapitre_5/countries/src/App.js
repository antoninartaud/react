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
    console.log('suis dans DidMount');
    fetch('http://localhost:8000/countries/france')
      .then((response) => response.json())

      .then((result) => {
        this.setState({
          name: result[0].name,
          capital: result[0].capital,
          flag: result[0].flag,
          population: result[0].population,
          region: result[0].region,
        });
      });
  }

  getCountry(country) {
    console.log("i'm in getCountry");
    console.log('country dans getCountry:', country);

    fetch('http://localhost:8000/countries/' + country)
      .then((response) => response.json())

      .then((result) => {
        this.setState({
          name: result[0].name,
          capital: result[0].capital,
          flag: result[0].flag,
          population: result[0].population,
          region: result[0].region,
        });
      });
  }

  render() {
    console.log('this.state.name dans render:', this.state.name);
    return (
      <>
        <div className='d-flex justify-content-around'>
          <Button onClick={this.getCountry}>France</Button>
          <Button onClick={this.getCountry}>Brazil</Button>
          <Button onClick={this.getCountry}>Croatia</Button>
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
      </>
    );
  }
}

export default App;
