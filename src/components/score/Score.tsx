import "./Score.css"
import {useState} from "react";

export const Score = () => {
    let [score, setScore] = useState(0);
    function incrementCount(): void {
        setScore(++score);
    }
    return (
        <div className="score-container"  onClick={incrementCount}>
            <div className="number">
                <h2>Your score is:</h2>
                <h1>{score}</h1>
            </div>
        </div>
    )
}