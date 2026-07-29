import type { WordPair } from "../../../../types/types";

export const storeWord = (word: WordPair) => {
  if (!!word) {
    const storedWords = JSON.parse(localStorage.getItem("storedWords")) || [];
    const updatedWords = [...storedWords, word];
    localStorage.setItem("storedWords", JSON.stringify(updatedWords));
  }
};
