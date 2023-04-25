import "./Timer.css"
import { observer } from "mobx-react-lite"
import rootStore from "../../store/rootStore";

export const Timer = observer(() => {
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
