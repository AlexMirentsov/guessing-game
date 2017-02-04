class GuessingGame {
    constructor() {
        var _min;
        var _max;
        var _number;
    }

    setRange(min, max) {
        this._max = max;
        this._min = min;
    }

    guess() {
        this._number = Math.ceil((this._min + this._max) / 2);
        return this._number;
    }

    lower() {
        this._max = this._number;
    }

    greater() {

        this._min = this._number;
    }
}

module.exports = GuessingGame;