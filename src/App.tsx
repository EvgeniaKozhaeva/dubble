import React from 'react';
import './App.css';
import { CardCommon } from "./components/cards/Card";
import {Score} from "./components/score/Score";
import {Timer} from "./components/timer/Timer";
import cardStore from "./store/cardStore"
import {observer} from "mobx-react-lite"
import {FinishScreen, CoverScreen} from "./components/coverScreen/CoverScreen";

const App = observer(() => {
  return (
    <div className="app-container">
        <CoverScreen/>
        <FinishScreen/>
        <div className="game-container">
            <div className="up-footer-container">
                <Score/>
                <Timer/>
            </div>
            <div className="cards-container">
                <CardCommon cardSide={"right"} card={cardStore.rightCard}/>
                <CardCommon cardSide={"left"} card={cardStore.leftCard}/>
            </div>
        </div>
    </div>
  );
})

export default App;
