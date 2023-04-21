import "./CoverScreen.css"
import "./NewGameButton.css"
import rootStore from "../../store/rootStore";
import { observer } from "mobx-react-lite"

export const StartScreen = observer(() => {
    if (!rootStore.startScreenStore.isScreenVisible) return null;

    const onClick = () => {
        rootStore.startGameStartScreen();
    }
    return (
        <div
            className={"cover-screen"}
            onClick={onClick}
        >
            CLICK TO START
        </div>
    )
})

export const FinishScreen = observer(() => {
    if (!rootStore.finishScreenStore.isScreenVisible) return null;

    const winMessage = `YOUR SCORE IS: ${rootStore.scoreStore.count}. Best score is ${rootStore.scoreStore.getBestResult()}`
    const onClick = () => {
        rootStore.startGameFinishScreen();
    }
    return (
        <div className={`cover-screen`}>{winMessage}
            <button className="new-game-button" onClick={onClick}>New Game</button>
        </div>
    )
})



// if (!rootStore.finishScreenStore.isScreenVisible) return null;
//
// const winMessage = `YOUR SCORE IS: ${rootStore.scoreStore.count}. Best score is ${rootStore.scoreStore.getBestResult()}`
//
// return (
//     <div className={"cover-screen"}>
//         {winMessage}
//         <button className="new-game-button" onClick={rootStore.startGameFinishScreen}>New Game</button>
//     </div>
// )
// })
