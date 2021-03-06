import React from 'react';

class Button extends React.Component {
  render() {
    console.log('this.props in button after render', this.props);

    return (
      <>
        <button
          isSelected={
            this.props.isSelected ? 'btn btn-primary' : 'btn btn-light'
          }
          onClick={() => this.props.onClick(this.props.children)}
        >
          {this.props.children}
        </button>
      </>
    );
  }
}

export default Button;
