import type { WordPair, Player } from "../../../../types/types";

export const assignRolesAndWordsToPlayers = (
  word: WordPair,
  playerCount: number,
  players: Player[],
) => {
  console.log("ppp ASSIGNING ROLES AND WORDS");
  const mrWhiteIndex = Math.floor(Math.random() * playerCount);

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
