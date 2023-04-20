import { makeAutoObservable } from "mobx";
import { LocalStorage } from "./constants";

export class StartScreenStore {

    isStartScreenVisibleLocalStorage = localStorage.getItem(LocalStorage.IsStartScreenVisible);

    isScreenVisible = this.isStartScreenVisibleLocalStorage === null ? true : (this.isStartScreenVisibleLocalStorage === "true");

    constructor() {
        makeAutoObservable(this);
    }

    setIsScreenVisible(isVisible: boolean): void {
        this.isScreenVisible = isVisible;
        localStorage.setItem(LocalStorage.IsStartScreenVisible, isVisible.toString());
    }
}
