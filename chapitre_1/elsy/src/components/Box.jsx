import React from 'react';

class Box extends React.Component {
  renderBoxSlider() {
    return (
      <div className='box col-sm-3 col6'>
        <span
          className='material-icons'
          style={{ fontSize: 100, color: this.props.color }}
        >
          {this.props.icon}
        </span>
        <p>
          {this.props.value} {this.props.unit}
        </p>
        <input
          type='range'
          min={this.props.min}
          max={this.props.max}
          value={this.props.value}
          onInput={this.props.onChange}
        />
      </div>
    );
  }

  renderBoxWater() {
    return (
      <div className='box col-sm-3 col6'>
        <span
          className='material-icons'
          style={{ fontSize: 100, color: this.props.color }}
        >
          {this.props.icon}
        </span>
        <p>
          {this.props.value} {this.props.unit}
        </p>
      </div>
    );
  }

  render() {
    if (this.props.unit !== 'L') {
      return <>{this.renderBoxSlider()}</>;
    } else {
      return <>{this.renderBoxWater()}</>;
    }
  }
}

export default Box;
