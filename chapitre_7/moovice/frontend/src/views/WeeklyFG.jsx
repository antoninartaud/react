import React, { Component } from 'react';
import moment from 'moment';

import Card from '../components/Card';

class Weekly extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    const today = moment().format('YYYY-MM-DD');
    const lastWeek = moment().subtract(7, 'days').format('YYYY-MM-DD');

    const url =
      // 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=e441f8a3a151d588a4932d2c5d310769';

      `http://api.themoviedb.org/3/discover/movie?primary_release_date.gte=${lastWeek}&primary_release_date.lte=${today}&api_key=e441f8a3a151d588a4932d2c5d310769`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log('data in popular component did mount', data);

        this.setState({
          movies: data.results,
        });
      });
  }

  render() {
    let momentNow = moment().format('YYYY-MM-DD');
    console.log(momentNow);
    console.log(typeof momentNow);

    let lastWeek = moment().subtract(7, 'days').format('YYYY-MM-DD');
    console.log(lastWeek);
    console.log(typeof lastWeek);

    return (
      <div>
        <h1>Weekly</h1>
        <h1>Popular</h1>

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

  // render() {
  //   return <h1>Weekly</h1>;
  // }
}

export default Weekly;
