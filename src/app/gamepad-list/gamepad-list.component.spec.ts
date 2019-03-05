import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamepadListComponent } from './gamepad-list.component';

describe('GamepadListComponent', () => {
  let component: GamepadListComponent;
  let fixture: ComponentFixture<GamepadListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamepadListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamepadListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
