import type { WordCategory } from "../../../../types/types";
import { getRandomItem } from "../../../../utils/commonUtils";
import { getWordsFromSelectedCategories } from "../words/getAvailableWords";

export const selectWord = (
  fullWordList: WordCategory[],
  selectedCategories: string[],
) => {
  // Filter word list to include only selected categories
  // Flatten the words array to remove categories
  const availableWords = getWordsFromSelectedCategories(
    fullWordList,
    selectedCategories,
  );

  // Now select a random word for this category
  const selectedWord = getRandomItem(availableWords);
  return selectedWord;
};
