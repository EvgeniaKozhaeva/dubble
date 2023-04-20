import { makeAutoObservable } from "mobx";
import emoji_1 from "../images/emoji_1.png"
import emoji_2 from "../images/emoji_2.png"
import emoji_3 from "../images/emoji_3.png"
import emoji_4 from "../images/emoji_4.png"
import emoji_5 from "../images/emoji_5.png"
import emoji_6 from "../images/emoji_6.png"
import emoji_7 from "../images/emoji_7.png"
import emoji_8 from "../images/emoji_8.png"
import emoji_9 from "../images/emoji_9.png"
import emoji_10 from "../images/emoji_10.png"
import emoji_11 from "../images/emoji_11.png"
import emoji_12 from "../images/emoji_12.png"
import emoji_13 from "../images/emoji_13.png"
import emoji_14 from "../images/emoji_14.png"
import emoji_15 from "../images/emoji_15.png"
import emoji_16 from "../images/emoji_16.png"
import emoji_17 from "../images/emoji_17.png"
import emoji_18 from "../images/emoji_18.png"
import emoji_19 from "../images/emoji_19.png"

const IMAGES: Card[] = [
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

export type Card = {
    id: number,
    img: string
}

export type CardSide = "right" | "left";

class CardsStore {
    rightCard: Card[] = [];
    leftCard: Card[] = [];
    selectedImages: Record<CardSide, undefined | number> = {
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

    setSelected(cardSide: CardSide, id: number) {
        if (this.selectedImages[cardSide] === id) {
            this.selectedImages[cardSide] = undefined
        } else {this.selectedImages[cardSide] = id}

    }

    resetSelected() {
        this.selectedImages.right = undefined;
        this.selectedImages.left = undefined;
    }

    compareImages(): boolean | undefined {
        if (this.selectedImages.left && this.selectedImages.right) {
            return this.selectedImages.left === this.selectedImages.right
        }
        return undefined;
    }


}

export default new CardsStore();