import { observer } from "mobx-react-lite"
import React from "react";
import rootStore from "../../store/rootStore";
import { Circle } from "../circle/Circle";

export const Score = observer(() => {
    return (
        <div className="circle-container">
            <div className="circle-title">SCORE</div>
            <div className="base-circle">
                <Circle/>
                <span className="count-container"> {rootStore.scoreStore.count} </span>
            </div>
        </div>
    )
})
