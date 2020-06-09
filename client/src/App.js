import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"

import Prompt from './components/Prompt.js'
import Feed from './components/Feed.js'
import Developer from './components/Developer.js'
import AdminDeveloper from './components/AdminDeveloper.js'

import './App.css';

export default class App extends React.Component {

  render() {
    return (
      <div className="App" >
        <h1>Game Pitch</h1>

        <Router>

          <Switch>
            <Route exact path="/" component={Prompt} />
            <Route exact path="/feed" component={Feed} />
            <Route exact path="/developer/:developerId" component={Developer} />
            <Route exact path="/adminDev" component={AdminDeveloper} />
          </Switch>
        </Router>

      </div>
    );
  }
}

