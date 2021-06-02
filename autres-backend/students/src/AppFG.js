import { useState, useEffect } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import StudentList from './components/StudentList';
import AddStudents from './components/AddStudents';

function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>Students</h1>

        <Switch>
          <Route path='/' exact>
            <StudentList />
            <AddStudents />
          </Route>

          <Route path='studentAdded' exact></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
