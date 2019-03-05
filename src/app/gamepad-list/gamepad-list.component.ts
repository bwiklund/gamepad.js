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
    this.gamepads = navigator.getGamepads();
  }

}
