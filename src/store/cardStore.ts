import { makeAutoObservable } from "mobx";
import { IMAGES } from "../images";
import { Card, CardSide } from "./types";

const defaultSelectedImages = {
    left: undefined,
    right: undefined,
}

export class CardsStore {
    rightCard: Card[] = [];
    leftCard: Card[] = [];
    selectedImages: Record<CardSide, undefined | number> = defaultSelectedImages;

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
        this.selectedImages = defaultSelectedImages;
    }

    compareImages(): boolean | undefined {
        if (this.selectedImages.left && this.selectedImages.right) {
            return this.selectedImages.left === this.selectedImages.right
        }
        return undefined;
    }
}
