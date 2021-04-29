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
    fetch('https://restcountries.eu/rest/v2/name/france')
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
    console.log(country);
    fetch('https://restcountries.eu/rest/v2/name/' + country)
      .then((response) => response.json())

      .then((result) => {
        this.setState({
          name: result[0].name,
        });
      });
  }

  render() {
    console.log(this.state.name);
    return (
      <>
        <Button onClick={this.getCountry}>France</Button>
        <Button onClick={this.getCountry}>Brazil</Button>
        <Button onClick={this.getCountry}>Croatia</Button>

        {/* <h1>{this.state.name}</h1>
        <p>{this.state.capital}</p>
        <img src={this.state.flag} alt='country flag' />
        <p>{this.state.population}</p>
        <p>{this.state.region}</p> */}

        <Card
          name={this.state.name}
          capital={this.state.capital}
          flag={this.state.flag}
          population={this.state.population}
          region={this.state.region}
        />
      </>
    );
  }
}

export default App;
