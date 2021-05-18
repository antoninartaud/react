import React, { Component } from 'react';

class Favorites extends Component {
  state = {
    movies: [],
    favIDs: this.getStorage(),
  };

  componentDidMount() {
    console.log('this in dimount', this);
    const arrFavIDs = this.state.favIDs;
    arrFavIDs.map((elem) => this.getMovie(elem));
  }

  getStorage() {
    const favorites = JSON.parse(localStorage.getItem('favorites'));
    // console.log('getStorage favorites component:', favorites);
    return favorites;
  }

  getMovie = (id) => {
    // console.log('id', id);
    let url = `http://api.themoviedb.org/3/movie/${id}?api_key=e441f8a3a151d588a4932d2c5d310769`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // console.log('data dans fetch', data);
        this.setState({
          movies: [...this.state.movies, data],
        });
      });
  };

  render() {
    console.log('this.state.favIDs:', this.state.favIDs);
    console.log('this state movies ds render', this.state.movies);

    return <h1>Favorites</h1>;
  }
}

export default Favorites;
