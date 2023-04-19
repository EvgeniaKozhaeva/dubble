import {makeAutoObservable} from "mobx";

const keyNameStorage = "bestScore";

class ScoreStore {

    countLocalStarage = localStorage.getItem("Score")
    count = this.countLocalStarage !== null ? +this.countLocalStarage : 0;

    constructor() {
        makeAutoObservable(this);
    }

    incrementCount(isResultCorrect: boolean | undefined): void {
        isResultCorrect && ++this.count
        localStorage.setItem("Score", this.count.toString())
    }

    setBestResult(): void {
        const bestResultStorage = localStorage.getItem(keyNameStorage);
        const bestResult = bestResultStorage !== null ? +bestResultStorage : 0
        this.count > bestResult && localStorage.setItem(keyNameStorage, JSON.stringify(this.count));
    }


    resetCount() {
        this.count = 0
    }
}

export default new ScoreStore();