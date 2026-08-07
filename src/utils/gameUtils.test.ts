import { describe, it, expect } from "vitest";
import {
  playersX3,
  playersX2,
  playersWithUnnamedPlayer,
} from "../test/fixtures/players";
import {
  moreThanTwoPlayersRemaining,
  checkIsFinalPlayer,
  allPlayersHaveNames,
  assignRolesAndWordsToPlayers,
  resetPlayers,
  changePlayerToEliminated,
} from "./gameUtils";

describe("moreThanTwoPlayersRemaining", () => {
  it("returns true if more than two players are in the array", () => {
    const result = moreThanTwoPlayersRemaining(playersX3);
    expect(result).toBe(true);
  });

  it.skip("returns false if two players are in the array", () => {
    const result = moreThanTwoPlayersRemaining(playersX2);
    expect(result).toBe(false);
  });
});

describe("checkIsFinalPlayer", () => {
  it("check player matches the number of the final player", () => {
    const currentPlayerNumber = 4;
    const playerCount = 4;

    const result = checkIsFinalPlayer(currentPlayerNumber, playerCount);
    expect(result).toBe(true);
  });

  it("check the function fails if numbers aren't equal", () => {
    const currentPlayerNumber = 4;
    const playerCount = 5;

    const result = checkIsFinalPlayer(currentPlayerNumber, playerCount);
    expect(result).toBe(false);
  });
});

describe("allPlayersHaveNames", () => {
  it("returns true because all players have names", () => {
    const result = allPlayersHaveNames(playersX3);
    expect(result).toBe(true);
  });

  it("returns true because all players have names", () => {
    const result = allPlayersHaveNames(playersWithUnnamedPlayer);
    expect(result).toBe(false);
  });
});

describe("assignRolesAndWordsToPlayers", () => {
  //test
});

describe("resetPlayers", () => {
  it("resets eliminated, role and word for every player, keeping existing player names", () => {
    const result = resetPlayers(playersX3, true);

    expect(
      result.every(
        (player) =>
          player.eliminated === false &&
          player.role === undefined &&
          player.word === undefined,
      ),
    ).toBe(true);
  });

  it("resets players array completely if 'false' is passed in to the 'useExistingPlayers' value", () => {
    const result = resetPlayers(playersX3, false);
    expect(result).toEqual([]);
  });
});

describe("changePlayerToEliminated", () => {
  it("check player is eliminated", () => {
    const playerToEliminate = {
      id: 3,
      playerName: "Ash",
      word: undefined,
      role: undefined,
      eliminated: false,
    };

    const result = changePlayerToEliminated({
      playerToEliminate: playerToEliminate,
      playersList: playersX3,
    });
    const eliminatedPlayer = result[2];
    expect(eliminatedPlayer?.eliminated).toBe(true);
  });
});
