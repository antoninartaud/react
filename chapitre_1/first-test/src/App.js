import React from 'react';

class Home extends React.Component {
  name = 'Joohn';

  render() {
    return (
      <div className='view-home'>
        <h1>Hello {this.name} !</h1>
        <p> Welcome to my amazing blog</p>
      </div>
    );
  }
}

export default Home;
