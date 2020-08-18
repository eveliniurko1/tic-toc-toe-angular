import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicTacToeComponent } from './tic-tac-toe.component';
import { TicTacToeService } from './shared';

describe('TicTacToeComponent', () => {
  let component: TicTacToeComponent;
  let fixture: ComponentFixture<TicTacToeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        TicTacToeComponent 
      ], providers: [
        TicTacToeService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicTacToeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
