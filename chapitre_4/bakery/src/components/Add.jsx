import React from 'react';

class Add extends React.Component {
  constructor() {
    super();

    this.state = {
      productName: '',
      price: 1,
    };
  }
  updateProductName(e) {
    console.log("i'm in updateProductName");
    console.log('e.target.value before setState', e.target.value);

    this.setState({
      productName: e.target.value,
    });
  }

  updatePrice(e) {
    console.log("i'm in updatePice");

    this.setState({
      productName: e.target.value,
    });
  }

  render() {
    console.log('this.state.productName after render', this.state.productName);
    return (
      <>
        <input type='text' onChange={this.updateProductName} />
        <input type='range' min={1} max={10} onChange={this.updatePrice} />
        <button onClick=''>Add</button>
        <div>add</div>
      </>
    );
  }
}

export default Add;
