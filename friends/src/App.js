import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";


import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import FriendsList from "./components/FriendsList";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/login" component={Login}/>
        <PrivateRoute exact path="/list" component={FriendsList}/>
      </Router>
    </div>
  );
}

export default App;
