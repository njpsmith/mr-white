const AssignRolesAndWords = ({
  playerCount,
  currentPlayerNumber,
  currentPlayerName,
  setCurrentPlayerName,
  handleSubmit,
}: {
  playerCount: number;
  currentPlayer: number;
  submitPlayerName: () => void;
  handleSubmit: () => void;
  setCurrentPlayerName: () => void;
  currentPlayerName: string;
  currentPlayerNumber: number;
}) => (
  <>
    <section className="pt-16 pb-16 mb-16 md:pb-24 md:mb-24 border-divider">
      <div className="px-5 mb-12 container-narrow">
        <h2 className="font-semibold tracking-tight | mt-8 md:mt-12 | text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem]">
          Pass to Player {currentPlayerNumber}
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="field-group">
            <label htmlFor="player_name">
              Player {currentPlayerNumber} enter your name:
            </label>

            <input
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
      </div>

      <p className="note">
        Player {currentPlayerNumber} of {playerCount}
      </p>
    </section>
  </>
);

export default AssignRolesAndWords;
