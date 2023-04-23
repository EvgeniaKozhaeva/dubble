import cn from "classnames"
import { observer } from "mobx-react-lite"
import styles from "./Card.module.css"
import { CardIcon } from "./CardIcon";
import rootStore from "../../store/rootStore";
import { Card, CardSide } from "../../store/types";

interface CardProps {
    cardSide: CardSide
    card: Card[];
}

export const CardCommon = observer(({ cardSide, card }: CardProps) => {
    return (
        <div className={cn(styles.cards, styles[`${cardSide}-cards`])}>
            { card.map((item) => (
                <CardIcon
                    key={item.id}
                    image={item.img}
                    isSelected={rootStore.cardStore.selectedImages[cardSide] === item.id}
                    setStatus={() => {
                        rootStore.cardStore.setSelected(cardSide, item.id)
                        rootStore.cardStore.compareImages() && rootStore.scoreStore.incrementCount()
                    }}
                    isMatched={rootStore.cardStore.compareImages()}
                />
            )) }
        </div>
)
})