import React from 'react';

class Box extends React.Component {
  render() {
    if (this.props.icon !== 'local_drink') {
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
          <input
            type='range'
            min={this.props.min}
            max={this.props.max}
            value={this.props.value}
            onInput={this.props.onHeartChange}
          />
        </div>
      );
    }
  }
}

export default Box;
