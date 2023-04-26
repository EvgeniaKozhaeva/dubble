import "./Score.css"
import {observer} from "mobx-react-lite"
import rootStore from "../../store/rootStore";

export const Score = observer(() => {
    return (
        <div className="base-circle">
            <svg className="base-circle-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <g className="inner-circle">
                    <circle className="outer-circle" cx="50" cy="50" r="45"/>
                </g>
            </svg>
            <span className="count-container"> {rootStore.scoreStore.count} </span>
        </div>
    )
})
