import React, { Component } from 'react';
import Card from '../components/Card';

class Pay extends Component {
  constructor() {
    super();

    this.state = {
      basket: [],
      total: 0,
      totalTVA: 0,
      totalEcoTax: 0,
      totalTTC: 0,
    };
  }

  handleSelect(name, price) {
    console.log(`I'm in handleSelect! name: ${name} and price:${price}`);
  }

  render() {
    console.log(this.props.items);
    return (
      <>
        <div>Pay</div>
        <div>
          <p>{this.state.total}</p>
        </div>

        {/* <Card itemName='croissant' /> */}
      </>
    );
  }
}

export default Pay;
