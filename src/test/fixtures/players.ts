import type { Player } from "../../types/types";

export const playersX3 = [
  {
    id: 1,
    playerName: "Scott",
    word: undefined,
    role: undefined,
    eliminated: false,
  },
  {
    id: 2,
    playerName: "John",
    word: undefined,
    role: undefined,
    eliminated: false,
  },
  {
    id: 3,
    playerName: "Ash",
    word: undefined,
    role: undefined,
    eliminated: false,
  },
] satisfies Player[];

export const playersX2 = [
  {
    id: 1,
    playerName: "Scott",
    word: undefined,
    role: undefined,
    eliminated: false,
  },
  {
    id: 2,
    playerName: "John",
    word: undefined,
    role: undefined,
    eliminated: false,
  },
] satisfies Player[];

export const playersWithUnnamedPlayer = [
  {
    id: 1,
    playerName: "Scott",
    word: undefined,
    role: undefined,
    eliminated: false,
  },
  {
    id: 2,
    playerName: "John",
    word: undefined,
    role: undefined,
    eliminated: false,
  },
  {
    id: 3,
    playerName: "",
    word: undefined,
    role: undefined,
    eliminated: false,
  },
] satisfies Player[];
