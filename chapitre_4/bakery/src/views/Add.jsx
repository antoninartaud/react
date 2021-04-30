import React, { Component } from 'react';

class Add extends Component {
  constructor() {
    super();
    this.state = {
      productName: '',
      price: 1,
    };
    this.updateProductName = this.updateProductName.bind(this);
    this.updatePrice = this.updatePrice.bind(this);
  }

  updateProductName(event) {
    this.setState({
      productName: event.target.value,
    });
  }

  updatePrice(event) {
    this.setState({
      price: event.target.value,
    });
  }

  click = () => {
    // Dépendant de comment a été déclarer la fonction passé en props
    // On va lui remonter un ou plusieurs arguments

    // this.props.addItem({ name: this.state.productName, price: this.state.price})
    this.props.addItem(this.state.productName, this.state.price);
  };

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <input
            type='text'
            className='col-10'
            onChange={this.updateProductName}
          ></input>
          <button
            type='button'
            className='btn btn-primary col-2'
            onClick={this.click}
          >
            Add
          </button>
        </div>
        <div className='row'>
          <input
            type='range'
            value={this.state.price}
            onChange={this.updatePrice}
            min='1'
            max='10'
          ></input>
          <span>{this.state.price}</span>
        </div>
      </div>
    );
  }
}
export default Add;
