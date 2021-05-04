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
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(name, price) {
    console.log(`I'm in handleSelect! name: ${name} and price:${price}`);
  }

  invoiceCalculation() {}

  render() {
    console.log('this.props.items dans render pay', this.props.items);

    return (
      <>
        <div>Pay</div>
        <div>
          <p>Total HT: {this.state.total}</p>
          <p>TVA: {this.state.totalTVA}</p>
          <p>Eco Tax: {this.state.totalEcoTax}</p>
          <p>Total TTC: {this.state.totalTTC}</p>
        </div>

        {this.props.items.map((item) => {
          return (
            <Card
              productName={item.name}
              price={item.price}
              onclick={this.handleSelect}
            />
          );
        })}
      </>
    );
  }
}

export default Pay;
