import { makeAutoObservable, reaction } from "mobx";
import { LocalStorage } from "./constants";

export class ScoreStore {

    countLocalStorage = localStorage.getItem(LocalStorage.Score);

    count = this.countLocalStorage ? +this.countLocalStorage : 0;

    constructor() {
        makeAutoObservable(this);
        reaction(() => this.count, () => {
            localStorage.setItem(LocalStorage.Score, this.count.toString());
        });
    }

    incrementCount(): void {
        ++this.count;
    }

    setBestResult(): void {
        const bestResultStorage = localStorage.getItem(LocalStorage.BestScore);
        const bestResult = bestResultStorage ? +bestResultStorage : 0
        this.count > bestResult && localStorage.setItem(LocalStorage.BestScore, this.count.toString());
    }

    getBestResult() {
        return localStorage.getItem(LocalStorage.BestScore);
    }

    resetCount() {
        this.count = 0;
    }
}
