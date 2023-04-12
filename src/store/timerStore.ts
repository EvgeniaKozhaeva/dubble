import {makeAutoObservable} from "mobx";

const SECONDS = 60;

class TimerStore {
    counter = SECONDS
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

    resetTimer() {
        this.counter = SECONDS
    }
}

export default new TimerStore();