import { makeAutoObservable, reaction } from "mobx";
import { LocalStorage, TIMER_SECONDS } from "./constants"

export class TimerStore {

    private timerLocalStorage = localStorage.getItem(LocalStorage.Timer);
    public isTimerStarted = localStorage.getItem(LocalStorage.IsTimerStarted) === "true";

    public counter = this.timerLocalStorage ? +this.timerLocalStorage : TIMER_SECONDS;

    constructor() {
        makeAutoObservable(this);
        reaction(() => this.counter, () => {
            localStorage.setItem(LocalStorage.Timer, this.counter.toString());
        });
        reaction(() => this.isTimerStarted, () => {
            localStorage.setItem(LocalStorage.IsTimerStarted, this.isTimerStarted.toString());
        })
    }

    increaseTimer(): void {
        this.counter = this.counter - 1;
    }

    startTimer(): void {
        this.isTimerStarted = true;
    }

    resetTimer(): void {
        this.counter = TIMER_SECONDS;
    }
}
