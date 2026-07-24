import { useState } from "react";
import { categories } from "../../constants/categories";
import GameSetup from "./gameSteps/GameSetup";
import AssignRolesAndWords from "./gameSteps/AssignRolesAndWords";
import type { GameStage } from "../../types/types";

const Play = () => {
  const [playerCount, setPlayerCount] = useState(6);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([
    ...categories,
  ]);

  const [gameStep, setGameStep] = useState<GameStage>("setup");

  const toggleCategory = (category: string) => {
    setSelectedCategories(
      (prev) =>
        prev.includes(category)
          ? prev.filter((item) => item !== category) //remove
          : [...prev, category], // add
    );
  };

  const startRound = () => {
    setGameStep("assignRolesAndWords");
  };

  return (
    <>
      {gameStep === "setup" && (
        <GameSetup
          playerCount={playerCount}
          setPlayerCount={setPlayerCount}
          selectedCategories={selectedCategories}
          categories={categories}
          toggleCategory={toggleCategory}
          startRound={startRound}
        />
      )}

      {gameStep === "assignRolesAndWords" && <AssignRolesAndWords />}
    </>
  );
};

export default Play;
