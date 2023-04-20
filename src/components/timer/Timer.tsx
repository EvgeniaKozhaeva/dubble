import "./Timer.css"
import rootStore from "../../store/rootStore";
import { observer } from "mobx-react-lite"
import { useEffect } from "react";

export const Timer = observer(() => {
    useEffect(() => {
        rootStore.timerStore.isTimerStarted
        && rootStore.timerStore.counter > 0
        && setTimeout(() => rootStore.timerStore.increaseTimer(), 1000);
        }, [rootStore.timerStore.isTimerStarted, rootStore.timerStore.counter]);

    return (
        <div className="base-timer">
            <svg className="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <g className="base-timer__circle">
                    <circle className="base-timer__path-elapsed" cx="50" cy="50" r="45"/>
                </g>
            </svg>
            <span className="timer-container"> {rootStore.timerStore.counter} </span>
        </div>
    )
})