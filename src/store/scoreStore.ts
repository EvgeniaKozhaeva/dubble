import {makeAutoObservable} from "mobx";

class ScoreStore {

    count = 0;

    constructor() {
        makeAutoObservable(this);
    }

    incrementCount(isResultCorrect: boolean): void {
        if (isResultCorrect) {
            ++this.count
        }
    }
}

export default new ScoreStore();