import "./NewGameButton.css"

interface NewGameButtonProps {
    handleClick: () => void;
}
export const NewGameButton = ({handleClick}: NewGameButtonProps) => {
    return (
        <button className="game-button" onClick={handleClick}>New Game</button>
    )
}
