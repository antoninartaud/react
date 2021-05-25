import React, { Component } from 'react';
import Card from '../components/Card';
import { getLatestMovies } from '../utils/Api';

class Weekly extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    getLatestMovies().then((data) => {
      this.setState({
        movies: data.results,
      });
    });
  }

  render() {
    return (
      <div className='container'>
        <h1 className='text-center'>Weekly</h1>

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

export default Weekly;
