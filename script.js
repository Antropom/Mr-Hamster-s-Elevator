// Creation of the Elevator class
class Elevator {
  constructor(minFloor, maxFloor) {
    this._minFloor = minFloor;
    this._maxFloor = maxFloor;
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
const hamsterElev = new Elevator(-1, 7);

// Creation of the keyboard
const myButtons = document.getElementById('my-buttons');
const floors = [];
for (let i = hamsterElev.minFloor; i <= hamsterElev.maxFloor; i++) {
  floors.push(i);
}
const buttonsHTML = floors
  .map((floor) => `<button class="btn">${floor}</button>`)
  .join('');
myButtons.innerHTML = buttonsHTML;

// Current floor in HTML title
const modifyFloorTitle = (floor) => {
  const title = document.getElementById('title');
  title.innerHTML = `You're currently on the floor : ${floor}`;
};

document.body.onload = modifyFloorTitle(hamsterElev.currentFloor);

// Change current floor when clicking on the buttons
document.querySelectorAll('.btn').forEach((button) =>
  button.addEventListener('click', () => {
    hamsterElev.toFloor(button.innerHTML);
    modifyFloorTitle(hamsterElev.currentFloor);
  })
);
