import React from "react";

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
    var gamepadItems = gamepadArr.map(g => {
      if (g && g as Gamepad) {
        return (
          <div>
            {g.id}
          </div>
        )
      } else {
        return (
          <div>
            <h2 className="inactive"><span className="icon">{i++ + 1} </span><span>n/a</span></h2>
          </div>
        )
      }
    });
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