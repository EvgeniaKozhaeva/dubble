import { makeAutoObservable } from "mobx";
import { LocalStorage } from "./constants";

class FinishScreenStore {

    isFinishScreenVisibleLocalStorage = localStorage.getItem(LocalStorage.IsFinishScreenVisible);
    
    isScreenVisible = this.isFinishScreenVisibleLocalStorage === null ? false : (this.isFinishScreenVisibleLocalStorage === "true");

    constructor() {
        makeAutoObservable(this);
    }

    setIsScreenVisible(isVisible: boolean): void {
        this.isScreenVisible = isVisible;
        localStorage.setItem(LocalStorage.IsFinishScreenVisible, isVisible.toString());
    }
}

export default new FinishScreenStore();
