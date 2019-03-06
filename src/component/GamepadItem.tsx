import React from "react";

export default class GamepadItem extends React.Component<any, any> {
  axisStyle(n: number) {
    return {
      opacity: Math.abs(n) + 0.3
    }
  }

  buttonStyle(id: GamepadButton) {
    var val = this.buttonValue(id);
    return {
      opacity: Math.abs(val) + 0.3,
      border: this.buttonPressed(id) ? '1px solid #888' : '1px solid transparent'
    }
  }

  buttonValue(b: GamepadButton) {
    return (typeof (b) == 'number') ? b : b.value;
  }

  buttonPressed(b: GamepadButton) {
    return (typeof (b) == 'number') ? b > 0.1 : b.pressed
  }

  mappingString(mapping: GamepadMappingType) {
    return mapping || 'n/a';
  }

  formatFloat(n: number, places: number) {
    var m = Math.pow(10, places);
    return "" + parseFloat("" + Math.round(n * m) / m).toFixed(places);
  }

  render() {
    var gamepad: (Gamepad | null) = this.props.gamepad;
    if (gamepad && gamepad as Gamepad) {
      return (
        <div className="gamepad">
          <h2 className="active">
            <span className="icon">{this.props.index + 1} </span>
            <span>{gamepad.id}</span>
          </h2>

          <div className="info">
            <ul>
              <li className="large"><label>TIMESTAMP</label>
                <span className="value">{this.formatFloat(gamepad.timestamp, 5)}</span>
              </li>
              <li>
                <label>INDEX</label>
                <span className="value">{gamepad.index}</span>
              </li>
              <li className="med">
                <label>CONNECTED</label>
                <span className="value">{gamepad.connected ? "Yes" : "No"}</span>
              </li>
              <li className="med">
                <label>MAPPING</label>
                <span className="value">{this.mappingString(gamepad.mapping)}</span>
              </li>
              {
                gamepad.displayId !== undefined &&
                <li className="med">
                  <label>DISPAY ID</label>
                  <span className="value">{gamepad.displayId}</span>
                </li>
              }
            </ul>
          </div>

          <div className="axes">
            <ul>
              {gamepad.axes.map((axis, i) =>
                <li style={this.axisStyle(axis)}>
                  <label>AXIS {i}</label>
                  <span className="value">{this.formatFloat(axis, 5)}</span>
                </li>
              )}
            </ul>
          </div>

          <div className="buttons">
            <ul>
              {gamepad.buttons.map((button, i) =>
                <li style={this.buttonStyle(button)}>
                  <label>B{i}</label>
                  <span className="value">{this.formatFloat(this.buttonValue(button), 2)}</span>
                </li>
              )}
            </ul>
          </div>

        </div >
      )
    } else {
      return (
        <div className="gamepad">
          <h2 className="inactive">
            <span className="icon">{this.props.index + 1} </span>
            <span>n/a</span>
          </h2 >
        </div >
      )
    }
  }
}