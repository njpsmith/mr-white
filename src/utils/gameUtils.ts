import type { Player, WordPair } from "../types/types";

export const moreThanTwoPlayersRemaining = (players: Player[]) => {
  return players.filter((player) => !player.eliminated).length > 2;
};

export const checkAllPlayerNamesEntered = (
  currentPlayerNumber: number,
  playerCount: number,
) => {
  return currentPlayerNumber === playerCount;
};

export const allPlayersHaveNames = (players: Player[]) => {
  return players.every((player) => player.playerName.trim() !== "");
};

// Randomly choose a number, based on the total number of players. Used for randomly assigning a player to the Mr. White role
export const getMrWhiteIndex = (playerCount: number) => {
  return Math.floor(Math.random() * playerCount);
};

export const assignRolesAndWordsToPlayers = (
  word: WordPair,
  playerCount: number,
  players: Player[],
) => {
  const mrWhiteIndex = getMrWhiteIndex(playerCount);

  // Create array of players and assign roles and words
  const playersList = Array.from({ length: playerCount }, (_, index) => ({
    id: index + 1,
    playerName: players[index]?.playerName || "",
    word: mrWhiteIndex === index ? word.undercoverWord : word.civilianWord,
    role: mrWhiteIndex === index ? "MR_WHITE" : "CIVILIAN",
    eliminated: false,
  }));

  return playersList;
};

export const resetPlayers = (
  players: Player[],
  useExistingPlayers: boolean,
) => {
  const resettedPlayers = useExistingPlayers
    ? players.map((player) => ({
        ...player,
        eliminated: false,
        role: undefined,
        word: undefined,
      }))
    : [];

  return resettedPlayers;
};

export const changePlayerToEliminated = ({
  playerToEliminate,
  playersList,
}: {
  playerToEliminate: Player;
  playersList: Player[];
}) => {
  const updatedPlayers = playersList.map((p) => {
    if (p.playerName === playerToEliminate.playerName) {
      return {
        ...p,
        eliminated: true,
      };
    } else {
      return p;
    }
  });

  return updatedPlayers;
};
