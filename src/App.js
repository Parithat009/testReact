import React, { Component } from 'react';
import './App.css'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './components/Login'
import User from './components/page/User'
import ChiefComplaints from './components/page/ChiefComplaints'

import AddChief from './components/add/AddChief'

import EditChief from './components/edit/EditChief'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">

          <Route exact path="/login" component={Login} />
          <Route path="/user" component={User} />
          <Route path="/chief" component={ChiefComplaints} />

          <Route path="/addChief" component={AddChief} />

          <Route path="/editChief/:id" component={EditChief} />
        </div>
      </Router>
    );
  }
}
export default App;
