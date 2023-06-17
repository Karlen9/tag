export class TagCell {
  private _row: number
  private _col: number
  private _room: number

  constructor(room: number, col: number, row: number) {
    this._row = row
    this._col = col
    this._room = room
  }

  set room(room: number) {
    this._room = room
  }

  set col(col: number) {
    this._col = col
  }

  set row(row: number) {
    this._row = row
  }

  getRoom() {
    return this._room
  }

  getX() {
    return this._col
  }

  getY() {
    return this._row
  }
}
