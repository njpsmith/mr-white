import { useState, useEffect } from "react";
import { categories } from "../../constants/categories";
import GameSetup from "./gameSteps/GameSetup";
import AssignRolesAndWords from "./gameSteps/AssignRolesAndWords";
import type {
  GameStage,
  WordPair,
  WordCategory,
  Player,
} from "../../types/types";
import { words } from "../../services/wordsApi";

const Play = () => {
  // Delete
  const [playerCount, setPlayerCount] = useState(6);

  // Delete
  const [playerNames, setPlayerNames] = useState([]);

  const [players, setPlayers] = useState<Player[]>([]);

  const [currentPlayerNumber, setCurrentPlayerNumber] = useState(1);
  const [currentPlayerName, setCurrentPlayerName] = useState(""); // For adding names

  const [selectedCategories, setSelectedCategories] = useState<string[]>([
    ...categories,
  ]);
  const [selectedWord, setSelectedWord] = useState<WordPair>();

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

  function getRandomItem<T>(array: T[]): T {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }

  const getWordsFromSelectedCategories = (
    categories: WordCategory[],
    selectedCategories: string[],
  ): WordPair[] => {
    return categories
      .filter((category) => selectedCategories.includes(category.id))
      .flatMap((category) => category.words);
  };

  const selectWord = () => {
    // Filter word list to include only selected categories
    // Flatten the words array to remove categories
    const availableWords = getWordsFromSelectedCategories(
      words,
      selectedCategories,
    );

    // Now select a random word for this category
    const selectedWord = getRandomItem(availableWords);
    return selectedWord;
  };

  const assignRolesToPlayers = (word: WordPair) => {
    const mrWhiteIndex = Math.floor(Math.random() * playerCount);

    // Create array of players
    // Assign roles and words
    const players = Array.from({ length: playerCount }, (_, index) => ({
      id: index + 1,
      playerName: "",
      word: mrWhiteIndex === index ? word.undercoverWord : word.civilianWord,
      role: mrWhiteIndex === index ? "MR_WHITE" : "CIVILIAN",
    }));

    // console.log("🚀 ~ assignRolesToPlayers ~ players:", players);
    // console.log("🚀 ~ assignRolesToPlayers ~ selectedWord:", word);

    return players;
  };

  const startRound = () => {
    const word = selectWord();
    const players = assignRolesToPlayers(word);

    console.log("🚀 ~ startRound ~ players:", players);

    setSelectedWord(selectedWord);
    setPlayers(players);
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
          startRound={startRound}
          selectWord={selectWord}
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
