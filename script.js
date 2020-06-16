// Creation of the Elevator class
class Elevator {
  constructor() {
    this._minFloor = -1;
    this._maxFloor = 7;
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

// Creation of Mr Hamster's Elevator
const HamsterElev = new Elevator();

// Creation of the keyboard
const myButtons = document.getElementById('my-buttons');
const floors = [];
for (let i = HamsterElev.minFloor; i <= HamsterElev.maxFloor; i++) {
  floors.push(i);
}
const buttonsHTML = floors.map((floor) => `<button>${floor}</button>`).join('');
myButtons.innerHTML = buttonsHTML;
