import "./App.css";
import { observer } from "mobx-react-lite"
import { CardCommon } from "./components/cards/Card";
import { FinishScreen } from "./components/coverScreen/FinishScreen"
import { StartScreen } from "./components/coverScreen/StartScreen";
import { Score } from "./components/score/Score";
import { Timer } from "./components/timer/Timer";
import rootStore from "./store/rootStore";

const App = observer(() => {
  return (
    <div className="app-container">
        <StartScreen/>
        <FinishScreen/>
        <div className="game-container">
            <div className="game-title-container">DOUBLE</div>
            <div className="header-container">
                <Score/>
                <Timer/>
            </div>
            <div className="cards-container">
                <CardCommon cardSide={"right"} card={rootStore.cardStore.rightCard}/>
                <CardCommon cardSide={"left"} card={rootStore.cardStore.leftCard}/>
            </div>
        </div>
    </div>
  );
})

export default App;
