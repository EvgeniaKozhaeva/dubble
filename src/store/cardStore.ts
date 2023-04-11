import { makeAutoObservable } from "mobx";
import emoji_1 from "./emoji_1.png"
import emoji_2 from "./emoji_2.png"
import emoji_3 from "./emoji_3.png"
import emoji_4 from "./emoji_4.png"
import emoji_5 from "./emoji_5.png"
import emoji_6 from "./emoji_6.png"
import emoji_7 from "./emoji_7.png"
import emoji_8 from "./emoji_8.png"
import emoji_9 from "./emoji_9.png"

class CardsStore {
    rightCard = [
        {id: 1, img: emoji_1},
        {id: 2, img: emoji_2},
        {id: 3, img: emoji_3},
        {id: 4, img: emoji_4},
        {id: 5, img: emoji_5},
        {id: 6, img: emoji_6},
        {id: 7, img: emoji_7},
        {id: 8, img: emoji_8},
        {id: 9, img: emoji_9},
    ].sort(() => Math.random() - 0.5);
    leftCard = [
        {id: 1, img: emoji_1},
        {id: 2, img: emoji_2},
        {id: 3, img: emoji_3},
        {id: 4, img: emoji_4},
        {id: 5, img: emoji_5},
        {id: 6, img: emoji_6},
        {id: 7, img: emoji_7},
        {id: 8, img: emoji_8},
        {id: 9, img: emoji_9},
    ].sort(() => Math.random() - 0.5);
    selectedImages: Record<string, undefined | number> = {
        left: undefined,
        right: undefined,
    }

    constructor() {
        makeAutoObservable(this)
    }

    getRightCardImage() {
        return this.rightCard
    }
    getLeftCardImage() {
        return this.leftCard
    }

    setSelected(cardSide: "left"| "right", id: number) {
        if (this.selectedImages[cardSide] === id) {
            this.selectedImages[cardSide] = undefined
        } else {this.selectedImages[cardSide] = id}

    }

    compareImages() {
        if (this.selectedImages.left && this.selectedImages.right) {
            return this.selectedImages.left === this.selectedImages.right
        } else return false
    }


}

export default new CardsStore();