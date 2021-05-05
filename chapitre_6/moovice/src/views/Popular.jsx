import React, { Component } from 'react';

class Popular extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    fetch(
      'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=e441f8a3a151d588a4932d2c5d310769'
    )
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        this.setState({
          movies: data,
        });
      });
  }

  render() {
    console.log('this.state in render :', this.state);
    return <h1>Popular</h1>;
  }
}

export default Popular;
