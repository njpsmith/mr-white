import type { Player } from "../../../types/types";
import NewGameButtons from "../../../components/NewGameButtons/NewGameButtons";

export const CorrectGuess = ({
  currentEliminatedPlayer,
  resetGame,
}: {
  currentEliminatedPlayer: Player;
  resetGame: () => void;
}) => {
  return (
    <section className="pt-16 pb-16 mb-16 md:pb-24 md:mb-24 border-divider">
      <div className="px-5 mb-12 container-narrow text-center">
        <h2 className="font-semibold tracking-tight | mt-8 md:mt-12 | text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem]">
          Correct!
        </h2>
        <div className="mb-10">
          <h3>{currentEliminatedPlayer?.playerName} was Mr. White!</h3>
        </div>

        <NewGameButtons resetGame={resetGame} />
      </div>
    </section>
  );
};

export default CorrectGuess;
