import "./Card.css"
import {CardIcon} from "./CardIcon";

interface CardProps {
    cardSide: "right" | "left"
}

export const CardCommon = ({ cardSide }: CardProps) => {
    return (
        <div className={`cards ${cardSide}-card`}>
            <div className="memory-icons-line">
                <CardIcon/>
                <CardIcon/>
                <CardIcon/>
            </div>
            <div className="memory-icons-line">
                <CardIcon/>
                <CardIcon/>
                <CardIcon/>
            </div>
            <div className="memory-icons-line">
                <CardIcon/>
                <CardIcon/>
                <CardIcon/>
            </div>
        </div>
)
}