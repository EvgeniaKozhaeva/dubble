import "./CoverScreen.css"
import { observer } from "mobx-react-lite"
import rootStore from "../../store/rootStore";

export const StartScreen = observer(() => {
    if (!rootStore.startScreenStore.isScreenVisible) return null;

    const onClick = () => {
        rootStore.startGameStartScreen();
    }
    return (
        <div className={"cover-screen"} onClick={onClick}>
            CLICK TO START
        </div>
    )
})
