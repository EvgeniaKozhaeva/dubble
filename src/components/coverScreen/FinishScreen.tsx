import "./CoverScreen.css"
import "./NewGameButton.css"
import { observer } from "mobx-react-lite";
import rootStore from "../../store/rootStore";

export const FinishScreen = observer(() => {
    if (!rootStore.finishScreenStore.isScreenVisible) return null;

    const winMessage = `YOUR SCORE IS: ${rootStore.scoreStore.count}. Best score is ${rootStore.scoreStore.getBestResult()}`
    const onClick = () => {
        rootStore.startGameFinishScreen();
    }
    return (
        <div className={"cover-screen"}>{winMessage}
            <button className="new-game-button" onClick={onClick}>New Game</button>
        </div>
    )
})