import "./Card.css"

export const FirstCard = () => {
    return (
        <div className="cards first-card"> First Card </div>
    )
}

export const SecondCard = () => {
    return (
        <div className="cards second-card"> Second Card </div>
    )
}

export const Cards = () => {
    return (
        <div className="cards-container">
            <FirstCard></FirstCard>
            <SecondCard></SecondCard>
        </div>
    )
}