import "./Score.css"
import {observer} from "mobx-react-lite"
import rootStore from "../../store/rootStore";

export const Score = observer(() => {
    return (
        <div className="score-container">
            <div className="number">
                <h2>Your score is:</h2>
                <h1>{rootStore.scoreStore.count}</h1>
            </div>
        </div>
    )
})
