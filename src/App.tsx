import './App.css';
import { CardCommon } from "./components/cards/Card";
import { Score } from "./components/score/Score";
import { Timer } from "./components/timer/Timer";
import rootStore from "./store/rootStore";
import { observer } from "mobx-react-lite"
import { FinishScreen, StartScreen } from "./components/coverScreen/CoverScreen";

const App = observer(() => {
  return (
    <div className="app-container">
        <StartScreen/>
        <FinishScreen/>
        <div className="game-container">
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
