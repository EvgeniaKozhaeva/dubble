import {makeAutoObservable} from "mobx";

class TimerStore {
    counter = 10
    isTimerStarted = false

    constructor() {
        makeAutoObservable(this)
    }

    increaseTimer() {
        this.counter = this.counter - 1
    }

    startTimer() {
        this.isTimerStarted = true
    }
}

export default new TimerStore();