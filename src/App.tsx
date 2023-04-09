import React from 'react';
import './App.css';
import { CardCommon } from "./components/cards/Card";
import {Score} from "./components/score/Score";
import {Timer} from "./components/timer/Timer";

function App() {
  return (
    <div className="app-container">
        <div className="up-footer-container">
            <Score/>
            <Timer/>
        </div>
        <div className="cards-container">
            <CardCommon cardSide={"left"}/>
            <CardCommon cardSide={"right"}/>
        </div>
    </div>
  );
}

export default App;
