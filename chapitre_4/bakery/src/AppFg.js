/* eslint-disable default-case */
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Add from './views/AddFg.jsx';
import List from './views/ListFg.jsx';
import Pay from './views/PayFg.jsx';
import Button from './components/ButtonFg.jsx';

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

  /* Correction */
  renderContent = () => {
    switch (this.state.activeTabs) {
      case 'add':
        return <Add addItem={this.add}></Add>;
      case 'list':
        return <List listItems={this.state.items}></List>;
      case 'pay':
        return <Pay></Pay>;
    }
  };

  render() {
    console.log('ensemble items', this.state.items);
    // console.log('this.state.activeTab in render', this.state.activeTab);

    /* FG Solution */

    // let buttonNameRender = null;

    // if (this.state.activeTab === 'add') {
    //   buttonNameRender = <Add anotherItem={this.addItem} />;
    // } else if (this.state.activeTab === 'list') {
    //   buttonNameRender = <List items={this.state.items} />;
    // } else if (this.state.activeTab === 'pay') {
    //   buttonNameRender = <Pay />;
    // } else {
    //   console.log('where is my tabname ?');
    // }

    return (
      /* FG Solution */
      // <div>
      //   <h1 className='text-center display-4 pb-4'>Bakery</h1>

      //   <Button
      //     isSelected={this.state.activeTab === 'add'}
      //     onClick={this.selectAdd}
      //   >
      //     Add
      //   </Button>

      //   <Button
      //     isSelected={this.state.activeTab === 'list'}
      //     onClick={this.selectList}
      //   >
      //     List
      //   </Button>

      //   <Button
      //     isSelected={this.state.activeTab === 'pay'}
      //     onClick={this.selectPay}
      //   >
      //     Pay
      //   </Button>

      //   {buttonNameRender}

      //   {this.renderContent()}
      // </div>

      <div className='App'>
        <Button
          onClick={this.selectAdd}
          isSelected={this.state.activeTabs === 'add' ? true : false}
        >
          Add
        </Button>
        <Button
          onClick={this.selectList}
          isSelected={this.state.activeTabs === 'list' ? true : false}
        >
          List
        </Button>
        <Button
          onClick={this.selectPay}
          isSelected={this.state.activeTabs === 'pay' ? true : false}
        >
          Pay
        </Button>

        {this.renderContent()}
      </div>
    );
  }
}

export default App;
