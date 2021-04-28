import React from 'react';

class Button extends React.Component {
  render() {
    return <div>{this.props.onClick(this.props.children)}</div>;
  }
}

export default Button;
