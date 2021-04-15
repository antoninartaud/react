import React from 'react';

class Button extends React.Component {
  render() {
    const { isSelected, onClick } = this.props;

    return (
      <>
        <button isSelected={this.props.isSelected} onClick={this.props.onClick}>
          {this.props.children}
        </button>
        <div>{this.props.isSelected}</div>
      </>
    );
  }
}

export default Button;
