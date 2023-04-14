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
import emoji_10 from "./emoji_10.png"
import emoji_11 from "./emoji_11.png"
import emoji_12 from "./emoji_12.png"
import emoji_13 from "./emoji_13.png"
import emoji_14 from "./emoji_14.png"
import emoji_15 from "./emoji_15.png"
import emoji_16 from "./emoji_16.png"
import emoji_17 from "./emoji_17.png"
import emoji_18 from "./emoji_18.png"
import emoji_19 from "./emoji_19.png"

const IMAGES = [
    {id: 1, img: emoji_1},
    {id: 2, img: emoji_2},
    {id: 3, img: emoji_3},
    {id: 4, img: emoji_4},
    {id: 5, img: emoji_5},
    {id: 6, img: emoji_6},
    {id: 7, img: emoji_7},
    {id: 8, img: emoji_8},
    {id: 9, img: emoji_9},
    {id: 10, img: emoji_10},
    {id: 11, img: emoji_11},
    {id: 12, img: emoji_12},
    {id: 13, img: emoji_13},
    {id: 14, img: emoji_14},
    {id: 15, img: emoji_15},
    {id: 16, img: emoji_16},
    {id: 17, img: emoji_17},
    {id: 18, img: emoji_18},
    {id: 19, img: emoji_19},
];

type Card = {
    id: number,
    img: any
}

class CardsStore {
    rightCard: Card[] = [];
    leftCard: Card[] = [];
    selectedImages: Record<string, undefined | number> = {
        left: undefined,
        right: undefined,
    }

    constructor() {
        makeAutoObservable(this)
    }

    generateCards() {
        const images = [...IMAGES].sort(() => Math.random() - 0.5);
        const uniqImage = images.pop() as {id: number, img: any};
        this.rightCard = images.slice(1, 9);
        this.leftCard = images.slice(10, 19);
        this.rightCard.push(uniqImage);
        this.leftCard.push(uniqImage);
        this.leftCard.sort(() => Math.random() - 0.5)
        this.rightCard.sort(() => Math.random() - 0.5)
    }

    setSelected(cardSide: "left"| "right", id: number) {
        if (this.selectedImages[cardSide] === id) {
            this.selectedImages[cardSide] = undefined
        } else {this.selectedImages[cardSide] = id}

    }

    resetSelected() {
        this.selectedImages.right = undefined;
        this.selectedImages.left = undefined;
    }

    compareImages() {
        if (this.selectedImages.left && this.selectedImages.right) {
            return this.selectedImages.left === this.selectedImages.right
        }
    }


}

export default new CardsStore();