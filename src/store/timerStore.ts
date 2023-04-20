import {makeAutoObservable} from "mobx";

const SECONDS = 60;

class TimerStore {
    timerLocalStorage = localStorage.getItem("Timer");
    counter = this.timerLocalStorage ? +this.timerLocalStorage : SECONDS;
    isTimerStarted = localStorage.getItem("IsTimerStarted") === "true";

    constructor() {
        makeAutoObservable(this);
    }

    increaseTimer() {
        this.counter = this.counter - 1;
        localStorage.setItem("Timer", this.counter.toString());
    }

    startTimer() {
        this.isTimerStarted = true;
        localStorage.setItem("IsTimerStarted", this.isTimerStarted.toString());
    }

    resetTimer() {
        this.counter = SECONDS;
    }
}

export default new TimerStore();