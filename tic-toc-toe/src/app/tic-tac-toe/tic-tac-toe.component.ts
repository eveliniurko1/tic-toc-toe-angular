import { Component, OnInit } from '@angular/core';

import { TicTacToeService } from './shared';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.css']
})
export class TicTacToeComponent implements OnInit {

  constructor(private ticTacToeService: TicTacToeService) { }

  ngOnInit(): void {
    this.ticTacToeService.init();
  }

  get showInit(): boolean {
    return this.ticTacToeService.showInit;
  }

  get showBoard(): boolean {
    return this.ticTacToeService.showBoard;
  }

  get showFinal(): boolean {
    return this.ticTacToeService.showFinal;
  }

  get newGame(): void {
     return this.ticTacToeService.startGame();
  }

  play(posX: number, posY: number):void {
    this.ticTacToeService.play(posX, posY);
  }

  showX(posX: number, posY: number): boolean {
    return this.ticTacToeService.showX(posX, posY);
  }

  showO(posX: number, posY: number): boolean {
    return this.ticTacToeService.showO(posX,posY);
  }

  showTriumph(posX: number, posY: number): boolean {
    return this.ticTacToeService.showTriumph(posX, posY);
  }

  get player():number {
    return this.ticTacToeService.player;
  }
}
