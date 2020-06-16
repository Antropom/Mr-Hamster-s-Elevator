class Elevator {
  constructor() {
    this._minFloor = -1;
    this._maxFloor = 15;
    this._currentFloor = 0;
  }

  get currentFloor() {
    return this._currentFloor;
  }

  get minFloor() {
    return this._minFloor;
  }

  get maxFloor() {
    return this._maxFloor;
  }

  goUP(val) {
    this._currentFloor += val;
    console.log(`New Floor : ${this._currentFloor}`);
  }

  goDown(val) {
    this._currentFloor -= val;
    console.log(`New Floor : ${this._currentFloor}`);
  }

  toFloor(val) {
    const current = this._currentFloor;
    if (val > current && val <= this._maxFloor) {
      this.goUP(val - current);
    } else if (val < current && val >= this._minFloor) {
      this.goDown(current - val);
    }
  }
}

const elev = new Elevator();
elev.toFloor(6);
elev.toFloor(8);
elev.toFloor(2);
elev.toFloor(-1);
elev.toFloor(22);
