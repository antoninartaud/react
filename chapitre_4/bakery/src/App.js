import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Add from './components/Add.jsx';
import List from './components/List.jsx';
import Pay from './components/Pay.jsx';
import Button from './components/Button.jsx';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      activeTab: 'add',
      items: [],
    };

    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler() {
    //
  }

  render() {
    return (
      <div>
        <h1>Salut</h1>
        <Add />
        <List />
        <Pay />
        <Button isSelected={this.state.activeTab} onClick={this.onClickHandler}>
          Add
        </Button>
        <Button isSelected={this.state.activeTab} onClick={this.onClickHandler}>
          List
        </Button>
        <Button isSelected={this.state.activeTab} onClick={this.onClickHandler}>
          Pay
        </Button>
      </div>
    );
  }
}

export default App;
