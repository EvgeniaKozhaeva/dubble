import "./CoverScreen.css"
import { observer } from "mobx-react-lite"
import { GameOptionsContainer } from "./GameOptionsContainer";
import { NewGameButton } from "./NewGameButton";
import rootStore from "../../store/rootStore";


export const StartScreen = observer(() => {
    if (!rootStore.startScreenStore.isScreenVisible) return null;

    const onClick = () => {
        rootStore.startGameStartScreen();
    }
    return (
        <div className="cover-screen">
            <div className="setting-screen">
                <NewGameButton handleClick={onClick}/>
                <GameOptionsContainer/>
            </div>
        </div>
    )
})
