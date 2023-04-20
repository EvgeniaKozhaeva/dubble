import "./CoverScreen.css"
import "./NewGameButton.css"
import rootStore from "../../store/rootStore";
import { observer } from "mobx-react-lite"

export const StartScreen = observer(() => {
    const onClick = () => {
        rootStore.startGameStartScreen();
    }
    return (
        <div className={`cover-screen visible-${rootStore.startScreenStore.isScreenVisible}`} onClick={onClick}>CLICK TO START</div>
    )
})

export const FinishScreen = observer(() => {
    const winMessage = `YOUR SCORE IS: ${rootStore.scoreStore.count}. Best score is ${rootStore.scoreStore.getBestResult()}`
    const onClick = () => {
        rootStore.startGameFinishScreen();
    }

    return (
        <div className={`cover-screen visible-${rootStore.finishScreenStore.isScreenVisible}`}>{winMessage}
            <button className="new-game-button" onClick={onClick}>New Game</button>
        </div>
    )
})
