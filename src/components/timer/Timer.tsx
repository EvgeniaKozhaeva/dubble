import "../../Circle.css"
import "./SecondsAnimation.css"
import { observer } from "mobx-react-lite"
import React from "react";
import rootStore from "../../store/rootStore";

export const Timer = observer(() => {
    const isAnimation = rootStore.timerStore.counter !== 0;
    return (
        <div className="base-circle">
            <svg className="base-circle-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <g className="inner-circle">
                    <circle className="outer-circle" cx="50" cy="50" r="45"/>
                </g>
            </svg>
            <div className="timer second">
                <div className="hand"><span className={`animation-${isAnimation}`}/></div>
                <div className="hand"><span className={`animation-${isAnimation}`}/></div>
            </div>
            <span className="count-container"> {rootStore.timerStore.counter} </span>
        </div>
    )
})
