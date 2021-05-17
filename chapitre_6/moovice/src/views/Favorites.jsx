import React, { Component } from 'react';

class Favorites extends Component {
  state = {
    movies: [],
    favIDs: this.getStorage(),
  };

  componentDidMount() {
    const arrFavIDs = this.state.favIDs;
    arrFavIDs.map((elem) => {
      console.log(elem);
      let movie = this.getMovie(elem);
      console.log('movie:', movie);
      return movie;
    });
  }

  getStorage() {
    const favorites = JSON.parse(localStorage.getItem('favorites'));
    return favorites;
  }

  getMovie = (id) => {
    console.log('id', id);
    fetch(
      `http://api.themoviedb.org/3/movie/${id}?api_key=e441f8a3a151d588a4932d2c5d310769`
    );
  };

  render() {
    console.log('this.state.favIDs typeof:', typeof this.state.favIDs);
    console.log('this.state.favIDs:', this.state.favIDs);
    const favorites = JSON.parse(localStorage.getItem('favorites'));
    console.log('favorites ', favorites);
    console.log('favorites typeof', typeof favorites);
    console.log('this.state.favIDs:', this.state.favIDs);
    // const arrFavIDs = this.state.favIDs.split(' ');
    // JSON.parse(localStorage.getItem('favorites'))
    // console.log('arrFavIDs:', arrFavIDs);

    return <h1>Favorites</h1>;
  }
}

export default Favorites;
