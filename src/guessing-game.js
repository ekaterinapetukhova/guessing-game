class GuessingGame {
  constructor() {}

  setRange(min, max) {
    this.min = min;
    this.max = max;
  }

  guess() {
    const mid = Math.round((this.min + this.max) / 2);

    return mid;
  }

  lower() {
    this.max = this.guess();
    this.max - 1;
  }

  greater() {
    this.min = this.guess();
    this.min  + 1;
  }
}
module.exports = GuessingGame;
