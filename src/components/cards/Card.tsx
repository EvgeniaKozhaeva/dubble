import styles from "./Card.module.css"
import { CardIcon } from "./CardIcon";
import cardStore, {Card, CardSide} from "../../store/cardStore";
import scoreStore from "../../store/scoreStore";
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
            cardStore.resetSelected();
            cardStore.generateCards()
        }, 500);
    }, [scoreStore.count])

    return (
        <div className={cn(styles.cards, styles[`${cardSide}-cards`])}>

            { card.map((item) => (
                <CardIcon
                    key={item.id}
                    image={item.img}
                    isSelected={cardStore.selectedImages[cardSide] === item.id}
                    setStatus={() => {
                        cardStore.setSelected(cardSide, item.id)
                        scoreStore.incrementCount(cardStore.compareImages())
                    }}
                    isMatched={cardStore.compareImages()}
                />
            )) }
        </div>
)
})