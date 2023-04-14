import {makeAutoObservable} from "mobx";

class ScoreStore {

    count = 0;

    constructor() {
        makeAutoObservable(this);
    }

    incrementCount(isResultCorrect: boolean | undefined): void {
        if (isResultCorrect) {
            ++this.count
        }
    }

    resetCount() {
        this.count = 0
    }
}

export default new ScoreStore();