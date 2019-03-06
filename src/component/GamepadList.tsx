import React from "react";
import GamepadItem from './GamepadItem';

export default class GamepadList extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      gamepads: this.pollGamepads()
    }
  }

  componentDidMount() {
    this.tick();
  }

  tick() {
    this.setState({
      gamepads: this.pollGamepads()
    });
    window.requestAnimationFrame(() => this.tick())
  }

  render() {
    var gamepads = this.pollGamepads();
    var gamepadArr: (Gamepad | null)[] = [].slice.call(this.state.gamepads);
    var i = 0;
    var gamepadItems = gamepadArr.map(g => <GamepadItem gamepad={g} key={i} index={i++} />);
    return (
      <div>
        <p>This is the gamepad list.</p>
        {gamepadItems}
      </div>
    )
  }

  pollGamepads() {
    return navigator.getGamepads();
  }
}