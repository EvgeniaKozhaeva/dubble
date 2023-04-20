import { makeAutoObservable } from "mobx";
import { LocalStorage } from "./constants"

const SECONDS = 60;

class TimerStore {

    timerLocalStorage = localStorage.getItem(LocalStorage.Timer);
    isTimerStarted = localStorage.getItem(LocalStorage.IsTimerStarted) === "true";

    counter = this.timerLocalStorage ? +this.timerLocalStorage : SECONDS;

    constructor() {
        makeAutoObservable(this);
    }

    increaseTimer(): void {
        this.counter = this.counter - 1;
        localStorage.setItem(LocalStorage.Timer, this.counter.toString());
    }

    startTimer(): void {
        this.isTimerStarted = true;
        localStorage.setItem(LocalStorage.IsTimerStarted, this.isTimerStarted.toString());
    }

    resetTimer(): void {
        this.counter = SECONDS;
    }
}

export default new TimerStore();
