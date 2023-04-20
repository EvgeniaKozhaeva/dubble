import "./CoverScreen.css"
import "./NewGameButton.css"
import rootStore from "../../store/rootStore";
import { observer } from "mobx-react-lite"
import { useEffect } from "react";

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
    useEffect(() => {
        if (rootStore.timerStore.counter === 0) {
            rootStore.scoreStore.setBestResult();
            rootStore.finishScreenStore.setIsScreenVisible(true);
            rootStore.cardStore.resetSelected();
        }
    }, [rootStore.timerStore.counter])

    return (
        <div className={`cover-screen visible-${rootStore.finishScreenStore.isScreenVisible}`}>{winMessage}
            <button className="new-game-button" onClick={onClick}>New Game</button>
        </div>
    )
})
