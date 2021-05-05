import React from 'react';
import { BrowserRouter, Router, Link, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import MovieDetails from './view/MovieDetails';
import MoviesTitleList from './components/MoviesTitleList';
import moviesData from './moviesData';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      titleList: [],
    };

    this.getTitleList = this.getTitleList.bind(this);
  }

  componentDidMount() {
    this.getTitleList();
  }

  getTitleList() {
    const arrayTitle = moviesData.map((elem) => elem.title);
    this.setState({
      titleList: arrayTitle,
    });
  }

  render() {
    // console.log('moviesData[0].title)', moviesData[0].title);

    console.log('this.state', this.state);

    return (
      <BrowserRouter>
        <div>
          <h1>Catalogue</h1>
          <ul>
            {this.state.titleList.map((elem) => (
              <li>
                <Link to=''>{elem}</Link>
              </li>
            ))}
          </ul>
          {/* <MoviesTitleList /> */}
          <MovieDetails titleList={this.state.titleList} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
