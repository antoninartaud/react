import React, { Component } from 'react';
import Card from '../components/Card';
import { getLatestMovies } from '../utils/Api';

class WeeklyBattle extends Component {
  state = {
    movies: [],
    currentBattle: 1,
  };

  componentDidMount() {
    getLatestMovies().then((data) => {
      this.setState({
        movies: data.results,
      });
    });
  }

  updateIndexMovieBattle = (movieId) => {
    console.log('updateIndexMovieBattle', typeof movieId);

    const idsFavorites = JSON.parse(localStorage.getItem('favorites')) || [];

    console.log('idsFavorites', idsFavorites);

    // if (!idsFavorites.find(elem => elem === movieId)) {
    if (!idsFavorites.includes(movieId)) {
      idsFavorites.push(movieId);

      localStorage.setItem('favorites', JSON.stringify(idsFavorites));
    }

    this.setState({
      currentBattle: this.state.currentBattle + 1,
    });
  };

  renderTwoMovies() {
    const { currentBattle } = this.state;

    const indexFirstMovie = (currentBattle - 1) * 2;

    const firstMovie = this.state.movies[indexFirstMovie];
    const secondMovie = this.state.movies[indexFirstMovie + 1];

    return (
      <>
        <div
          className='col-6'
          style={{ cursor: 'pointer' }}
          onClick={() => this.updateIndexMovieBattle(firstMovie.id)}
        >
          <Card
            title={firstMovie.title}
            poster_path={firstMovie.poster_path}
            release_date={firstMovie.release_date}
            overview={firstMovie.overview}
          />
        </div>
        <div
          className='col-6'
          style={{ cursor: 'pointer' }}
          onClick={() => this.updateIndexMovieBattle(secondMovie.id)}
        >
          <Card
            title={secondMovie.title}
            poster_path={secondMovie.poster_path}
            release_date={secondMovie.release_date}
            overview={secondMovie.overview}
          />
        </div>
      </>
    );
  }

  render() {
    return (
      <div>
        <h1 className='text-center'>Weekly Battle</h1>

        {this.state.currentBattle > 10 ? (
          'Vous avez parcouru tous les films '
        ) : (
          <div className='row'>
            {this.state.movies.length !== 0
              ? this.renderTwoMovies()
              : 'Please wait until the movies are loaded'}
          </div>
        )}
      </div>
    );
  }
}

export default WeeklyBattle;
