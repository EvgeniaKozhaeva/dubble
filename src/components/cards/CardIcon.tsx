import "./Card.css"


interface CardIconProps {
    image: any;
    status: {}
    isMatched: boolean | undefined
    setStatus: () => void
}

export const CardIcon = ({ image, status, setStatus, isMatched }: CardIconProps) => {
    const setIsMatched = isMatched !== undefined ? `-is-matched-${isMatched}` : "";
    return (
        <span className={`memory-icon-${status}${setIsMatched}`} onClick={setStatus} >
            <img className="image" src={image} alt="alt"/>
        </span>
    )
}