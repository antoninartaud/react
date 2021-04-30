import React, { Component } from 'react';

class List extends Component {
  render() {
    // console.log('this.props list.jsx', this.props.items);
    return (
      <ul>
        {this.props.items.map((item) => (
          <li>
            <span>{item.name}</span>
            <span>{item.price}</span>
          </li>
        ))}
      </ul>
    );
  }
}
export default List;
