import "./SecondsAnimation.css"
import { observer } from "mobx-react-lite"
import React from "react";
import rootStore from "../../store/rootStore";
import { Circle } from "../circle/Circle";

export const Timer = observer(() => {
    const isAnimation = rootStore.timerStore.counter !== 0;
    return (
        <div className="circle-container">
            <div className="base-circle">
                <Circle/>
                <div className="timer second">
                    <div className="hand"><span className={`animation-${isAnimation}`}/></div>
                    <div className="hand"><span className={`animation-${isAnimation}`}/></div>
                </div>
                <span className="count-container"> {rootStore.timerStore.counter} </span>
            </div>
            <div className="circle-title">TIMER</div>
        </div>
    )
})
