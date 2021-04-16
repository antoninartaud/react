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
    this.setState({
      items: [...this.state.items, { name, price }],
    });

    // console.log(this.state.items);
  }

  render() {
    console.log('ensemble items', this.state.items);

    let buttonNameRender = null;

    // console.log('this.state.activeTab in render', this.state.activeTab);

    if (this.state.activeTab === 'add') {
      buttonNameRender = <Add anotherItem={this.addItem} />;
    } else if (this.state.activeTab === 'list') {
      buttonNameRender = <List items={this.state.items} />;
    } else if (this.state.activeTab === 'pay') {
      buttonNameRender = <Pay />;
    } else {
      console.log('where is my tabname ?');
    }
    // const buttonStyle={}

    return (
      <div>
        <h1 className='text-center display-4 pb-4'>Bakery</h1>

        <Button
          isSelected={this.state.activeTab === 'add' ? 'yes' : 'no'}
          onClick={this.selectAdd}
          className={this.is}
          // style={{backgroundColor:}}
        >
          Add
        </Button>

        <Button
          isSelected={this.state.activeTab === 'list' ? 'yes' : 'no'}
          onClick={this.selectList}
          // items={this.state.items}
        >
          List
        </Button>

        <Button
          isSelected={this.state.activeTab === 'pay' ? 'yes' : 'no'}
          onClick={this.selectPay}
        >
          Pay
        </Button>

        {buttonNameRender}
      </div>
    );
  }
}

export default App;
