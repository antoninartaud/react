import React, { Component } from 'react';

class Favorites extends Component {
  state = {
    movies: [],
    favIDs: this.getStorage(),
  };

  // componentDidMount() {
  //   const arrFavIDs = this.state.favIDs.split(' ');
  //   arrFavIDs.map((elem) => {
  //     let numElem = parseInt(elem);
  //     this.getMovie(numElem);
  //   });
  // }

  getStorage() {
    const favorites = localStorage.getItem('favorites');
    return favorites;
  }

  getMovie(id) {
    fetch(
      `http://api.themoviedb.org/3/movie/${id}?api_key=e441f8a3a151d588a4932d2c5d310769`
    );
  }

  render() {
    console.log('this.state.favIDs typeof:', typeof this.state.favIDs);
    console.log('this.state.favIDs:', this.state.favIDs);
    return <h1>Favorites</h1>;
  }
}

export default Favorites;
