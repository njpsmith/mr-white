import { useState } from "react";
import { categories } from "../../constants/categories";
import GameSetup from "./gameSteps/GameSetup";
import AssignRolesAndWords from "./gameSteps/AssignRolesAndWords";
import type { GameStage } from "../../types/types";

const Play = () => {
  const [playerCount, setPlayerCount] = useState(2);
  const [currentPlayerNumber, setCurrentPlayerNumber] = useState(1);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([
    ...categories,
  ]);

  const [currentPlayerName, setCurrentPlayerName] = useState("");
  const [playerNames, setPlayerNames] = useState([]);

  const [gameStep, setGameStep] = useState<GameStage>("stage_1_setup");

  const toggleCategory = (category: string) => {
    setSelectedCategories(
      (prev) =>
        prev.includes(category)
          ? prev.filter((item) => item !== category) //remove
          : [...prev, category], // add
    );
  };

  const nextStep = () => {
    switch (gameStep) {
      case "stage_1_setup":
        setGameStep("stage_2_assignRolesAndWords");
        break;
      case "stage_2_assignRolesAndWords":
        setGameStep("stage_3_vote");
        break;

      case "stage_3_vote":
        setGameStep("stage_4_reveal");
        break;

      case "stage_4_reveal":
        setGameStep("stage_5_gameOver");
        break;

      case "stage_5_gameOver":
        setGameStep("stage_1_setup");
        break;
    }
  };

  const checkAllPlayerNamesEntered = () => {
    if (currentPlayerNumber === playerCount) {
      return true;
    } else {
      return false;
    }
  };

  const advanceCurrentPlayerNumber = () => {
    setCurrentPlayerNumber((prevState) => prevState + 1);
  };

  const handleCurrentPlayerNameSubmit = (
    e: React.FormEvent<HTMLFormElement>,
  ) => {
    e.preventDefault();

    // Don't add empty names
    if (!currentPlayerName.trim()) return;

    setPlayerNames((playerNames) => [...playerNames, currentPlayerName]);

    setCurrentPlayerName("");

    const allPlayerNamesEntered = checkAllPlayerNamesEntered();
    if (allPlayerNamesEntered) {
      nextStep();
    } else {
      advanceCurrentPlayerNumber();
    }
  };

  return (
    <>
      {gameStep === "stage_1_setup" && (
        <GameSetup
          playerCount={playerCount}
          setPlayerCount={setPlayerCount}
          selectedCategories={selectedCategories}
          categories={categories}
          toggleCategory={toggleCategory}
          startRound={nextStep}
        />
      )}

      {gameStep === "stage_2_assignRolesAndWords" && (
        <AssignRolesAndWords
          playerCount={playerCount}
          currentPlayerNumber={currentPlayerNumber}
          currentPlayerName={currentPlayerName}
          setCurrentPlayerName={setCurrentPlayerName}
          nextStep={nextStep}
          handleSubmit={handleCurrentPlayerNameSubmit}
        />
      )}

      {gameStep === "stage_3_vote" && <div>Stage 3</div>}

      {gameStep === "stage_4_reveal" && <div>Stage 4</div>}

      {gameStep === "stage_5_gameOver" && <div>Stage 5</div>}

      <pre>{JSON.stringify(playerNames, null, 2)}</pre>
    </>
  );
};

export default Play;
