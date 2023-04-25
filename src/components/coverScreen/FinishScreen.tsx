import "./CoverScreen.css"
import "./NewGameButton.css"
import { observer } from "mobx-react-lite";
import { GameOptionsContainer } from "./GameOptionsContainer";
import { NewGameButton } from "./NewGameButton";
import rootStore from "../../store/rootStore";

export const FinishScreen = observer(() => {
    if (!rootStore.finishScreenStore.isScreenVisible) return null;

    const currentScore = `YOUR SCORE IS: ${rootStore.scoreStore.count}`;
    const bestScore = `BEST SCORE IS: ${rootStore.scoreStore.getBestResult(rootStore.cardStore.selectedGameOption)}`;
    const onClick = () => {
        rootStore.startGameFinishScreen();
    }
    return (
        <div className="cover-screen">
            <div className="setting-screen">
                <div className="win-message">
                    <h1>{currentScore}</h1>
                    <h2>{bestScore}</h2>
                </div>
                <NewGameButton handleClick={onClick}/>
                <GameOptionsContainer/>
            </div>
        </div>
    )
})