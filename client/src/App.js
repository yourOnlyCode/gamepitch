import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"

import Prompt from './components/Prompt.js'
import Feed from './components/Feed.js'
import Developer from './components/Developer.js'
import AdminDeveloperPrompt from './components/AdminDeveloperPrompt.js'
import DevPortal from './components/DevPortal.js'
import InvestorPortal from './components/InvestorPortal.js'
import Explore from './components/Explore.js'
import Investor from './components/Investor.js'
import Game from './components/Game.js'

import './App.scss';

// Desired functionalities:
// Would like to have a scheduling functionality, like Calendly, to schedule face to face eith developers.

export default class App extends React.Component {

  render() {
    return (
      <div className="App" >
        <Router>

          <div className='nav-container'>

            <Link to='' >
              <div className='app-logo'>
                <img alt='video games' src='https://i.pinimg.com/originals/5e/22/86/5e2286e02a8d3a65558ad3adf7534670.jpg' width='80' />
              </div>
            </Link>

            <div className='nav-bar'>

              <Link to='/explore'>
                <button className='nav-link'>
                  <span class="material-icons">
                    explore
                  </span>
                </button>
              </Link>

              <Link to='/adminDev'>
                <button className='nav-link'>
                  <span class="material-icons">
                    group
                  </span>
                </button>
              </Link>

              <Link to='/investor'>
                <button className='nav-link'>
                  <span class="material-icons">
                    account_balance
                  </span>
                </button>
              </Link>

            </div>

          </div>




          <Switch>
            <Route exact path="/" component={Prompt} />
            <Route exact path="/feed" component={Feed} />
            <Route exact path="/developer/:developerId" component={Developer} />
            <Route exact path="/adminDev" component={AdminDeveloperPrompt} />
            <Route exact path="/devPortal/:developerId" component={DevPortal} />
            <Route exact path="/investorPortal" component={InvestorPortal} />
            <Route exact path="/explore" component={Explore} />
            <Route exact path="/investor" component={Investor} />
            <Route exact path="/game/:gameId" component={Game} />
          </Switch>
        </Router>

      </div>
    );
  }
}

