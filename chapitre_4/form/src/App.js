import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import BoxInput from './components/BoxInput.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Salut</h1>
        <BoxInput />
      </div>
    );
  }
}

export default App;
