import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gamepad-list',
  templateUrl: './gamepad-list.component.html',
  styleUrls: ['./gamepad-list.component.styl']
})
export class GamepadListComponent implements OnInit {
  gamepads: Gamepad[];

  constructor() { }

  ngOnInit() {
    this.tick();
  }

  tick() {
    window.requestAnimationFrame(() => this.tick());
    this.gamepads = navigator.getGamepads();
  }

  axisStyle(n) {
    opacity: Math.abs(n) + 0.3
  }

  buttonStyle(id) {
    var val = this.buttonValue(id);
    return {
      opacity: Math.abs(val) + 0.3,
      border: this.buttonPressed(id) ? '1px solid #888' : '1px solid transparent'
    }
  }

  buttonValue(b) {
    return (typeof (b) == 'number') ? b : b.value;
  }

  buttonPressed(b) {
    return (typeof (b) == 'number') ? b > 0.1 : b.pressed
  }

  mappingString(mapping: GamepadMappingType) {
    return mapping || '[none]';
  }
}
