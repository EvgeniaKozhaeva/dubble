import "./Card.css"


interface CardIconProps {
    image: any;
    status: {}
    setStatus: () => void
}

export const CardIcon = ({ image, status, setStatus }: CardIconProps) => {
    return (
        <span className={`memory-icon-${status}`} onClick={setStatus} >
            <img className="image" src={image} alt="alt"/>
        </span>
    )
}