import type { WordPair } from "../../../../types/types";

export const filterUsedWords = (
  availableWords: WordPair[],
  storedWords: WordPair[],
): WordPair[] => {
  if (!storedWords) {
    return availableWords;
  } else {
    return availableWords.filter(
      (availableWord) =>
        !storedWords.some(
          (storedWord) =>
            storedWord.civilianWord === availableWord.civilianWord &&
            storedWord.undercoverWord === availableWord.undercoverWord,
        ),
    );
  }
};
