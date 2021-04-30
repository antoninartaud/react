import React from 'react';

class Card extends React.Component {
  constructor(props) {
    console.log(props);
    super(props);
    this.state = {
      image: '../../public/images/item.png',
    };
  }

  componentDidMount() {
    fetch(
      ` https://raw.githubusercontent.com/konexio/digitous-assest/main/bakery/${this.props.itemName}`
    )
      .then((response) => response.blob())
      .then((result) => {
        let strUrl = URL.createObjectURL(result);
        // console.log(strUrl);
        // console.log(typeof strUrl);
        strUrl = strUrl.substr(5, strUrl.length);
        console.log('strUrl in fetch then', strUrl);
        this.setState({
          image: strUrl,
        });
      });
  }

  render() {
    console.log('this.state.image in render', this.state.image);
    return (
      <button
        onClick={() =>
          this.props.onClick(this.props.itemName, this.props.price)
        }
      >
        <img src={this.state.image} alt='item' />
      </button>
    );
  }
}

export default Card;
