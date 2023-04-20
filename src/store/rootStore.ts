import { makeAutoObservable } from "mobx";

import { TimerStore } from "./timerStore";
import { ScoreStore } from "./scoreStore";
import { StartScreenStore } from "./startScreenStore";
import { FinishScreenStore } from "./finishScreenStore";
import { CardsStore } from "./cardStore";

class RootStore {

    timerStore = new TimerStore();
    scoreStore = new ScoreStore();
    startScreenStore = new StartScreenStore();
    finishScreenStore = new FinishScreenStore();
    cardStore = new CardsStore();

    constructor() {
        makeAutoObservable(this);
    }

    startGame() {
        this.timerStore.resetTimer();
        this.timerStore.startTimer();
        this.scoreStore.resetCount();
    }

    startGameStartScreen() {
        this.startScreenStore.setIsScreenVisible(false);
        this.startGame();
    }

    startGameFinishScreen() {
        this.finishScreenStore.setIsScreenVisible(false);
        this.startGame();
    }
}

export default new RootStore();
