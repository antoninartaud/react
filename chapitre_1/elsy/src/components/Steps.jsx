import React from 'react';
import '../styles/global.css';

class Steps extends React.Component {
  render() {
    return (
      <div className='box col-sm-3 col6'>
        <span
          className='material-icons'
          style={{ fontSize: 100, color: 'black' }}
        >
          directions_walk
        </span>
      </div>
    );
  }
}

export default Steps;
