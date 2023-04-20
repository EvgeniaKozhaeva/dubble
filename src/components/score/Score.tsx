import "./Score.css"
import rootStore from "../../store/rootStore";
import {observer} from "mobx-react-lite"

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
