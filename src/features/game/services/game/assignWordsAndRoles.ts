import type { WordPair } from "../../../../types/types";

export const assignRolesAndWordsToPlayers = (
  word: WordPair,
  playerCount: number,
) => {
  const mrWhiteIndex = Math.floor(Math.random() * playerCount);

  // Create array of players and assign roles and words
  const players = Array.from({ length: playerCount }, (_, index) => ({
    id: index + 1,
    playerName: "",
    word: mrWhiteIndex === index ? word.undercoverWord : word.civilianWord,
    role: mrWhiteIndex === index ? "MR_WHITE" : "CIVILIAN",
  }));

  return players;
};
