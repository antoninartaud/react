import React from 'react';

class Card extends React.Component {
  constructor(props) {
    console.log(props);
    super(props);
    this.state = {
      image: '../images/item.png',
    };
  }

  componentDidMount() {
    fetch(
      ` https://raw.githubusercontent.com/konexio/digitous-assest/main/bakery/${this.props.productName}.png`
    )
      .then((response) => response.blob())
      .then((result) => {
        let strUrl = URL.createObjectURL(result);
        console.log('strUrl:', strUrl);
        // console.log(typeof strUrl);
        this.setState({
          image: strUrl,
        });
      });
  }

  render() {
    console.log('this.state.image in render', this.state.image);
    console.log('this.props:', this.props);
    return (
      <button
        onClick={() =>
          this.props.onClick(this.props.productName, this.props.price)
        }
      >
        <img src={this.state.image} alt='item' />
      </button>
    );
  }
}

export default Card;
