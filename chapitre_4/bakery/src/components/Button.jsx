import React from 'react';

class Button extends React.Component {
  render() {
    const { isSelected, onClick } = this.props;

    // let message = null;

    // switch (this.props.selected) {
    //   case 'add':
    //     message = <Add />;
    //     break;
    // }

    return (
      <>
        <button
          isSelected=''
          onClick={() => this.props.onClick(this.props.children)}
        >
          {this.props.children}
        </button>
      </>
    );
  }
}

export default Button;
