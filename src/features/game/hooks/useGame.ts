import { useState } from "react";
import {
  selectWord,
  storeWord,
  assignRolesToPlayers,
} from "../services/services";
import type { WordPair, Player, GameStage } from "../../../types/types";
import { categories } from "../../../constants/categories";
import { words } from "../services/wordsApi";

export const useGame = () => {
  const [fullWordList, setFullWordList] = useState(words);
  const [playerCount, setPlayerCount] = useState(2); // Controlled input field
  const [players, setPlayers] = useState<Player[]>([]);

  const [currentPlayerNumber, setCurrentPlayerNumber] = useState(1);
  const [currentPlayerName, setCurrentPlayerName] = useState(""); // For adding names

  const [selectedCategories, setSelectedCategories] = useState<string[]>([
    ...categories,
  ]);
  const [selectedWord, setSelectedWord] = useState<WordPair>();

  const [gameStep, setGameStep] = useState<GameStage>("stage_1_setup");
  const [revealWordToPlayer, setRevealWordToPlayer] = useState<boolean>(false);

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

    // Create new array of players with updated player name
    const updatePlayers = players.map((player, index) => {
      if (currentPlayerNumber - 1 === index) {
        return { ...player, playerName: currentPlayerName };
      } else {
        return player;
      }
    });

    // Add player name to player array
    setPlayers(updatePlayers);

    // Reset player name for next player
    setCurrentPlayerName("");

    setRevealWordToPlayer(true);
  };

  const handleSubmitRevealWord = () => {
    setRevealWordToPlayer(false);

    // Check if all player names have been entered
    const allPlayerNamesEntered = checkAllPlayerNamesEntered();
    if (allPlayerNamesEntered) {
      nextStep();
      console.log("Players list", players);
    } else {
      advanceCurrentPlayerNumber();
    }
  };

  const startRound = () => {
    const word = selectWord(words, selectedCategories);

    if (!word) {
      setGameStep("no_words_remaining");
      return;
    }

    storeWord(word); // Store in localStorage
    const players = assignRolesToPlayers(word, playerCount);

    console.log("🚀 ~ startRound ~ players:", players);

    setSelectedWord(word);
    setPlayers(players);
    nextStep();
  };

  const resetWordList = () => {
    localStorage.clear();
    setGameStep("stage_1_setup");
  };

  return {
    gameStep,
    playerCount,
    players,
    currentPlayerNumber,
    currentPlayerName,
    selectedCategories,
    selectedWord,
    revealWordToPlayer,
    fullWordList,

    setPlayerCount,
    setCurrentPlayerName,

    toggleCategory,
    nextStep,
    checkAllPlayerNamesEntered,
    advanceCurrentPlayerNumber,
    handleCurrentPlayerNameSubmit,
    handleSubmitRevealWord,
    startRound,
    resetWordList,
  };
};
