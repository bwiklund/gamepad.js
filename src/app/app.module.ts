import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GamepadListComponent } from './gamepad-list/gamepad-list.component';

@NgModule({
  declarations: [
    AppComponent,
    GamepadListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
