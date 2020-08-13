import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TicTacToeService {

  private readonly TAM_TAB: number = 3;   //constantes (letras maiuscula)
  private readonly X: number = 1;
  private readonly O: number = 2;
  private readonly EMPTY: number = 0;

  private board: any;
  private numMovement: number;
  private triumph: any;

  private _player: number;
  private _showInit: boolean;
  private _showBoard: boolean;
  private _showFinal: boolean;

  constructor() { }

  init(): void {
    this._showInit = true;
    this._showBoard = false;
    this._showFinal = false;
    this.numMovement = 0;
    this._player = this.X;
    this.triumph = false;
    this.startBoard();
  }

  startBoard(): void {
    this.board = [this.TAM_TAB];
    for(let i = 0; i < this.TAM_TAB; i++) {
      this.board[i] = [this.EMPTY, this.EMPTY, this.EMPTY];
    }
  }
 
  get showInit(): boolean {
    return this._showInit;
  }

  get showBoard(): boolean {
    return this._showBoard;
  }

  get showFinal(): boolean {
    return this._showFinal;
  }

  get player(): number {
    return this._player;
  }

  startGame(): void {
    this._showInit = false;
    this._showBoard = true;
  }

  play(posX: number, posY: number): void {
    if (this.board[posX][posY] !== this.EMPTY || this.triumph) {
      return; //invalid
    }

    this.board[posX][posY] = this._player;
    this.numMovement++;
    //this.triumph = this.endGame(posX, posY, this.board, this._player);
    this._player = (this._player === this.X) ? this.O : this.X;

    if(!this.triumph && this.numMovement < 9 ) {
      this.cpuPlay();
    }
    //vitória
    if(!this.triumph !== false ) {
      this._showFinal = true;
    }
    //empate
    if(!this.triumph && this.numMovement === 9){
      this._player = 0;
      this._showFinal = true;
    }
  }

  //verifica e retorno se o jogo terminou

  endGame( row: number, column: number, board: any, player: number) {
    let end: any = false;

    //valida linha
    if(board[row][0] === player && board[row][1] === player && board[row][2] === player) {
      end = [[row, 0], [row, 1], [row, 2]];
    }

    //valida coluna
    if(board[column][0] === player && board[column][1] === player && board[column][2] === player) {
      end = [[column, 0], [column, 1], [column, 2]];
    }

    //valida tabuleiro
    if(board[0][0] === player && board[1][1] === player && board[2][2] === player) {
      end = [[0, 0], [1, 1], [2, 2]];
    }

    if(board[0][2] === player && board[1][1] === player && board[2][0] === player) {
      end = [[0, 2], [1, 1], [2, 0]];
    }

    return end;
  }

  cpuPlay(): void {

    let move: number[] = this.getMove(this.O);

    if (move.length <= 0 ) {
      move = this.getMove(this.X);
    }

    if (move.length <= 0 ) {
      let moves: any = [];
      for(let i = 0; i<this.TAM_TAB; i++) {
        for(let j = 0; j< this.TAM_TAB; j++) {
          if(this.board[i][j] === this.EMPTY) {
            moves.push([i, j]);
          }
        }
      }

      let k = Math.floor((Math.random() * (moves.length - 1)));
      move = [moves[k][0], moves[k][1]];
    }

    this.board[move[0]][move[1]] = this._player;
    this.numMovement++;
    this.triumph = this.endGame(move[0], move[1], this.board, this._player);
    this._player = (this._player === this.X) ? this.O : this.X;

  }

  getMove(player: number): number[] {

    let tab = this.board;
    for (let rw = 0; rw < this.TAM_TAB; rw++) {
      for (let col = 0; col < this.TAM_TAB; col++) {
        if(tab[rw][col] !== this.EMPTY) {
          continue;
        }
        tab[rw][col] = player;
        if(this.endGame(rw, col, tab, player)){
          return [rw, col];
        }
        tab[rw][col] = this.EMPTY;
      }
    }
    return tab;
  }

  showX(posX: number, posY: number): boolean {
    return this.board[posX][posY] === this.X;
  }

}
