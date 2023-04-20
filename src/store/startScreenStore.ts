import {makeAutoObservable} from "mobx";

class StartScreenStore {
    isStartScreenVisibleLocalStorage = localStorage.getItem("isStartScreenVisible");
    isScreenVisible = this.isStartScreenVisibleLocalStorage === null ? true : (this.isStartScreenVisibleLocalStorage === "true")

    constructor() {
        makeAutoObservable(this);
    }

    setIsScreenVisible(isVisible: boolean): void {
        this.isScreenVisible = isVisible;
        localStorage.setItem("isStartScreenVisible", isVisible.toString());
    }
}

export default new StartScreenStore();
