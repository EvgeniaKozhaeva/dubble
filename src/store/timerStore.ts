import { makeAutoObservable } from "mobx";

const SECONDS = 60;

class TimerStore {

    timerLocalStorage = localStorage.getItem("Timer");
    isTimerStarted = localStorage.getItem("IsTimerStarted") === "true";

    counter = this.timerLocalStorage ? +this.timerLocalStorage : SECONDS;

    constructor() {
        makeAutoObservable(this);
    }

    increaseTimer(): void {
        this.counter = this.counter - 1;
        localStorage.setItem("Timer", this.counter.toString());
    }

    startTimer(): void {
        this.isTimerStarted = true;
        localStorage.setItem("IsTimerStarted", this.isTimerStarted.toString());
    }

    resetTimer(): void {
        this.counter = SECONDS;
    }
}

export default new TimerStore();
