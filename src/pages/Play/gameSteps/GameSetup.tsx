import { capitalizeFirstLetter } from "../../../utils/commonUtils";
// import { Dispatch, SetStateAction } from "react";
import { selectWord } from "../../../features/game/services/services";
import type { WordPair, WordCategory } from "../../../types/types";

const GameSetup = ({
  playerCount,
  setPlayerCount,
  selectedCategories,
  categories,
  toggleCategory,
  startRound,
  fullWordList,
}: {
  playerCount: number;
  categories: string[];
  toggleCategory: (category: string) => void;
  setPlayerCount: any;
  selectedCategories: any;
  startRound: () => void;
  fullWordList: WordCategory[];
  // setPlayerCount: Dispatch<SetStateAction<string[]>>;
}) => (
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
                onClick={() => setPlayerCount(playerCount - 1)}
              >
                −
              </button>
              <input
                id="playerCount"
                type="number"
                min="3"
                value={playerCount}
                onChange={(e) => setPlayerCount(Number(e.target.value))}
                inputMode="numeric"
                className="border-hairline rounded-sm h-10 w-16 text-center font-mono"
              />
              <button
                type="button"
                className="btn btn-primary w-8 h-10 p-0"
                aria-label="More players"
                onClick={() => setPlayerCount(playerCount + 1)}
              >
                +
              </button>
            </div>
          </div>
          <p className="mt-2 text-sm text-mute" data-bind="playerHint">
            Recommended: 5–8 players.
          </p>
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

export default GameSetup;
