import React, { Component } from 'react';

class Card extends Component {
  render() {
    // console.log('this.props ds render Card', this.props);
    return (
      <div className='text-center'>
        <img
          src={`https://image.tmdb.org/t/p/w300${this.props.poster_path}`}
          onClick={this.props.onClick}
          alt=''
        />
        <h2>{this.props.title}</h2>
        <h3>{this.props.release_date}</h3>
        <p>{this.props.overview}</p>
      </div>
    );
  }
}

export default Card;

// onClick={this.props.onClick}
