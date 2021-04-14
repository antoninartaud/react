import React from 'react';

class Box extends React.Component {
  render() {
    // console.log("this.props", this.props);

    const { icon, color, value, unit, min, max, onChange } = this.props;

    let inputRange = null;

    if (unit !== 'L') {
      inputRange = (
        <input
          type='range'
          min={min}
          max={max}
          value={value}
          onInput={onChange}
        />
      );
    }

    return (
      <div className='box col-sm-3 col-6'>
        <span
          className='material-icons'
          style={{ fontSize: 100, color: color }}
        >
          {icon}
        </span>
        <p>
          {value} {unit}
        </p>
        {inputRange}
      </div>
    );
  }
}
export default Box;

// class Box extends React.Component {
//   renderBoxSlider() {
//     return (
//       <div className='box col-sm-3 col6'>
//         <span
//           className='material-icons'
//           style={{ fontSize: 100, color: this.props.color }}
//         >
//           {this.props.icon}
//         </span>
//         <p>
//           {this.props.value} {this.props.unit}
//         </p>
//         <input
//           type='range'
//           min={this.props.min}
//           max={this.props.max}
//           value={this.props.value}
//           onInput={this.props.onChange}
//         />
//       </div>
//     );
//   }

//   renderBoxWater() {
//     return (
//       <div className='box col-sm-3 col6'>
//         <span
//           className='material-icons'
//           style={{ fontSize: 100, color: this.props.color }}
//         >
//           {this.props.icon}
//         </span>
//         <p>
//           {this.props.value} {this.props.unit}
//         </p>
//       </div>
//     );
//   }

//   render() {
//     if (this.props.unit !== 'L') {
//       return <>{this.renderBoxSlider()}</>;
//     } else {
//       return <>{this.renderBoxWater()}</>;
//     }
//   }
// }

// export default Box;
