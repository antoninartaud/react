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
      activeTab: 'Add',
      items: [],
    };

    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler(children) {
    // event.preventDefault();

    // console.log("i'm in the onclickhandler");
    // console.log(event.target.innerText);
    console.log('children in the onclickhandler', children);

    this.setState({
      activeTab: children,
    });
    // console.log('this.state.activeTab after set state', this.state.activeTab);
  }

  render() {
    let buttonNameRender = null;
    // console.log('this.state.activeTab in render', this.state.activeTab);
    if (this.state.activeTab === 'Add') {
      buttonNameRender = <Add />;
    } else if (this.state.activeTab === 'List') {
      buttonNameRender = <List />;
    } else if (this.state.activeTab === 'Pay') {
      buttonNameRender = <Pay />;
    } else {
      console.log('where is my tabname ?');
    }

    return (
      <div>
        <Button isSelected='' onClick={this.onClickHandler}>
          Add
        </Button>
        <Button isSelected='' onClick={this.onClickHandler}>
          List
        </Button>
        <Button isSelected='' onClick={this.onClickHandler}>
          Pay
        </Button>
        {buttonNameRender}
      </div>
    );
  }
}

export default App;
