import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Nktvqy from './Nktvqy';
import Qszjgj from './Qszjgj';


function App() {
  return (
    <Router>
    <div className="app">
      <Switch>

        <Route path="/01">
          <h1>01</h1>
        </Route>

        <Route path="/">
        <Nktvqy />
        <Qszjgj />
        <h1>Synapse</h1>
      </Route>


      </Switch>
    </div>
    </Router>
  );
}

export default App;
