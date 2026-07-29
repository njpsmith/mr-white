import type { WordPair, WordCategory } from "../../../../types/types";
import { filterUsedWords } from "../words/filterUsedWords";

export const getWordsFromSelectedCategories = (
  categories: WordCategory[],
  selectedCategories: string[],
): WordPair[] => {
  const storedWords = JSON.parse(localStorage.getItem("storedWords"));

  const filteredWords = categories
    .filter((category) => selectedCategories.includes(category.id))
    .flatMap((category) => category.words);

  if (!!storedWords) {
    return filterUsedWords(filteredWords, storedWords); // Filter out words in localStorage
  } else {
    return filteredWords;
  }
};
