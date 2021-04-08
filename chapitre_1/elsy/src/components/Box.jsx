import React from 'react';
// import './styles/global.css';

class Box extends React.Component {
  render() {
    return (
      <div className='box col-sm-3 col6'>
        <span
          className='material-icons'
          style={{ fontSize: 100, color: this.props.color }}
        >
          {this.props.icon}
        </span>
        <p>
          {this.props.value}
          {this.props.unit}
        </p>
      </div>
    );
  }
}

export default Box;
