import { makeAutoObservable } from "mobx";

class FinishScreenStore {

    isFinishScreenVisibleLocalStorage = localStorage.getItem("isFinishScreenVisible");
    
    isScreenVisible = this.isFinishScreenVisibleLocalStorage === null ? false : (this.isFinishScreenVisibleLocalStorage === "true");

    constructor() {
        makeAutoObservable(this);
    }

    setIsScreenVisible(isVisible: boolean): void {
        this.isScreenVisible = isVisible;
        localStorage.setItem("isFinishScreenVisible", isVisible.toString());
    }
}

export default new FinishScreenStore();
