import React from "react";

export default class GamepadItem extends React.Component<any, any> {
  render() {
    var g: (Gamepad | null) = this.props.gamepad;
    if (g && g as Gamepad) {
      return (
        <div>
          <h2 className="active">
            <span className="icon">{this.props.index + 1} </span>
            <span>{g.id}</span>
          </h2>
        </div>
      )
    } else {
      return (
        <div>
          <h2 className="inactive">
            <span className="icon">{this.props.index + 1} </span>
            <span>n/a</span>
          </h2>
        </div>
      )
    }
  }
}