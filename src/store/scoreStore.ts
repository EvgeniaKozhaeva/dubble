import { makeAutoObservable } from "mobx";
import { LocalStorage } from "./constants";

class ScoreStore {

    countLocalStorage = localStorage.getItem(LocalStorage.Score);

    count = this.countLocalStorage ? +this.countLocalStorage : 0;

    constructor() {
        makeAutoObservable(this);
    }

    incrementCount(isResultCorrect: boolean | undefined): void {
        isResultCorrect && ++this.count;
        localStorage.setItem(LocalStorage.Score, this.count.toString());
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

export default new ScoreStore();