import styles from "./Card.module.css"
import { CardIcon } from "./CardIcon";
import { Card, CardSide } from "../../store/cardStore";
import rootStore from "../../store/rootStore";
import cn from 'classnames'

import {observer} from "mobx-react-lite"
import {useEffect} from "react";

interface CardProps {
    cardSide: CardSide
    card: Card[];
}

export const CardCommon = observer(({ cardSide, card }: CardProps) => {
    useEffect(() => {
        setTimeout(() => {
            rootStore.cardStore.resetSelected();
            rootStore.cardStore.generateCards()
        }, 500);
    }, [rootStore.scoreStore.count])

    return (
        <div className={cn(styles.cards, styles[`${cardSide}-cards`])}>

            { card.map((item) => (
                <CardIcon
                    key={item.id}
                    image={item.img}
                    isSelected={rootStore.cardStore.selectedImages[cardSide] === item.id}
                    setStatus={() => {
                        rootStore.cardStore.setSelected(cardSide, item.id)
                        rootStore.scoreStore.incrementCount(rootStore.cardStore.compareImages())
                    }}
                    isMatched={rootStore.cardStore.compareImages()}
                />
            )) }
        </div>
)
})