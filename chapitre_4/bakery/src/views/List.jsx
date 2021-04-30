import React, { Component } from 'react';

class List extends Component {
  render() {
    return (
      <ul>
        {this.props.listItems.map((curr) => {
          return (
            <li>
              {curr.name} - {curr.price}{' '}
            </li>
          );
        })}
      </ul>
    );
  }
}
export default List;
