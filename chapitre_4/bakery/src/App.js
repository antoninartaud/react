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
    this.selectAdd = this.selectAdd.bind(this);
    this.selectList = this.selectList.bind(this);
    this.selectPay = this.selectPay.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  onClickHandler(children) {
    // event.preventDefault();

    // console.log("i'm in the onclickhandler");
    // console.log(event.target.innerText);
    children = children.toLowerCase();

    console.log('children in the onclickhandler', children);

    this.setState({
      activeTab: children,
    });
    // console.log('this.state.activeTab after set state', this.state.activeTab);
  }

  selectAdd() {
    this.setState({
      activeTab: 'add',
    });
  }

  selectList() {
    this.setState({
      activeTab: 'list',
    });
  }

  selectPay() {
    this.setState({
      activeTab: 'pay',
    });
  }

  addItem(name, price) {
    console.log("i'm in addItem method");
    this.setState.items({
      name: '',
      price: 0,
    });

    console.log(this.state.items);
  }
  render() {
    console.log(this.state.items);
    let buttonNameRender = null;

    console.log('this.state.activeTab in render', this.state.activeTab);

    if (this.state.activeTab === 'add') {
      buttonNameRender = <Add />;
    } else if (this.state.activeTab === 'list') {
      buttonNameRender = <List />;
    } else if (this.state.activeTab === 'pay') {
      buttonNameRender = <Pay />;
    } else {
      console.log('where is my tabname ?');
    }

    return (
      <div>
        <Button
          isSelected=''
          onClick={this.selectAdd}
          anotherItem={this.addItem}
        >
          Add
        </Button>
        <Button isSelected='' onClick={this.selectList}>
          List
        </Button>
        <Button isSelected='' onClick={this.selectPay}>
          Pay
        </Button>
        {buttonNameRender}
      </div>
    );
  }
}

export default App;
