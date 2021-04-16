import React from 'react';

class Add extends React.Component {
  constructor() {
    super();

    this.state = {
      productName: '',
      price: 1,
    };

    this.updateProductName = this.updateProductName.bind(this);
    this.updatePrice = this.updatePrice.bind(this);
  }

  updateProductName(e) {
    console.log("i'm in updateProductName");
    console.log('e.target.value before setState', e.target.value);

    this.setState({
      productName: e.target.value,
    });
  }

  updatePrice(e) {
    console.log("i'm in updatePrice");

    this.setState({
      price: e.target.value,
    });
  }

  render() {
    console.log('this.state.productName after render', this.state.productName);
    console.log('this.state.price', this.state.price);
    return (
      <>
        <input type='text' onChange={this.updateProductName} />
        <input type='range' min={1} max={10} onChange={this.updatePrice} />
        <button
          onClick={() =>
            this.props.anotherItem(this.state.productName, this.state.price)
          }
        >
          Add
        </button>
        <div>add</div>
      </>
    );
  }
}

export default Add;
