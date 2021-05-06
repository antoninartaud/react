import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import Favorites from './views/Favorites';
import Home from './views/Home';
import Popular from './views/Popular';
import PopularBattle from './views/PopularBattle';
import Weekly from './views/Weekly';
import WeeklyBattle from './views/WeeklyBattle';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/weekly'>Weekly</Link>
        </li>
        <li>
          <Link to='/weekly-battle'>WeeklyBattle</Link>
        </li>
        <li>
          <Link to='/popular'>Popular</Link>
        </li>
        <li>
          <Link to='/popular-battle'>Popular-Battle</Link>
        </li>
        <li>
          <Link to='/favorites'>Favorites</Link>
        </li>

        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route path='/weekly' component={Weekly}></Route>
          <Route path='/weekly-battle' component={WeeklyBattle}></Route>
          <Route path='/popular' component={Popular}></Route>
          <Route path='/popular-battle' component={PopularBattle}></Route>
          <Route path='/favorites' component={Favorites}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
