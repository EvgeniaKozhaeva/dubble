import { makeAutoObservable } from "mobx";
import { Card, CardSide } from "./types";
import { IMAGES } from "../images";

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

    generateCards(imagesInCard = 9) {
        const images = [...IMAGES].sort(() => Math.random() - 0.5);
        const uniqImage = images.pop() as {id: number, img: string};
        this.rightCard = images.slice(0, imagesInCard-1);
        this.leftCard = images.slice(imagesInCard+1, imagesInCard*2);
        this.addImagesToCardCommon(this.rightCard, uniqImage);
        this.addImagesToCardCommon(this.leftCard, uniqImage);
    }

    addImagesToCardCommon(card: Card[], uniqImage: Card) {
        card.push(uniqImage);
        card.sort(() => Math.random() - 0.5)
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
