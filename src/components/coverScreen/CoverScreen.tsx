import "./CoverScreen.css"
import "./NewGameButton.css"
import timerStore from "../../store/timerStore";
import scoreStore from "../../store/scoreStore";
import startScreenStore from "../../store/startScreenStore";
import finishScreenStore from "../../store/finishScreenStore";
import { observer } from "mobx-react-lite"
import { useEffect } from "react";
import cardStore from "../../store/cardStore";


export const StartScreen = observer(() => {
    const onClick = () => {
        startScreenStore.setIsScreenVisible(false);
        timerStore.startTimer()
        scoreStore.resetCount()
    }
    return (
        <div className={`cover-screen visible-${startScreenStore.isScreenVisible}`} onClick={onClick}>CLICK TO START</div>
    )
})

export const FinishScreen = observer(() => {
    const winMessage = `YOUR SCORE IS: ${scoreStore.count}. Best score is ${localStorage.getItem("bestScore")}`
    const onClick = () => {
        finishScreenStore.setIsScreenVisible(false);
        timerStore.resetTimer();
        timerStore.startTimer();
        scoreStore.resetCount();
    }
    useEffect(() => {
        if (timerStore.counter === 0) {
            scoreStore.setBestResult()
            finishScreenStore.setIsScreenVisible(true);
            cardStore.resetSelected()
        }
    }, [timerStore.counter])

    return (
        <div className={`cover-screen visible-${finishScreenStore.isScreenVisible}`}>{winMessage}
            <button className="new-game-button" onClick={onClick}>New Game</button>
        </div>
    )
})
