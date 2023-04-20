import {makeAutoObservable} from "mobx";

const keyNameStorage = "bestScore";

class ScoreStore {

    countLocalStorage = localStorage.getItem("Score")
    count = this.countLocalStorage ? +this.countLocalStorage : 0;

    constructor() {
        makeAutoObservable(this);
    }

    incrementCount(isResultCorrect: boolean | undefined): void {
        isResultCorrect && ++this.count
        localStorage.setItem("Score", this.count.toString())
    }

    setBestResult(): void {
        const bestResultStorage = localStorage.getItem(keyNameStorage);
        const bestResult = bestResultStorage ? +bestResultStorage : 0
        this.count > bestResult && localStorage.setItem(keyNameStorage, this.count.toString());
    }


    resetCount() {
        this.count = 0
    }
}

export default new ScoreStore();