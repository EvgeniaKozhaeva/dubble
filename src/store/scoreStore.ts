import { makeAutoObservable, reaction } from "mobx";
import { GameOption } from "./cardStore";
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

    setBestResult(selectedOption: GameOption): void {
        const bestResult = this.getBestResult(selectedOption);
        this.count > bestResult && localStorage.setItem(selectedOption.bestResultStorageKey, this.count.toString());
    }

    getBestResult(selectedOption: GameOption): number {
        const bestResultStorage = localStorage.getItem(selectedOption.bestResultStorageKey);
        return bestResultStorage ? +bestResultStorage : 0;
    }

    resetCount() {
        this.count = 0;
    }
}
