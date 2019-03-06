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
    var gamepadArr: (Gamepad | null)[] = [].slice.call(this.state.gamepads);
    var i = 0;
    var gamepadItems = gamepadArr.map(g => <GamepadItem gamepad={g} key={i} index={i++} />);
    return (
      <div className="gamepad-list">
        {gamepadItems}
      </div>
    )
  }

  pollGamepads() {
    return navigator.getGamepads();
  }
}