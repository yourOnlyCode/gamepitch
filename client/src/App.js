import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"

import './App.css';

class App extends React.Component() {

  state = {
    investorView = false,
  }

  render() {
    return (
      <div className="App" >
        Hello World
      </div>
    );
  }
}

export default App;
