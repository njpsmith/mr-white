import { useState } from "react";
import { capitalizeFirstLetter } from "../../../utils/commonUtils";
// import { Dispatch, SetStateAction } from "react";
import { selectWord } from "../../../features/game/services/game/selectWord";
import type { WordCategory } from "../../../types/types";

const GameSetup = ({
  playerCount,
  decreasePlayerCount,
  increasePlayerCount,
  editPlayerCount,
  selectedCategories,
  categories,
  toggleCategory,
  startRound,
  fullWordList,
}: {
  playerCount: number;
  categories: string[];
  toggleCategory: (category: string) => void;
  selectedCategories: any;
  startRound: () => void;
  fullWordList: WordCategory[];
}) => {
  const [showMinPlayersError, setShowMinPlayersError] = useState(false);

  const handleDecrease = () => {
    if (playerCount > 3) {
      decreasePlayerCount();
    } else {
      setShowMinPlayersError(true);
      return;
    }
  };

  const handleIncrease = () => {
    increasePlayerCount();
    setShowMinPlayersError(false);
  };

  const handleEditCount = (newCount: number) => {
    if (newCount > 2) {
      editPlayerCount(newCount);
      setShowMinPlayersError(false);
    } else {
      editPlayerCount(3);
      setShowMinPlayersError(true);
      return;
    }
  };

  return (
    <>
      <section className="pt-16 pb-16 mb-16 md:pb-24 md:mb-24 border-divider">
        <div className="px-5 container-narrow">
          <h2 className="font-semibold tracking-tight | mt-8 md:mt-12 | text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem]">
            Setup new game
          </h2>

          <div className="card-soft">
            <div className="flex items-baseline justify-between">
              <label htmlFor="playerCount" className="font-medium text-ink">
                Players
              </label>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  className="btn btn-primary w-8 h-10 p-0"
                  aria-label="Fewer players"
                  onClick={() => handleDecrease()}
                >
                  −
                </button>
                <input
                  id="playerCount"
                  type="number"
                  // min="3"
                  value={playerCount}
                  onChange={(e) => handleEditCount(Number(e.target.value))}
                  inputMode="numeric"
                  className="border-hairline rounded-sm h-10 w-16 text-center font-mono"
                />
                <button
                  type="button"
                  className="btn btn-primary w-8 h-10 p-0"
                  aria-label="More players"
                  onClick={() => handleIncrease()}
                >
                  +
                </button>
              </div>
            </div>
            <div>
              {showMinPlayersError && (
                <p className="mt-2 text-sm text-red-600">
                  A minimum of 3 players is required.
                </p>
              )}
              <p className="mt-2 text-sm text-mute">
                Recommended: 5–8 players.
              </p>
            </div>
          </div>

          <div className="card-soft mt-6">
            <div className="flex items-baseline justify-between">
              <label htmlFor="Categories" className="font-medium text-ink">
                Categories{" "}
                <span className="text-mute">
                  ({selectedCategories.length} selected)
                </span>
              </label>
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-2">
              {categories.map((category) => {
                return (
                  <button
                    key={category}
                    className={`btn btn-category ${selectedCategories.includes(category) ? "btn-primary" : "btn-secondary"}`}
                    onClick={() => toggleCategory(category)}
                  >
                    {capitalizeFirstLetter(category.replace("_", " "))}{" "}
                    <span>
                      {selectedCategories.includes(category) ? "+" : "-"}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <button
            className="btn btn-primary w-full mt-8"
            onClick={() => {
              startRound();
              selectWord(fullWordList, selectedCategories);
            }}
          >
            Start round →
          </button>
        </div>
      </section>
    </>
  );
};

export default GameSetup;
