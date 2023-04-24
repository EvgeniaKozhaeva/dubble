import {makeAutoObservable, reaction} from "mobx";
import {LocalStorage} from "./constants";
import { Card, CardSide } from "./types";
import { IMAGES } from "../images";

type GameOption = {
    id: number,
    imageInRow: number,
    imageAmount: number,
}

const defaultSelectedImages = {
    left: undefined,
    right: undefined,
};

export const gameOptions: GameOption[] = [
    {id: 1, imageInRow: 3, imageAmount: 9},
    {id: 2, imageInRow: 2, imageAmount: 4},
];

const defaultGameOption = gameOptions[0];

const getOptionById = (id: number | string): GameOption => gameOptions.find((option) => option.id === +id) as GameOption;

export class CardsStore {
    public rightCard: Card[] = [];
    public leftCard: Card[] = [];
    private gameOptionLocalStorage = localStorage.getItem(LocalStorage.SelectedGameOptionId);
    public selectedGameOption = this.gameOptionLocalStorage ? getOptionById(this.gameOptionLocalStorage) : defaultGameOption;
    public selectedImages: Record<CardSide, undefined | number> = defaultSelectedImages;

    constructor() {
        makeAutoObservable(this)
        reaction(() => this.selectedGameOption, () => {
            localStorage.setItem(LocalStorage.SelectedGameOptionId, this.selectedGameOption.id.toString());
        });
    }

    generateCards() {
        const imagesInCard = this.selectedGameOption.imageAmount;
        const images = [...IMAGES].sort(() => Math.random() - 0.5);
        const uniqImage = images.pop() as {id: number, img: string};
        this.rightCard = images.slice(0, imagesInCard-1);
        this.leftCard = images.slice(imagesInCard+1, imagesInCard*2);
        this.addImagesToCardCommon(this.rightCard, uniqImage);
        this.addImagesToCardCommon(this.leftCard, uniqImage);
    }

    addImagesToCardCommon(card: Card[], uniqImage: Card): void {
        card.push(uniqImage);
        card.sort(() => Math.random() - 0.5)
    }

    setSelected(cardSide: CardSide, id: number): void {
        if (this.selectedImages[cardSide] === id) {
            this.selectedImages[cardSide] = undefined
        } else {this.selectedImages[cardSide] = id}

    }

    resetSelected(): void {
        this.selectedImages = defaultSelectedImages;
    }

    compareImages(): boolean | undefined {
        if (this.selectedImages.left && this.selectedImages.right) {
            return this.selectedImages.left === this.selectedImages.right
        }
        return undefined;
    }

    setSelectedGameOption(id: number): void {
        const selectedOption = gameOptions.find((option) => option.id === id);
        selectedOption && (this.selectedGameOption = selectedOption);
    }
}
