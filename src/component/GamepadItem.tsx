import React from "react";

interface GamepadProps {
  index: number;
  gamepad: Gamepad | null;
}

declare global {
  interface Gamepad {
    vibrationActuator: any;
  }
}

export default class GamepadItem extends React.Component<GamepadProps, any> {
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

  testVibration() {
    if (this.props.gamepad && this.props.gamepad.vibrationActuator) {
      this.props.gamepad.vibrationActuator.playEffect("dual-rumble", {
        startDelat: 0,
        duration: 1000,
        weakMagnitude: 1.0,
        strongMagnitude: 1.0
      });
    }
  }

  render() {
    var gamepad = this.props.gamepad;
    if (gamepad && gamepad as Gamepad) {
      return (
        <div className="gamepad">
          <h2 className="active">
            <span className="icon">{this.props.index + 1} </span>
            <span>{gamepad.id}</span>
          </h2>

          <div className="info">
            <ul>
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
              <li className="large"><label>TIMESTAMP</label>
                <span className="value">{this.formatFloat(gamepad.timestamp, 5)}</span>
              </li>
            </ul>
          </div>

          <div className="axes">
            <ul>
              {gamepad.axes.map((axis, i) =>
                <li key={i} style={this.axisStyle(axis)}>
                  <label>AXIS {i}</label>
                  <span className="value">{this.formatFloat(axis, 5)}</span>
                </li>
              )}
            </ul>
          </div>

          <div className="buttons">
            <ul>
              {gamepad.buttons.map((button, i) =>
                <li key={i} style={this.buttonStyle(button)}>
                  <label>B{i}</label>
                  <span className="value">{this.formatFloat(this.buttonValue(button), 2)}</span>
                </li>
              )}
            </ul>
          </div>

          <div className="info">
            <ul>
              <li className="med">
                <label>Pose</label>
                <span className="value">{gamepad.pose && Object.keys(gamepad.pose).length > 0 ? "Yes" : "n/a"}</span>
              </li>
              <li className="med">
                <label>HapticActuators</label>
                <span className="value">{gamepad.hapticActuators && Object.keys(gamepad.hapticActuators).length > 0  ? "Yes" : "n/a"}</span>
              </li>
              <li className="med">
                <label>Hand</label>
                <span className="value">{gamepad.hand ? gamepad.hand : "n/a"}</span>
              </li>
              <li className="med">
                <label>DisplayId</label>
                <span className="value">{gamepad.displayId != null ? gamepad.displayId : "n/a"}</span>
              </li>
              <li className="med">
                <label>VIBRATION</label>
                <span className="value">{gamepad.vibrationActuator ? "Yes" : "n/a"}</span>
              </li>
              {
                gamepad.vibrationActuator &&
                <li className="med test-button" onClick={() => this.testVibration()}>
                  <label>TEST</label>
                  <span className="value">Vibration</span>
                </li>
              }
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