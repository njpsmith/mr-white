export type GameStage =
  | "stage_1_setup"
  | "stage_2_assignRolesAndWords"
  | "stage_3_vote"
  | "stage_4_reveal"
  | "stage_5_gameOver";

export type WordPair = {
  civilianWord: string;
  undercoverWord: string;
};

export type WordCategory = {
  id: string;
  name: string;
  words: WordPair[];
};
