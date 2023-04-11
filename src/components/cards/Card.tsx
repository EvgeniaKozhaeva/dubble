import "./Card.css"
import { CardIcon } from "./CardIcon";
import cardStore from "../../store/cardStore";
import scoreStore from "../../store/scoreStore";

import {observer} from "mobx-react-lite"

interface CardProps {
    cardSide: "right" | "left"
    card: any[];
}

export const CardCommon = observer(({ cardSide, card }: CardProps) => {
    return (
        <div className={`cards ${cardSide}-card`}>

            { card.map((item) => (
                <CardIcon
                    key={item.id}
                    image={item.img}
                    status={cardStore.selectedImages[cardSide] === item.id ? "active" : ""}
                    setStatus={() => {
                        cardStore.setSelected(cardSide, item.id)
                        scoreStore.incrementCount(cardStore.compareImages())
                    }}/>
            )) }
        </div>
)
})