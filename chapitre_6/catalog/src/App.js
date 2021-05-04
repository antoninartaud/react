import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieDetails from './view/MovieDetails';
import MoviesTitleList from './view/MoviesTitleList.jsx';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      titleName: '',
    };
    // this.clickHandler = this.clickHandler.bind(this);
  }

  // clickHandler() {}

  render() {
    return (
      <div>
        <h1>Catalogue</h1>
        <MoviesTitleList />
        {/* <MovieDetails /> */}
      </div>
    );
  }
}

export default App;
