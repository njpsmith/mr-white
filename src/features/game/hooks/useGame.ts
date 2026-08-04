import { useState } from "react";
import { selectWord } from "../services/game/selectWord";
import { assignRolesAndWordsToPlayers } from "../services/game/assignWordsAndRoles";

import { storeWord } from "../services/storage/storedWords";

import type { WordPair, Player, GameStage } from "../../../types/types";
import { categories } from "../../../constants/categories";
import { words } from "../data/wordsApi";

export const useGame = () => {
  const [fullWordList, setFullWordList] = useState(words);
  const [playerCount, setPlayerCount] = useState(2); // Controlled input field
  const [players, setPlayers] = useState<Player[]>([]);
  const [savedPlayers, setSavedPlayers] = useState<Player[]>([]); // For saving the list of players between rounds

  const [currentPlayerNumber, setCurrentPlayerNumber] = useState(1);
  const [currentPlayerName, setCurrentPlayerName] = useState(""); // For adding names

  const [selectedCategories, setSelectedCategories] = useState<string[]>([
    ...categories,
  ]);
  const [selectedWord, setSelectedWord] = useState<WordPair>();

  const [gameStep, setGameStep] = useState<GameStage>("stage_1_setup");
  const [revealWordToPlayer, setRevealWordToPlayer] = useState<boolean>(false);

  const [currentEliminatedPlayer, setCurrentEliminatedPlayer] =
    useState<Player | null>(null);

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
        setGameStep("stage_3_pre_vote");
        break;

      case "stage_3_pre_vote":
        setGameStep("stage_4_vote");
        break;

      // case "stage_4_vote":
      //   setGameStep("stage_5_reveal");
      //   break;

      case "stage_5_reveal_mr_white_found":
        setGameStep("stage_1_setup");
        break;

      case "stage_5_reveal_incorrect_guess":
        setGameStep("stage_4_vote");
        break;

      // case "stage_6_gameOver":
      //   setGameStep("stage_1_setup");
      //   break;
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

      console.log("saving players!!!", players);
      setSavedPlayers(players); // save players for future rounds
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
    const players = assignRolesAndWordsToPlayers(word, playerCount);

    console.log("🚀 ~ startRound ~ players:", players);

    setSelectedWord(word);
    setPlayers(players);
    nextStep();
  };

  const resetWordList = () => {
    localStorage.clear();
    setGameStep("stage_1_setup");
  };

  const eliminatePlayer = (player: Player) => {
    // console.log("elim", player);
    setCurrentEliminatedPlayer(player);

    // check if player is mr white
    // if so, display 'well done' screen and end game
    if (player.role === "MR_WHITE") {
      setGameStep("stage_5_reveal_mr_white_found");
    } else {
      // if not, display 'they were not!' and reset round
      // remove player from players array
      const updatedPlayers = players.filter(
        (p) => p.playerName !== player.playerName,
      );

      setPlayers(updatedPlayers);
      setGameStep("stage_5_reveal_incorrect_guess");
    }
  };

  const resetGame = () => {
    console.log("reseting game now boss");
    // setPlayers([])
    setCurrentPlayerName("");
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
    currentEliminatedPlayer,

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
    eliminatePlayer,
    resetGame,
  };
};
