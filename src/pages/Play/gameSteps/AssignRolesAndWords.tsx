import type { Player } from "../../../types/types";

const AssignRolesAndWords = ({
  players,
  playerCount,
  currentPlayerNumber,
  currentPlayerName,
  setCurrentPlayerName,
  handleSubmit,
  revealWord,
  handleSubmitRevealWord,
  handleRevealWordButton,
  allPlayersHaveNames,
}: {
  players: Player[];
  playerCount: number;
  currentPlayer: number;
  submitPlayerName: () => void;
  handleSubmit: () => void;
  setCurrentPlayerName: () => void;
  currentPlayerName: string;
  currentPlayerNumber: number;
  revealWord: boolean;
  handleSubmitRevealWord: () => void;
  handleRevealWordButton: () => void;
  allPlayersHaveNames: boolean;
}) => {
  return (
    <>
      <section className="pt-16 pb-16 mb-16 md:pb-24 md:mb-24 border-divider">
        <div className="px-5 mb-12 container-narrow text-center">
          {!revealWord ? (
            <>
              {allPlayersHaveNames ? (
                <>
                  <h2 className="font-semibold tracking-tight | mt-8 md:mt-12 | text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem]">
                    Pass to {players[currentPlayerNumber]?.playerName}
                  </h2>
                  <button
                    onClick={() => handleRevealWordButton()}
                    className="btn btn-primary w-full min-[601px]:w-auto"
                  >
                    Reveal word →
                  </button>
                </>
              ) : (
                <>
                  <h2 className="font-semibold tracking-tight | mt-8 md:mt-12 | text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem]">
                    Pass to Player {currentPlayerNumber}
                  </h2>
                  <form onSubmit={handleSubmit}>
                    <div className="field-group">
                      <label htmlFor="player_name">
                        Player {currentPlayerNumber} enter your name:
                      </label>

                      <input
                        className="mx-auto"
                        type="text"
                        id="player_name"
                        name="player_name"
                        placeholder="Name..."
                        value={currentPlayerName}
                        onChange={(e) => setCurrentPlayerName(e.target.value)}
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn btn-primary w-full min-[601px]:w-auto"
                    >
                      Submit
                    </button>
                  </form>
                </>
              )}
            </>
          ) : (
            <>
              <p>Your secret word is</p>
              <h2 className="font-semibold tracking-tight text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem]">
                {players[currentPlayerNumber - 1]?.word}
              </h2>
              <p className="small">
                Remember this word! Everyone except Mr. White has the same word.
              </p>
              <button
                className="btn btn-primary"
                onClick={() => handleSubmitRevealWord()}
              >
                I've memorised it →
              </button>
            </>
          )}
        </div>

        <p className="note">
          Player {currentPlayerNumber} of {playerCount}
        </p>
      </section>
    </>
  );
};

export default AssignRolesAndWords;
