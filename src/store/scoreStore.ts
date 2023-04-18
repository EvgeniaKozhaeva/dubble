import {makeAutoObservable} from "mobx";

const keyNameStorage = "bestScore";

class ScoreStore {

    count = 0;

    constructor() {
        makeAutoObservable(this);
    }

    incrementCount(isResultCorrect: boolean | undefined): void {
        isResultCorrect && ++this.count
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