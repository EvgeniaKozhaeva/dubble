import {observer} from "mobx-react-lite";
import "./NewGameButton.css"
import { gameOptions } from "../../store/cardStore";
import rootStore from "../../store/rootStore";

export const GameOptionsContainer = observer(() => {
    const gameOption = (option: number) => `${option}X${option}`;
    return (
        <div className="game-options">
            <span>Please select difficulty level</span>
            { gameOptions.map((option) => (
                <button
                    className={rootStore.cardStore.selectedGameOption.id === option.id ? "game-button active-button" : "game-button"}
                    key={option.id}
                    onClick={() => {
                        rootStore.cardStore.setSelectedGameOption(option.id);
                        rootStore.cardStore.generateCards();
                    }}
                >
                    {gameOption(option.imageInRow)}
                </button>
            ))
            }
        </div>
    )
})
