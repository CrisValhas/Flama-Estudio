import React from 'react';
// import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Morena from './components/pages/invitations/mis15Morena';

function App() {
  return (
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/invitaciones/Mis15Morena' component={Morena} />
        </Switch>
      </Router>
  );
}

export default App;
