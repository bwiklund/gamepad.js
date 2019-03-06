import React from "react";

export default class GamepadItem extends React.Component<any, any> {
  mappingString(n: string) {
    return n;
  }

  render() {
    var gamepad: (Gamepad | null) = this.props.gamepad;
    if (gamepad && gamepad as Gamepad) {
      return (
        <div>
          <h2 className="inactive">
            <span className="icon">{this.props.index + 1} </span>
            <span>n/a</span>
          </h2>

          <div className="info">
            <ul>
              <li className="large"><label>TIMESTAMP</label>
                <span className="value">{Math.round(gamepad.timestamp)}</span>
              </li>
              <li>
                <label>INDEX</label>
                <span className="value">{gamepad.index}</span>
              </li>
              <li className="med">
                <label>MAPPING</label>
                <span className="value">{this.mappingString(gamepad.mapping)}</span>
              </li>
            </ul>
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <h2 className="active">
            <span className="icon">{this.props.index + 1} </span>
            <span>n/a</span>
          </h2 >
        </div >
      )
    }
  }
}