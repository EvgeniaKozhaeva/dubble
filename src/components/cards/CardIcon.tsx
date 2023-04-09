import "./Card.css"
import image from "./Smile1.png"

export const CardIcon = () => {
    return (
        <span className="memory-icon">
            <img className="image" src={image} alt="alt"/>
        </span>
    )
}