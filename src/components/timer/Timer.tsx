import "./Timer.css"
import { useState, useEffect } from "react";

export const Timer = () => {
    const [counter, setCounter] = useState(60);

    useEffect(() => {
        counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    }, [counter]);
    return (
        <div className="base-timer">
            <svg className="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <g className="base-timer__circle">
                    <circle className="base-timer__path-elapsed" cx="50" cy="50" r="45"/>
                </g>
            </svg>
            <span className="timer-container"> {counter} </span>
        </div>
    )
}