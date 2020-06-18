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

  get isMoving() {
    return this._isMoving;
  }

  set isMoving(bool) {
    this._isMoving = bool;
  }

  goUp() {
    this._currentFloor += 1;
  }

  goDown() {
    this._currentFloor -= 1;
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
    const current = hamsterElev.currentFloor;
    const toFloor = button.innerHTML;
    if (
      toFloor > current &&
      toFloor <= hamsterElev.maxFloor &&
      !hamsterElev.isMoving
    ) {
      const elevating = (count) => {
        hamsterElev.isMoving = true;
        if (count < toFloor - current) {
          setTimeout(() => {
            count++;
            hamsterElev.goUp();
            modifyFloorTitle(hamsterElev.currentFloor);
            elevating(count);
          }, 1000);
        } else {
          hamsterElev.isMoving = false;
        }
      };
      elevating(0);
    } else if (
      toFloor < current &&
      toFloor >= hamsterElev.minFloor &&
      !hamsterElev.isMoving
    ) {
      const lowering = (count) => {
        hamsterElev.isMoving = true;
        if (count < current - toFloor) {
          setTimeout(() => {
            count++;
            hamsterElev.goDown();
            modifyFloorTitle(hamsterElev.currentFloor);
            lowering(count);
          }, 1000);
        } else {
          hamsterElev.isMoving = false;
        }
      };
      lowering(0);
    }
  })
);
