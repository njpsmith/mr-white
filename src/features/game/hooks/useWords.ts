export const useWords = () => {
  const clearUsedWords = () => {
    localStorage.clear();
  };

  return { clearUsedWords };
};
