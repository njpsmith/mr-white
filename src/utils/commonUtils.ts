import type { Player } from "../types/types";

export function capitalizeFirstLetter(val: string) {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

export function getRandomItem<T>(array: T[]): T {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

export const moreThanTwoPlayersRemaining = (players: Player[]) => {
  return players.filter((player) => !player.eliminated).length > 2;
};
