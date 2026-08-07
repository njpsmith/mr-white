import { useState } from "react";
import { selectWord } from "../services/game/selectWord";
import { storeWord } from "../services/storage/storedWords";

import type { WordPair, Player, GameStage } from "../../../types/types";
import { categories } from "../../../constants/categories";
import { words } from "../data/wordsApi";
import {
  moreThanTwoPlayersRemaining,
  checkIsFinalPlayer,
  assignRolesAndWordsToPlayers,
  resetPlayers,
  changePlayerToEliminated,
} from "../../../utils/gameUtils";
import { useWords } from "./useWords";

export const useGame = () => {
  const wordsHook = useWords();

  const [fullWordList, setFullWordList] = useState(words);
  const [playerCount, setPlayerCount] = useState<number>(3); // Controlled input field
  const [players, setPlayers] = useState<Player[]>([]);

  const [currentPlayerNumber, setCurrentPlayerNumber] = useState<number>(1);
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

  const returnUserToStage1 = () => {
    setGameStep("stage_1_setup");
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

  const decreasePlayerCount = () => {
    setPlayerCount(playerCount - 1);
  };
  const increasePlayerCount = () => {
    setPlayerCount(playerCount + 1);
  };
  const editPlayerCount = (number: number) => {
    setPlayerCount(number);
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

  const handleRevealWordButton = () => {
    setRevealWordToPlayer(true);
  };

  const handleSubmitRevealWord = () => {
    setRevealWordToPlayer(false);

    // Check if all player names have been entered
    const allPlayerNamesEntered = checkIsFinalPlayer(
      currentPlayerNumber,
      playerCount,
    );
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
    const playersWithRolesAndWords = assignRolesAndWordsToPlayers(
      word,
      playerCount,
      players,
    );

    console.log("🚀 ~ startRound ~ players:", playersWithRolesAndWords);

    setSelectedWord(word);
    setPlayers(playersWithRolesAndWords);
    nextStep();
  };

  const resetWordList = () => {
    wordsHook.clearUsedWords();
    setGameStep("stage_1_setup");
  };

  const eliminatePlayer = (player: Player) => {
    setCurrentEliminatedPlayer(player);

    // Check if player is Mr. White
    // If so, display 'well done' screen and end game
    if (player.role === "MR_WHITE") {
      setGameStep("stage_5_reveal_mr_white_found");
    } else {
      // If not, display 'they were not!' and reset round

      // Set player to eliminated
      const updatedPlayers = changePlayerToEliminated({
        playerToEliminate: player,
        playersList: players,
      });

      setPlayers(updatedPlayers);

      // Check if only two non-eliminated players remain. If so, Mr. White wins
      const moreThanTwoRemaining = moreThanTwoPlayersRemaining(updatedPlayers);

      if (moreThanTwoRemaining) {
        setGameStep("stage_5_reveal_incorrect_guess");
      } else {
        // Mr. White wins
        setGameStep("gameOver_mr_white_wins");
      }
    }
  };

  const resetGame = ({
    useExistingPlayers = true,
  }: {
    useExistingPlayers: boolean;
  }) => {
    // Clear roles of players and reset names if 'useExistingPlayers' dictates
    const resettedPlayers = resetPlayers(players, useExistingPlayers);

    console.log("reseting game now boss");
    console.log("🚀 ~ resetGame ~ resettedPlayers:", resettedPlayers);

    setPlayers(resettedPlayers);
    setCurrentPlayerNumber(1);
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

    decreasePlayerCount,
    increasePlayerCount,
    editPlayerCount,
    setCurrentPlayerName,

    toggleCategory,
    nextStep,
    checkIsFinalPlayer,
    advanceCurrentPlayerNumber,
    handleCurrentPlayerNameSubmit,
    handleSubmitRevealWord,
    handleRevealWordButton,
    startRound,
    resetWordList,
    eliminatePlayer,
    resetGame,
    returnUserToStage1,
  };
};
