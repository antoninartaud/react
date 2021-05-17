import React, { Component } from 'react';

class Favorites extends Component {
  state = {
    movies: [],
    favIDs: this.getStorage(),
  };

  componentDidMount() {
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
    // const favoritesF = this.getStorage();
    // console.log(favoritesF);
    // this.getMovie(460465);
    console.log('this.state.favIDs:', this.state.favIDs);
    // const favorites = JSON.parse(localStorage.getItem('favorites'));
    // console.log('favorites ', favorites);
    // console.log('favorites typeof', typeof favorites);
    // console.log('this.state.favIDs:', this.state.favIDs);
    // const arrFavIDs = this.state.favIDs.split(' ');
    // JSON.parse(localStorage.getItem('favorites'))
    // console.log('arrFavIDs:', arrFavIDs);
    console.log('this state movies ds render', this.state.movies);

    return <h1>Favorites</h1>;
  }
}

export default Favorites;
