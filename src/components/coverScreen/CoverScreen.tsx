import "./CoverScreen.css"
import "./NewGameButton.css"
import timerStore from "../../store/timerStore";
import scoreStore from "../../store/scoreStore";
import { observer } from "mobx-react-lite"
import {useEffect, useState} from "react";
import cardStore from "../../store/cardStore";


export const CoverScreen = observer(() => {
    const isVisibleLocalStorage = localStorage.getItem("isStartScreenVisible");
    const [isVisible, setIsVisible] = useState(isVisibleLocalStorage === null ? true : (isVisibleLocalStorage === "true" ? true : false));

    const onClick = () => {
        setIsVisible(false);
        localStorage.setItem("isStartScreenVisible", "false")
        timerStore.startTimer()
        scoreStore.resetCount()
    }
    return (
        <div className={`cover-screen visible-${isVisible}`} onClick={() => onClick()}> CLICK TO START </div>
    )
})

export const FinishScreen = observer(() => {
    const winMessage = `YOUR SCORE IS: ${scoreStore.count}. Best score is ${localStorage.getItem("bestScore")}`
    const [isVisible, setIsVisible] = useState(false);
    const onClick = () => {
        setIsVisible(false);
        timerStore.resetTimer()
        timerStore.startTimer()
        scoreStore.resetCount()
    }
    useEffect(() => {
        if (timerStore.counter === 0) {
            scoreStore.setBestResult()
            setIsVisible(true);
            cardStore.resetSelected()
        }
    }, [timerStore.counter])

    return (
        <div className={`cover-screen visible-${isVisible}`} > {winMessage}
            <button className="new-game-button" onClick={() => onClick()}> New Game </button>
        </div>
    )
})
