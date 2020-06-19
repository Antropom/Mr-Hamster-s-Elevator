// Creation of the Elevator class
class Elevator {
  constructor(minFloor, maxFloor) {
    this._minFloor = minFloor;
    this._maxFloor = maxFloor;
    this._currentFloor = 0;
    this._isMoving = false;
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

  goUp() {
    this._currentFloor += 1;
  }

  goDown() {
    this._currentFloor -= 1;
  }

  toFloor(val) {
    const current = this._currentFloor;
    if (val > current && val <= this._maxFloor && !this._isMoving) {
      const elevating = (count) => {
        this._isMoving = true;
        if (count < val - current) {
          setTimeout(() => {
            count++;
            this.goUp();
            modifyFloorTitle(hamsterElev.currentFloor);
            elevating(count);
          }, 1000);
        } else {
          this._isMoving = false;
        }
      };
      elevating(0);
    } else if (val < current && val >= this._minFloor && !this._isMoving) {
      const lowering = (count) => {
        this._isMoving = true;
        if (count < current - val) {
          setTimeout(() => {
            count++;
            this.goDown();
            modifyFloorTitle(hamsterElev.currentFloor);
            lowering(count);
          }, 1000);
        } else {
          this._isMoving = false;
        }
      };
      lowering(0);
    }
  }
}

// Creation of Mr Hamster's Elevator
const hamsterElev = new Elevator(-1, 7);

// Creation of the keyboard
const myButtons = document.getElementById('my-buttons');
const floors = [];
for (let i = hamsterElev.maxFloor; i >= hamsterElev.minFloor; i--) {
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
  })
);
