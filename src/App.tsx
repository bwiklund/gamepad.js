import React, { Component } from 'react';
import './App.css';
import GamepadList from './component/GamepadList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <GamepadList />
      </div>
    );
  }
}

export default App;
