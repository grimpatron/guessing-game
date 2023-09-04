class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.minValue = min;
        this.maxValue = max;
    }

    guess() {
        this.currentValue = this.maxValue - this.minValue;
        this.currentValue = Math.floor(this.currentValue / 2);
        this.currentValue = this.maxValue - this.currentValue;
        return this.currentValue;
    }

    lower() {
        this.maxValue = this.currentValue;
    }

    greater() {
        this.minValue = this.currentValue;
    }
}

module.exports = GuessingGame;
