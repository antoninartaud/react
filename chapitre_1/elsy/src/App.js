import React from 'react';
import './App.css';
import Steps from './components/Steps.jsx';
import './styles/global.css';

const tempMin = -20;
const tempMax = 40;
const heartMin = 80;
const heartMax = 180;
const stepsMin = 0;
const stepsMax = 50000;

class App extends React.Component {
  render() {
    return (
      <div className='container-fluid'>
        <div className='row'>
          <p>Heart : {heartMin}</p>
          <p>Temperatue : {tempMin}</p>
          <p>Steps: {stepsMin}</p>
          <Steps />
        </div>
      </div>
    );
  }
}

export default App;
