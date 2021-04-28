import React from 'react';
import './App.css';

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

  render() {
    return (
      <>
        <h1>{this.state.name}</h1>
        <p>{this.state.capital}</p>
        <img src={this.state.flag} />
        <p>{this.state.population}</p>
        <p>{this.state.region}</p>
      </>
    );
  }
}

export default App;
