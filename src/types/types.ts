export type GameStage =
  | "stage_1_setup"
  | "stage_2_assignRolesAndWords"
  | "stage_3_pre_vote"
  | "stage_4_vote"
  | "stage_5_reveal_mr_white_found"
  | "stage_5_reveal_incorrect_guess"
  | "gameOver_mr_white_wins"
  | "no_words_remaining";

export type WordPair = {
  civilianWord: string;
  undercoverWord: string;
};

export type WordCategory = {
  id: string;
  name: string;
  words: WordPair[];
};

export type Player = {
  id: number;
  playerName: string;
  word: string | undefined;
  role: "MR_WHITE" | "CIVILIAN" | undefined;
  eliminated: boolean;
};
