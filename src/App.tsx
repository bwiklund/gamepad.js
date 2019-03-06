import React, { Component } from 'react';
import './App.css';
import GamepadList from './component/GamepadList';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <GamepadList />
      </div>
    );
  }
}
