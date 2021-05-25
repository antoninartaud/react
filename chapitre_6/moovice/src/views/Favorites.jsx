import React, { Component } from 'react';
import Card from '../components/Card';
import { getMovieAPI } from '../utils/Api';

class Favorites extends Component {
  state = {
    movies: [],
    favIds: this.getStorage(),
  };

  getStorage() {
    return JSON.parse(localStorage.getItem('favorites')) || [];
  }

  getMovie(id) {
    getMovieAPI(id).then((data) => {
      const newMovies = [...this.state.movies, data];

      this.setState({
        movies: newMovies,
      });
    });
  }

  componentDidMount() {
    this.state.favIds.map((elem) => this.getMovie(elem));
  }

  render() {
    return (
      <div className='container'>
        <h1 className='text-center'>Favorites</h1>

        <div className='row'>
          {this.state.movies.map((elem) => {
            return (
              <div className='col-6'>
                <Card {...elem} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Favorites;
