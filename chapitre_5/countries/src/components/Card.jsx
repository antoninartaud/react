import React from 'react';

class Card extends React.Component {
  render() {
    return (
      <>
        <p>Name : {this.props.name} </p>
        <p>Capital : {this.props.capital}</p>
        <p>
          Drapeau : <img src={this.props.flag} alt='Drapeau du pays' />
        </p>
        <p> Population : {this.props.population}</p>
        <p> Region : {this.props.region}</p>
      </>
    );
  }
}

export default Card;
