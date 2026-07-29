import type { WordPair, WordCategory } from "../../../types/types";

export function getRandomItem<T>(array: T[]): T {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

export const storeWord = (word: WordPair) => {
  if (!!word) {
    const storedWords = JSON.parse(localStorage.getItem("storedWords")) || [];
    const updatedWords = [...storedWords, word];
    localStorage.setItem("storedWords", JSON.stringify(updatedWords));
  }
};

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

export const getWordsFromSelectedCategories = (
  categories: WordCategory[],
  selectedCategories: string[],
): WordPair[] => {
  const storedWords = JSON.parse(localStorage.getItem("storedWords"));
  console.log(
    "🚀 ~ getWordsFromSelectedCategories ~ storedWords:",
    storedWords,
  );

  const filteredWords = categories
    .filter((category) => selectedCategories.includes(category.id))
    .flatMap((category) => category.words);

  if (!!storedWords) {
    return filterUsedWords(filteredWords, storedWords); // Filter out words in localStorage
  } else {
    return filteredWords;
  }
};

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

export const assignRolesToPlayers = (word: WordPair, playerCount: number) => {
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
