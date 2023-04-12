import "./CoverScreen.css"
import timerStore from "../../store/timerStore";
import scoreStore from "../../store/scoreStore";
import { observer } from "mobx-react-lite"
import {useEffect, useState} from "react";


export const CoverScreen = observer(() => {
    const [isVisible, setIsVisible] = useState(true);
    const onClick = () => {
        setIsVisible(false);
        timerStore.startTimer()
        scoreStore.resetCount()
    }
    return (
        <div className={`cover-screen visible-${isVisible}`} onClick={() => onClick()}> CLICK TO START </div>
    )
})

export const FinishScreen = observer(() => {
    const winMessage = `YOUR SCORE IS: ${scoreStore.count}`
    const [isVisible, setIsVisible] = useState(false);
    const onClick = () => {
        setIsVisible(false);
        timerStore.resetTimer()
        timerStore.startTimer()
        scoreStore.resetCount()
    }
    useEffect(() => {timerStore.counter === 0 && setIsVisible(true)}, [timerStore.counter])
    return (
        <div className={`cover-screen visible-${isVisible}`} > {winMessage}
            <button className="new-game-button" onClick={() => onClick()}> New Game </button>
        </div>
    )
})