import "./CoverScreen.css"
import "./NewGameButton.css"
import rootStore from "../../store/rootStore";
import { observer } from "mobx-react-lite"

export const StartScreen = observer(() => {
    const onClick = () => {
        rootStore.startGameStartScreen();
    }

    if (rootStore.startScreenStore.isScreenVisible) {
        return (
            <div
                className={`cover-screen`}
                onClick={onClick}>CLICK TO START
            </div>
        )
    } else {
        return null;
    }
})

export const FinishScreen = observer(() => {
    const winMessage = `YOUR SCORE IS: ${rootStore.scoreStore.count}. Best score is ${rootStore.scoreStore.getBestResult()}`
    const onClick = () => {
        rootStore.startGameFinishScreen();
    }

    if (rootStore.finishScreenStore.isScreenVisible) {
        return (
            <div className={`cover-screen`}>{winMessage}
                <button className="new-game-button" onClick={onClick}>New Game</button>
            </div>
        )
    } else {
        return null;
    }
})
